// src/components/MapComponent.tsx
import React, { useEffect, useState, useRef, memo, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import type { Feature, Point, GeoJsonProperties, LineString } from 'geojson';

import { useMapContext } from '../contexts/MapContext';
import { MapMarkersLayer } from './map/MapMarkersLayer';
import { UserLocationButton } from './UserLocationButton';
import type { ShowSnackbarFn } from './UserLocationButton';

import type { Landmark, LandmarkContent } from '../data';

interface MapComponentProps {
  landmarks: Landmark[]; // Нелокализованные данные
  activeIndex: number | null;
  onMapMarkerClick: (index: number, event: React.MouseEvent) => void;
  onMapClick: () => void;
  routeCoordinates: [number, number][] | undefined;
  hasUserInteracted: boolean;
  isRouteVisible: boolean;
  onShowSnackbar: ShowSnackbarFn;
  getLocalizedContent: (landmark: Landmark) => LandmarkContent;
}

export const MapComponent = memo(function MapComponent({
  landmarks,
  activeIndex,
  onMapMarkerClick: onMapMarkerClickProp,
  onMapClick: onMapClickProp,
  routeCoordinates,
  hasUserInteracted,
  isRouteVisible,
  onShowSnackbar,
  getLocalizedContent,
}: MapComponentProps) {
  const prevPropsRef = useRef<MapComponentProps | null>(null);
  useEffect(() => {
    if (prevPropsRef.current) {
      const changedProps: string[] = [];
      const currentProps = {
        landmarks,
        activeIndex,
        onMapMarkerClick: onMapMarkerClickProp,
        onMapClick: onMapClickProp,
        routeCoordinates,
        hasUserInteracted: hasUserInteracted,
        isRouteVisible,
        onShowSnackbar,
        getLocalizedContent,
      };
      for (const key in currentProps) {
        // @ts-expect-error Property access type compatibility
        if (currentProps[key] !== prevPropsRef.current[key]) {
          changedProps.push(key);
        }
      }
      if (changedProps.length > 0) {
        // Логирование изменений пропсов (закомментировано, если не нужно)
        // console.log('MapComponent: Props changed:', changedProps);
      }
    }
    prevPropsRef.current = {
      landmarks,
      activeIndex,
      onMapMarkerClick: onMapMarkerClickProp,
      onMapClick: onMapClickProp,
      routeCoordinates,
      hasUserInteracted,
      isRouteVisible,
      onShowSnackbar,
      getLocalizedContent,
    };
  }, [
    landmarks,
    activeIndex,
    onMapMarkerClickProp,
    onMapClickProp,
    routeCoordinates,
    hasUserInteracted,
    isRouteVisible,
    onShowSnackbar,
    getLocalizedContent,
  ]);

  const { map, mapContainerRef } = useMapContext();
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Создаем реф для onMapClickProp, чтобы он был стабильным для useEffect
  const onMapClickPropRef = useRef(onMapClickProp);
  useEffect(() => {
    onMapClickPropRef.current = onMapClickProp; // Обновляем реф при каждом рендере
  }, [onMapClickProp]);

  const onMapMarkerClickCallback = useCallback(
    (index: number, event: React.MouseEvent) => {
      onMapMarkerClickProp(index, event);
    },
    [onMapMarkerClickProp]
  );

  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
  const circleSourceId = 'user-location-circle';
  const circleLayerId = 'user-location-circle-layer';

  useEffect(() => {
    const currentMapInstance = map;
    if (!currentMapInstance) {
      setIsMapLoaded(false);
      return;
    }

    const handleMapLoad = () => {
      setIsMapLoaded(true);
    };

    if (currentMapInstance.loaded()) {
      handleMapLoad();
    } else {
      currentMapInstance.on('load', handleMapLoad);
    }

    if (!currentMapInstance.getSource('landmarks-data')) {
      currentMapInstance.addSource('landmarks-data', {
        type: 'geojson',
        data: { type: 'FeatureCollection', features: [] },
        cluster: true,
        clusterMaxZoom: 14,
        clusterRadius: 50,
      });

      currentMapInstance.addLayer({
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

      currentMapInstance.addLayer({
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

      currentMapInstance.on(
        'click',
        'clusters' as any,
        (e: mapboxgl.MapMouseEvent) => {
          const features = currentMapInstance.queryRenderedFeatures(e.point, {
            layers: ['clusters'],
          });
          const clusterId = features[0].properties?.cluster_id;
          (
            currentMapInstance.getSource(
              'landmarks-data'
            ) as mapboxgl.GeoJSONSource
          ).getClusterExpansionZoom(
            clusterId,
            (
              _err: Error | null | undefined, // Исправлено: добавлено _ для неиспользуемого параметра
              zoom: number | null | undefined
            ) => {
              if (_err) return; // Используем _err
              if (features[0].geometry.type === 'Point' && zoom != null) {
                currentMapInstance.easeTo({
                  center: features[0].geometry.coordinates as [number, number],
                  zoom: zoom,
                });
              }
            }
          );
        }
      );

      currentMapInstance.on('mouseenter', 'clusters' as any, () => {
        currentMapInstance.getCanvas().style.cursor = 'pointer';
      });
      currentMapInstance.on('mouseleave', 'clusters' as any, () => {
        currentMapInstance.getCanvas().style.cursor = '';
      });
    }

    if (!currentMapInstance.getSource('static-route')) {
      currentMapInstance.addSource('static-route', {
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

      currentMapInstance.addLayer({
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

    if (
      !currentMapInstance._controls.some(
        (c) => c instanceof mapboxgl.NavigationControl
      )
    ) {
      currentMapInstance.addControl(
        new mapboxgl.NavigationControl(),
        'top-right'
      );
    }

    const handleMapClickListener = () => {
      onMapClickPropRef.current(); // Вызываем актуальную функцию из рефа
    };
    currentMapInstance.on('click', handleMapClickListener);

    const handleMapMoveStart = () => {
      /* noop */
    };

    currentMapInstance.on('movestart', handleMapMoveStart);

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
          .addTo(currentMapInstance);
      }

      if (currentMapInstance.getSource(circleSourceId)) {
        (
          currentMapInstance.getSource(circleSourceId) as mapboxgl.GeoJSONSource
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
        currentMapInstance.addSource(circleSourceId, {
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

        currentMapInstance.addLayer({
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

    const onLocationError = (_err: GeolocationPositionError) => {
      // console.error(`Geolocation error (${_err.code}): ${_err.message}`); // Удален console.error
    };

    let watchId: number | undefined;
    if (navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        onLocationSuccess,
        onLocationError,
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
      );
    } else {
      // console.warn("Geolocation is not supported by your browser."); // Удален console.warn
    }

    return () => {
      currentMapInstance.off('load', handleMapLoad);
      currentMapInstance.off('click', handleMapClickListener);
      currentMapInstance.off('movestart', handleMapMoveStart);

      currentMapInstance.off('click', 'clusters' as any);
      currentMapInstance.off('mouseenter', 'clusters' as any);
      currentMapInstance.off('mouseleave', 'clusters' as any);

      if (watchId !== undefined) {
        navigator.geolocation.clearWatch(watchId);
      }
      if (userMarkerRef.current) {
        userMarkerRef.current.remove();
        userMarkerRef.current = null;
      }

      const removeMapLayerSafe = (id: string) => {
        if (currentMapInstance.getLayer(id)) {
          currentMapInstance.removeLayer(id);
        }
      };
      const removeMapSourceSafe = (id: string) => {
        if (currentMapInstance.getSource(id)) {
          currentMapInstance.removeSource(id);
        }
      };

      removeMapLayerSafe('cluster-count');
      removeMapLayerSafe('clusters');
      removeMapSourceSafe('landmarks-data');

      removeMapLayerSafe('static-route-line');
      removeMapSourceSafe('static-route');

      if (currentMapInstance.loaded()) {
        try {
          removeMapLayerSafe(circleLayerId);
          removeMapSourceSafe(circleSourceId);
        } catch (e) {
          // console.warn(
          //   `MapComponent: Failed to remove location layers/sources during unmount:`,
          //   e
          // ); // Удален console.warn
        }
      } else {
        // console.warn(
        //   "MapComponent: Map not fully loaded during unmount. Skipping some layer/source cleanup."
        // ); // Удален console.warn
      }

      setIsMapLoaded(false);
    };
  }, [map]); // Зависимости только от `map`

  useEffect(() => {
    if (!isMapLoaded || !map) return;

    const source = map.getSource('landmarks-data') as mapboxgl.GeoJSONSource;
    if (source) {
      const geojsonFeatures: Feature<Point, GeoJsonProperties>[] =
        landmarks.map((landmark, index) => ({
          type: 'Feature',
          properties: {
            originalIndex: index,
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
      // console.warn(
      //   "MapComponent: 'landmarks-data' source not found during update."
      // ); // Удален console.warn
    }
  }, [landmarks, isMapLoaded, map]);

  useEffect(() => {
    if (!isMapLoaded || !map) {
      return;
    }

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
      // console.warn(
      //   "MapComponent: 'static-route' source not found during update."
      // ); // Удален console.warn
    }
  }, [routeCoordinates, isRouteVisible, isMapLoaded, map]);

  useEffect(() => {
    if (!map || activeIndex === null || !isMapLoaded) {
      return;
    }

    const activeLandmark = landmarks[activeIndex];
    if (activeLandmark) {
      const [lat, lng] = activeLandmark.coordinates;
      const targetCoordinates: [number, number] = [lng, lat];

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
          getLocalizedContent={getLocalizedContent}
        />
      )}
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
    </>
  );
});
