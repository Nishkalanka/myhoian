// src/components/MapComponent.tsx

import React, { useRef, useEffect, useState, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import { useTranslation } from 'react-i18next';

import type { Landmark, LandmarkContent, CategorySlug } from '../data/index';

import { MapProvider } from '../contexts/MapContext';
import { useMapContext } from '../contexts/MapContext'; // По-прежнему используется LocationMarker

import { MapMarkersLayer } from './map/MapMarkersLayer';

import '/src/index.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;

interface MapComponentProps {
  landmarks: Landmark[];
  activeIndex: number | null;
  onMapMarkerClick: (index: number, event: React.MouseEvent) => void;
  onMapClick: () => void;
  setCenterMapFn: React.Dispatch<
    React.SetStateAction<
      ((coords: [number, number], zoom?: number) => void) | null
    >
  >;
  // --- НОВОЕ: Пропс для массива координат маршрута ---
  routeCoordinates?: [number, number][]; // Массив [долгота, широта][]
  // --- КОНЕЦ НОВОГО ПРОПСА ---
}

export const MapComponent: React.FC<MapComponentProps> = ({
  landmarks,
  activeIndex,
  onMapMarkerClick,
  onMapClick,
  setCenterMapFn,
  routeCoordinates, // Деструктурируем новый пропс
}) => {
  const { i18n } = useTranslation();
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  // Вспомогательная функция для получения локализованного контента
  // Если она не используется нигде более в MapComponent, её можно удалить.
  const getLocalizedContent = useCallback(
    (landmark: Landmark): LandmarkContent => {
      const lang = i18n.language as keyof Pick<
        Landmark,
        'ru' | 'en' | 'es' | 'fr' | 'vn'
      >;

      if (lang === 'ru' && landmark.ru) return landmark.ru;
      if (lang === 'es' && landmark.es) return landmark.es;
      if (lang === 'fr' && landmark.fr) return landmark.fr;
      if (lang === 'vn' && landmark.vn) return landmark.vn;
      return landmark.en;
    },
    [i18n.language]
  );

  const memoizedSetCenterMapFn = useCallback(
    (mapInstance: mapboxgl.Map | null) => {
      if (!mapInstance) return;
      setCenterMapFn(() => (coords: [number, number], zoom?: number) => {
        mapInstance.flyTo({
          center: coords,
          zoom: zoom ?? mapInstance.getZoom(),
          essential: true,
        });
      });
    },
    [setCenterMapFn]
  );

  useEffect(() => {
    if (map.current) {
      memoizedSetCenterMapFn(map.current);
      return;
    }

    if (!mapContainerRef.current) {
      return;
    }

    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [108.32601152345488, 15.877122578067937],
      zoom: 17,
      pitch: 0,
      bearing: 0,
      attributionControl: false,
    });

    map.current = newMap;

    newMap.addControl(new mapboxgl.NavigationControl(), 'top-right');
    memoizedSetCenterMapFn(newMap);

    newMap.on('load', () => {
      setIsMapLoaded(true);

      newMap.addSource('landmarks-data', {
        type: 'geojson',
        data: {
          type: 'FeatureCollection',
          features: [],
        },
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      newMap.addLayer({
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

      newMap.addLayer({
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

      newMap.on('click', 'clusters', (e: mapboxgl.MapMouseEvent) => {
        const features = newMap.queryRenderedFeatures(e.point, {
          layers: ['clusters'],
        });
        const clusterId = features[0].properties?.cluster_id;
        (
          newMap.getSource('landmarks-data') as mapboxgl.GeoJSONSource
        ).getClusterExpansionZoom(
          clusterId,
          (err: Error | null | undefined, zoom: number | null | undefined) => {
            if (err) {
              console.error('Error getting cluster expansion zoom:', err);
              return;
            }
            if (features[0].geometry.type === 'Point' && zoom != null) {
              newMap.easeTo({
                center: features[0].geometry.coordinates as [number, number],
                zoom: zoom,
              });
            }
          }
        );
      });

      newMap.on(
        'mouseenter',
        'clusters' as any,
        (e: mapboxgl.MapMouseEvent) => {
          newMap.getCanvas().style.cursor = 'pointer';
        }
      );
      newMap.on(
        'mouseleave',
        'clusters' as any,
        (e: mapboxgl.MapMouseEvent) => {
          newMap.getCanvas().style.cursor = '';
        }
      );

      // --- ДОБАВЛЯЕМ ИСТОЧНИК И СЛОЙ ДЛЯ СТАТИЧНОГО МАРШРУТА ---
      newMap.addSource('static-route', {
        type: 'geojson',
        data: {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            coordinates: [], // Изначально пустой
          },
        },
      });

      newMap.addLayer({
        id: 'static-route-line',
        type: 'line',
        source: 'static-route',
        layout: {
          'line-join': 'round',
          'line-cap': 'round',
        },
        paint: {
          'line-color': '#007bff', // Цвет линии маршрута (синий)
          'line-width': 6,
          'line-opacity': 0.75,
        },
      });
      // --- КОНЕЦ ДОБАВЛЕНИЯ СЛОЕВ ДЛЯ СТАТИЧНОГО МАРШРУТА ---
    });

    const handleMapClickListener = (_e: mapboxgl.MapboxEvent) => {
      setHasUserInteracted(true);
      onMapClick();
    };
    newMap.on('click', handleMapClickListener);

    const handleMapMoveStart = (_e: mapboxgl.MapboxEvent) => {
      setHasUserInteracted(true);
    };
    newMap.on('movestart', handleMapMoveStart);

    return () => {
      if (newMap) {
        newMap.off('click', handleMapClickListener);
        newMap.off('movestart', handleMapMoveStart);
        newMap.off('click', 'clusters' as any);
        newMap.off('mouseenter', 'clusters' as any);
        newMap.off('mouseleave', 'clusters' as any);

        if (newMap.getLayer('cluster-count'))
          newMap.removeLayer('cluster-count');
        if (newMap.getLayer('clusters')) newMap.removeLayer('clusters');
        if (newMap.getSource('landmarks-data'))
          newMap.removeSource('landmarks-data');

        // --- УДАЛЯЕМ СЛОИ СТАТИЧНОГО МАРШРУТА ПРИ РАЗМОНТИРОВАНИИ ---
        if (newMap.getLayer('static-route-line'))
          newMap.removeLayer('static-route-line');
        if (newMap.getSource('static-route'))
          newMap.removeSource('static-route');
        // --- КОНЕЦ УДАЛЕНИЯ СЛОЕВ СТАТИЧНОГО МАРШРУТА ---

        newMap.remove();
        map.current = null;
        setIsMapLoaded(false);
      }
    };
  }, []);

  // Новый useEffect для обновления данных GeoJSON в источнике
  useEffect(() => {
    if (!isMapLoaded || !map.current) return;

    const currentMapInstance = map.current;
    const source = currentMapInstance.getSource(
      'landmarks-data'
    ) as mapboxgl.GeoJSONSource;

    if (!source) {
      return;
    }

    const geojsonFeatures: GeoJSON.Feature<
      GeoJSON.Point,
      { originalIndex: number; category: CategorySlug }
    >[] = landmarks.map((landmark, index) => ({
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
  }, [landmarks, isMapLoaded]);

  // --- НОВЫЙ useEffect для обновления статического маршрута ---
  // Этот useEffect следит за пропсом routeCoordinates и обновляет слой маршрута
  useEffect(() => {
    if (
      !isMapLoaded ||
      !map.current ||
      !map.current.getSource('static-route')
    ) {
      return;
    }

    const staticRouteSource = map.current.getSource(
      'static-route'
    ) as mapboxgl.GeoJSONSource;

    if (routeCoordinates && routeCoordinates.length > 1) {
      const geojson: GeoJSON.Feature<GeoJSON.LineString> = {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: routeCoordinates,
        },
      };
      staticRouteSource.setData(geojson);
    } else {
      // Очищаем маршрут, если координат нет или их меньше двух
      staticRouteSource.setData({
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'LineString',
          coordinates: [],
        },
      });
    }
  }, [routeCoordinates, isMapLoaded]); // Зависимость от routeCoordinates и isMapLoaded
  // --- КОНЕЦ НОВОГО useEffect ---

  return (
    <MapProvider mapRef={map}>
      <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
      {isMapLoaded && <LocationMarker />}{' '}
      {isMapLoaded && (
        <MapMarkersLayer
          map={map}
          landmarks={landmarks}
          activeIndex={activeIndex}
          onMapMarkerClick={onMapMarkerClick}
          hasUserInteracted={hasUserInteracted}
        />
      )}
    </MapProvider>
  );
};

// LocationMarker пока остается здесь (как в твоем рабочем файле)
function LocationMarker() {
  const { map } = useMapContext();
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
  const circleSourceId = 'user-location-circle';
  const circleLayerId = 'user-location-circle-layer';

  useEffect(() => {
    if (!map.current) {
      return;
    }

    const currentMap = map.current;

    if (!navigator.geolocation) {
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
      }
    };

    const onLocationError = (_err: GeolocationPositionError) => {
      // console.error(`Geolocation error (${_err.code}): ${_err.message}`);
    };

    const watchId = navigator.geolocation.watchPosition(
      onLocationSuccess,
      onLocationError,
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
      if (userMarkerRef.current) {
        userMarkerRef.current.remove();
        userMarkerRef.current = null;
      }

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
  }, [map]);

  return null;
}
