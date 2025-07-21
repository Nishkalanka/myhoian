// src/components/MapComponent.tsx
import React, { useEffect, useState, useRef, memo } from 'react'; // <--- Добавили memo
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import type { Feature, Point, GeoJsonProperties, LineString } from 'geojson';

import { useMapContext } from '../contexts/MapContext';
// import { useLanguage } from "../contexts/LanguageContext"; // Эту строку можно удалить, если currentLang не используется в MapComponent для _дополнительной_ логики, помимо того, что уже учтено в `landmarks`
import { MapMarkersLayer } from './map/MapMarkersLayer';

interface MapComponentProps {
  landmarks: any[]; // Landmark[] - уже локализованные
  activeIndex: number | null;
  onMapMarkerClick: (index: number, event: React.MouseEvent) => void;
  onMapClick: () => void;
  routeCoordinates?: [number, number][];
  hasUserInteracted: boolean;
  isRouteVisible: boolean;
}

// Изменили экспорт, обернув компонент в memo
// Используем "именованную" функциональную компоненту внутри memo для лучшей отладки
export const MapComponent = memo(function MapComponent({
  landmarks,
  activeIndex,
  onMapMarkerClick,
  onMapClick,
  routeCoordinates,
  hasUserInteracted,
  isRouteVisible,
}: MapComponentProps) {
  console.log('MapComponent: Render'); // Лог рендера

  const { map, mapContainerRef } = useMapContext();
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  // const { currentLang } = useLanguage(); // Комментарий оставлен на случай, если его использование все же понадобится

  // Эффект для инициализации карты, добавления основных слоев и обработчиков событий
  // Зависимости: [map, onMapClick]
  useEffect(() => {
    if (!map) {
      setIsMapLoaded(false);
      return;
    }

    console.log('MapComponent: Attaching layers and handlers to existing map.');

    const handleMapLoad = () => {
      setIsMapLoaded(true);
      console.log('MapComponent: Map instance reported as loaded.');
    };

    if (map.loaded()) {
      handleMapLoad();
    } else {
      map.on('load', handleMapLoad);
    }

    // --- Блок добавления источников и слоев Mapbox ---
    // Добавляются только если источник еще не существует
    if (!map.getSource('landmarks-data')) {
      map.addSource('landmarks-data', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] },
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      map.addLayer({
        id: 'clusters',
        type: 'circle',
        source: 'landmarks-data',
        filter: ['has', 'point_count'],
        paint: {
          'circle-color': [
            'step',
            ['get', 'point_count'],
            '#ffbf00', // Цвет для менее 100 точек
            100,
            '#f1f075', // Цвет для 100-749 точек
            750,
            '#f28cb1', // Цвет для 750+ точек
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20, // Радиус для менее 100 точек
            100,
            30, // Радиус для 100-749 точек
            750,
            40, // Радиус для 750+ точек
          ],
        },
      });

      map.addLayer({
        id: 'cluster-count',
        type: 'symbol',
        source: 'landmarks-data',
        filter: ['has', 'point_count'],
        layout: {
          'text-field': '{point_count_abbreviated}',
          'text-font': ['DIN Offc Pro Medium', 'Arial Unicode MS Bold'],
          'text-size': 12,
        },
        paint: {
          'text-color': 'rgb(46, 46, 57)',
        },
      });

      // Обработчик клика по кластеру для зумирования
      map.on('click', 'clusters' as any, (e: mapboxgl.MapMouseEvent) => {
        const features = map.queryRenderedFeatures(e.point, {
          layers: ['clusters'],
        });
        const clusterId = features[0].properties?.cluster_id;
        (
          map.getSource('landmarks-data') as mapboxgl.GeoJSONSource
        ).getClusterExpansionZoom(
          clusterId,
          (err: Error | null | undefined, zoom: number | null | undefined) => {
            if (err) return;
            if (features[0].geometry.type === 'Point' && zoom != null) {
              map.easeTo({
                center: features[0].geometry.coordinates as [number, number],
                zoom: zoom,
              });
            }
          }
        );
      });

      // Изменение курсора при наведении на кластеры
      map.on('mouseenter', 'clusters' as any, () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'clusters' as any, () => {
        map.getCanvas().style.cursor = '';
      });
    }

    // Добавление источника и слоя для статического маршрута
    if (!map.getSource('static-route')) {
      map.addSource('static-route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [],
          },
        },
      });

      map.addLayer({
        id: 'static-route-line',
        type: 'line',
        source: 'static-route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#007bff',
          'line-width': 6,
          'line-opacity': 0.75,
        },
      });
    }

    // Добавление элементов управления навигацией
    if (!map._controls.some((c) => c instanceof mapboxgl.NavigationControl)) {
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }

    // Обработчик клика по карте
    const handleMapClickListener = (e: mapboxgl.MapMouseEvent) => {
      onMapClick();
    };
    map.on('click', handleMapClickListener);

    // Обработчик начала движения карты (закомментирован, если не используется)
    const handleMapMoveStart = (_e: mapboxgl.MapboxEvent) => {
      /* ваша логика */
    };
    map.on('movestart', handleMapMoveStart);

    // Функция очистки при размонтировании компонента
    return () => {
      console.log(
        'MapComponent: Cleaning up layers and handlers (on unmount).'
      );
      map.off('load', handleMapLoad);
      map.off('click', handleMapClickListener);
      map.off('movestart', handleMapMoveStart);

      map.off('click', 'clusters' as any);
      map.off('mouseenter', 'clusters' as any);
      map.off('mouseleave', 'clusters' as any);

      // Безопасное удаление слоев и источников
      const removeMapLayerSafe = (id: string) => {
        if (map.getLayer(id)) {
          map.removeLayer(id);
        }
      };
      const removeMapSourceSafe = (id: string) => {
        if (map.getSource(id)) {
          map.removeSource(id);
        }
      };

      removeMapLayerSafe('cluster-count');
      removeMapLayerSafe('clusters');
      removeMapSourceSafe('landmarks-data');

      removeMapLayerSafe('static-route-line');
      removeMapSourceSafe('static-route');

      setIsMapLoaded(false);
    };
  }, [map, onMapClick]); // onMapClick как зависимость ОК, так как это useCallback

  // Эффект для обновления данных о локациях (достопримечательностях)
  // Зависимости: [landmarks, isMapLoaded, map]
  useEffect(() => {
    if (!isMapLoaded || !map) return; // Эффект сработает только после загрузки карты

    console.log('MapComponent: Updating landmark source data.');

    const source = map.getSource('landmarks-data') as mapboxgl.GeoJSONSource;
    if (source) {
      const geojsonFeatures: Feature<Point, GeoJsonProperties>[] =
        landmarks.map((landmark, index) => ({
          type: 'Feature',
          properties: {
            originalIndex: index,
            category: landmark.category[0] || 'default',
          },
          geometry: {
            type: 'Point',
            coordinates: [landmark.coordinates[1], landmark.coordinates[0]],
          },
        }));
      source.setData({
        type: 'FeatureCollection',
        features: geojsonFeatures,
      });
    } else {
      console.warn(
        "MapComponent: 'landmarks-data' source not found during update."
      );
    }
  }, [landmarks, isMapLoaded, map]); // isMapLoaded вернули, чтобы гарантировать обновление после первой загрузки карты

  // Эффект для обновления данных о маршруте
  // Зависимости: [routeCoordinates, isRouteVisible, isMapLoaded, map]
  useEffect(() => {
    if (!isMapLoaded || !map) {
      return;
    }

    console.log('MapComponent: Updating route source data.');

    const sourceId = 'static-route';
    const source = map.getSource(sourceId) as mapboxgl.GeoJSONSource;
    if (source) {
      const geojson: Feature<LineString> = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates:
            isRouteVisible && routeCoordinates && routeCoordinates.length > 1
              ? routeCoordinates
              : [],
        },
      };
      source.setData(geojson);
    } else {
      console.warn(
        "MapComponent: 'static-route' source not found during update."
      );
    }
  }, [routeCoordinates, isRouteVisible, isMapLoaded, map]); // isMapLoaded вернули

  return (
    <>
      <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
      {/* LocationMarker и MapMarkersLayer рендерятся только после загрузки карты */}
      {isMapLoaded && map && <LocationMarker />}{' '}
      {isMapLoaded && map && (
        <MapMarkersLayer
          map={map}
          landmarks={landmarks}
          activeIndex={activeIndex}
          onMapMarkerClick={onMapMarkerClick}
          hasUserInteracted={hasUserInteracted}
        />
      )}
    </>
  );
}); // Закрывающий memo вызов для MapComponent

