// src/components/MapComponent.tsx
import React, { useEffect, useState, useRef, memo, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import type { Feature, Point, GeoJsonProperties, LineString } from 'geojson';

import { useMapContext } from '../contexts/MapContext';
import { MapMarkersLayer } from './map/MapMarkersLayer';
// --- ДОБАВЛЕНЫ ИМПОРТЫ ДЛЯ КНОПКИ ЛОКАЦИИ ---
import { UserLocationButton } from './UserLocationButton';
import type { ShowSnackbarFn } from './UserLocationButton';
// --- КОНЕЦ ДОБАВЛЕННЫХ ИМПОРТОВ ---

interface MapComponentProps {
  landmarks: any[];
  activeIndex: number | null;
  onMapMarkerClick: (index: number, event: React.MouseEvent) => void;
  onMapClick: () => void;
  routeCoordinates?: [number, number][];
  hasUserInteracted: boolean;
  isRouteVisible: boolean;
  onShowSnackbar: ShowSnackbarFn; // <-- ДОБАВЛЕН НОВЫЙ ПРОПС
}

export const MapComponent = memo(function MapComponent({
  landmarks,
  activeIndex,
  onMapMarkerClick: onMapMarkerClickProp,
  onMapClick: onMapClickProp,
  routeCoordinates,
  hasUserInteracted,
  isRouteVisible,
  onShowSnackbar, // <-- Извлекаем новый пропс
}: MapComponentProps) {
  console.log('MapComponent: Render');

  const { map, mapContainerRef } = useMapContext();
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Оборачиваем колбэки в useCallback, чтобы их ссылки были стабильными
  const onMapClickCallback = useCallback(() => {
    onMapClickProp();
  }, [onMapClickProp]);

  const onMapMarkerClickCallback = useCallback(
    (index: number, event: React.MouseEvent) => {
      onMapMarkerClickProp(index, event);
    },
    [onMapMarkerClickProp]
  );

  // Ref для маркера местоположения пользователя
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
  const circleSourceId = 'user-location-circle';
  const circleLayerId = 'user-location-circle-layer';

  // Эффект для инициализации карты, добавления основных слоев и обработчиков событий
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
            '#ffbf00',
            100,
            '#f1f075',
            750,
            '#f28cb1',
          ],
          'circle-radius': [
            'step',
            ['get', 'point_count'],
            20,
            100,
            30,
            750,
            40,
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

      map.on('mouseenter', 'clusters' as any, () => {
        map.getCanvas().style.cursor = 'pointer';
      });
      map.on('mouseleave', 'clusters' as any, () => {
        map.getCanvas().style.cursor = '';
      });
    }

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

    if (!map._controls.some((c) => c instanceof mapboxgl.NavigationControl)) {
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');
    }

    const handleMapClickListener = () => {
      onMapClickCallback(); // Используем стабилизированный колбэк
    };
    map.on('click', handleMapClickListener);

    const handleMapMoveStart = () => {
      /* ваша логика */
    };
    map.on('movestart', handleMapMoveStart);

    // Геолокация - логика для отрисовки маркера и круга (остается без изменений, так как UserLocationButton
    // только центрирует карту, но не управляет этим визуальным представлением напрямую)
    const onLocationSuccess = (pos: GeolocationPosition) => {
      const { latitude, longitude, accuracy } = pos.coords;
      const newPosition: [number, number] = [longitude, latitude];

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
          .addTo(map);
      }

      if (map.getSource(circleSourceId)) {
        (map.getSource(circleSourceId) as mapboxgl.GeoJSONSource).setData({
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
        map.addSource(circleSourceId, {
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

        map.addLayer({
          id: circleLayerId,
          type: 'circle',
          source: circleSourceId,
          paint: {
            'circle-radius': [
              'interpolate',
              ['linear'],
              ['zoom'],
              0,
              ['/', ['get', 'radius'], ['literal', 100]],
              20,
              ['/', ['get', 'radius'], ['literal', 1]],
            ],
            'circle-color': 'rgba(0, 128, 255, 0.4)',
            'circle-stroke-color': 'rgba(0, 128, 255, 0.8)',
            'circle-stroke-width': 1,
          },
        });
      }
    };

    const onLocationError = (err: GeolocationPositionError) => {
      console.error(`Geolocation error (${err.code}): ${err.message}`);
    };

    let watchId: number | undefined;
    if (navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        onLocationSuccess,
        onLocationError,
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
      );
    } else {
      console.warn('Geolocation is not supported by your browser.');
    }

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

      // Остановка отслеживания геолокации
      if (watchId !== undefined) {
        navigator.geolocation.clearWatch(watchId);
      }
      if (userMarkerRef.current) {
        userMarkerRef.current.remove();
        userMarkerRef.current = null;
      }

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

      // Удаление слоя и источника круга местоположения
      if (map.loaded()) {
        try {
          removeMapLayerSafe(circleLayerId);
          removeMapSourceSafe(circleSourceId);
        } catch (e) {
          console.warn(
            `MapComponent: Failed to remove location layers/sources during unmount:`,
            e
          );
        }
      } else {
        console.warn(
          'MapComponent: Map not fully loaded during unmount. Skipping some layer/source cleanup.'
        );
      }

      setIsMapLoaded(false);
    };
  }, [map, onMapClickCallback]); // Используем стабилизированный колбэк в зависимостях

  // Эффект для обновления данных о локациях (достопримечательностях)
  useEffect(() => {
    if (!isMapLoaded || !map) return;

    console.log('MapComponent: Updating landmark source data.');

    const source = map.getSource('landmarks-data') as mapboxgl.GeoJSONSource;
    if (source) {
      const geojsonFeatures: Feature<Point, GeoJsonProperties>[] =
        landmarks.map((landmark, index) => ({
          type: 'Feature',
          properties: {
            originalIndex: index, // Важно для MapMarkersLayer
            category:
              landmark.category && landmark.category.length > 0
                ? landmark.category[0]
                : 'default',
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
  }, [landmarks, isMapLoaded, map]);

  // Эффект для обновления данных о маршруте
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
  }, [routeCoordinates, isRouteVisible, isMapLoaded, map]);

  // НОВЫЙ useEffect для центрирования карты по activeIndex
  useEffect(() => {
    if (!map || activeIndex === null || !isMapLoaded) {
      return;
    }

    const activeLandmark = landmarks[activeIndex];
    if (activeLandmark) {
      const [lat, lng] = activeLandmark.coordinates;
      const targetCoordinates: [number, number] = [lng, lat];

      console.log(
        'MapComponent: Centering map to active landmark:',
        activeLandmark.id
      );

      map.easeTo({
        center: targetCoordinates,
        zoom: map.getZoom(),
        duration: 800,
      });
    }
  }, [activeIndex, landmarks, map, isMapLoaded]);

  return (
    <>
      <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
      {isMapLoaded && map && (
        <MapMarkersLayer
          map={map}
          landmarks={landmarks}
          activeIndex={activeIndex}
          onMapMarkerClick={onMapMarkerClickCallback}
          hasUserInteracted={hasUserInteracted}
        />
      )}
      {/* --- ДОБАВЛЕН КОМПОНЕНТ КНОПКИ ЛОКАЦИИ --- */}
      {isMapLoaded && map && (
        <UserLocationButton
          centerMapFn={(coords: [number, number], zoom?: number) => {
            map.easeTo({
              center: coords,
              zoom: zoom || map.getZoom(),
              duration: 800,
            });
          }}
          onShowSnackbar={onShowSnackbar}
        />
      )}
      {/* --- КОНЕЦ КОМПОНЕНТА КНОПКИ ЛОКАЦИИ --- */}
    </>
  );
});