// LocationMarker component definition (без изменений, он не нуждается в memo здесь,
// так как он рендерится только внутри MapComponent и только при isMapLoaded && map)
function LocationMarker() {
  console.log('LocationMarker: Render');
  const { map } = useMapContext();
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
  const circleSourceId = 'user-location-circle';
  const circleLayerId = 'user-location-circle-layer';

  useEffect(() => {
    if (!map) {
      return;
    }

    console.log('LocationMarker: Effect run (map present).');

    const currentMap = map;

    if (!navigator.geolocation) {
      // console.warn("Geolocation is not supported by your browser.");
      return;
    }

    const onLocationSuccess = (pos: GeolocationPosition) => {
      const { latitude, longitude, accuracy } = pos.coords;
      const newPosition: [number, number] = [longitude, latitude];

      if (currentMap) {
        if (userMarkerRef.current) {
          userMarkerRef.current.setLngLat(newPosition);
        } else {
          const el = document.createElement('div');
          el.className = 'location-marker';
          el.style.width = '12px';
          el.style.height = '12px';
          el.style.borderRadius = '50%';
          el.style.backgroundColor = 'blue';
          el.style.border = '2px solid white';
          el.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';

          userMarkerRef.current = new mapboxgl.Marker({
            element: el,
            anchor: 'center',
          })
            .setLngLat(newPosition)
            .addTo(currentMap);
        }

        if (currentMap.getSource(circleSourceId)) {
          (
            currentMap.getSource(circleSourceId) as mapboxgl.GeoJSONSource
          ).setData({
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: newPosition,
                },
                properties: {
                  radius: accuracy,
                },
              },
            ],
          });
        } else {
          currentMap.addSource(circleSourceId, {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: newPosition,
                  },
                  properties: {
                    radius: accuracy,
                  },
                },
              ],
            },
          });

          currentMap.addLayer({
            id: circleLayerId,
            type: 'circle',
            source: circleSourceId,
            paint: {
              'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                ['/', ['get', 'radius'], ['literal', 100]], // Масштабируем радиус для разных зумов
                20,
                ['/', ['get', 'radius'], ['literal', 1]],
              ],
              'circle-color': 'rgba(0, 128, 255, 0.4)',
              'circle-stroke-color': 'rgba(0, 128, 255, 0.8)',
              'circle-stroke-width': 1,
            },
          });
        }
      }
    };

    const onLocationError = (_err: GeolocationPositionError) => {
      // console.error(`Geolocation error (${_err.code}): ${_err.message}`);
    };

    // Начинаем отслеживание позиции пользователя
    const watchId = navigator.geolocation.watchPosition(
      onLocationSuccess,
      onLocationError,
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );

    // Функция очистки при размонтировании LocationMarker
    return () => {
      console.log('LocationMarker: Cleaning up.');
      navigator.geolocation.clearWatch(watchId); // Останавливаем отслеживание
      if (userMarkerRef.current) {
        userMarkerRef.current.remove(); // Удаляем маркер с карты
        userMarkerRef.current = null;
      }

      // Безопасное удаление слоя и источника круга местоположения
      if (currentMap && currentMap.loaded()) {
        try {
          if (currentMap.getLayer(circleLayerId)) {
            currentMap.removeLayer(circleLayerId);
          }
        } catch (e) {
          // console.warn(`LocationMarker: Failed to remove layer ${circleLayerId} during unmount:`, e);
        }
        try {
          if (currentMap.getSource(circleSourceId)) {
            currentMap.removeSource(circleSourceId);
          }
        } catch (e) {
          // console.warn(`LocationMarker: Failed to remove source ${circleSourceId} during unmount:`, e);
        }
      } else {
        // console.warn("LocationMarker: Map not fully loaded during unmount or already being removed. Skipping layer/source cleanup.");
      }
    };
  }, [map]); // Зависимость только от map, так как она является контекстной
  return null;
}
