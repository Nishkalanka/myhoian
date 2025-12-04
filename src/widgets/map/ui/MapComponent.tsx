import React, { useEffect, useRef, memo, useCallback } from 'react';
import type { Marker, MapMouseEvent, GeoJSONSource } from 'mapbox-gl';
import type { Feature, Point, GeoJsonProperties, LineString } from 'geojson';

import { useMapContext } from '../../../entities/map/model/MapContext';
import { MapMarkersLayer } from '../../../entities/map/ui/MapMarkersLayer';
import { UserLocationButton } from '../../../features/user-location/ui/UserLocationButton';
import type { ShowSnackbarFn } from '../../../features/user-location/ui/UserLocationButton';

import type {
  Landmark,
  LandmarkContent,
} from '../../../entities/landmark/model/landmarkTypes';

interface MapComponentProps {
  landmarks: Landmark[];
  activeIndex: number | null;
  onMapMarkerClick: (index: number, event: React.MouseEvent) => void;
  onMapClick: () => void;
  routeCoordinates: [number, number][] | undefined;
  hasUserInteracted: boolean;
  isRouteVisible: boolean;
  onShowSnackbar: ShowSnackbarFn;
  getLocalizedContentRef: React.MutableRefObject<
    (landmark: Landmark) => LandmarkContent
  >;
}

// 🛡️ ОПТИМИЗАЦИЯ: Изолированный контейнер для карты
const MapContainerDiv = memo(
  React.forwardRef<HTMLDivElement>((_props, ref) => {
    return <div ref={ref} style={{ height: '100%', width: '100%' }} />;
  })
);

export const MapComponent = memo(function MapComponent({
  landmarks,
  activeIndex,
  onMapMarkerClick: onMapMarkerClickProp,
  onMapClick: onMapClickProp,
  routeCoordinates,
  hasUserInteracted,
  isRouteVisible,
  onShowSnackbar,
  getLocalizedContentRef,
}: MapComponentProps) {
  // Достаем isMapLoaded из контекста
  const { map, mapContainerRef, mapboxglModule, isMapLoaded } = useMapContext();

  const onMapClickPropRef = useRef(onMapClickProp);
  useEffect(() => {
    onMapClickPropRef.current = onMapClickProp;
  }, [onMapClickProp]);

  const onMapMarkerClickCallback = useCallback(
    (index: number, event: React.MouseEvent) => {
      onMapMarkerClickProp(index, event);
    },
    [onMapMarkerClickProp]
  );

  const userMarkerRef = useRef<Marker | null>(null);
  const circleSourceId = 'user-location-circle';
  const circleLayerId = 'user-location-circle-layer';

  // Эффект настройки карты (слои, контролы)
  useEffect(() => {
    const currentMapInstance = map;
    if (!currentMapInstance || !mapboxglModule || !isMapLoaded) return;

    // --- НАСТРОЙКА ИСТОЧНИКОВ И СЛОЕВ (Landmarks, Route, Clusters) ---

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
        paint: { 'text-color': 'rgb(46, 46, 57)' },
      });

      currentMapInstance.on('click', 'clusters' as any, (e: MapMouseEvent) => {
        const features = currentMapInstance.queryRenderedFeatures(e.point, {
          layers: ['clusters'],
        });
        const clusterId = features[0].properties?.cluster_id;

        (
          currentMapInstance.getSource('landmarks-data') as GeoJSONSource
        ).getClusterExpansionZoom(
          clusterId,
          (_err: any, zoom: number | null | undefined) => {
            if (_err) return;
            if (features[0].geometry.type === 'Point' && zoom != null) {
              currentMapInstance.easeTo({
                center: features[0].geometry.coordinates as [number, number],
                zoom: zoom,
              });
            }
          }
        );
      });

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
          geometry: { type: 'LineString', coordinates: [] },
        },
      });

      currentMapInstance.addLayer({
        id: 'static-route-line',
        type: 'line',
        source: 'static-route',
        layout: { 'line-join': 'round', 'line-cap': 'round' },
        paint: {
          'line-color': '#007bff',
          'line-width': 6,
          'line-opacity': 0.75,
        },
      });
    }

    // Контролы

    if (
      !currentMapInstance._controls.some(
        (c: any) => c instanceof mapboxglModule.NavigationControl
      )
    ) {
      currentMapInstance.addControl(
        new mapboxglModule.NavigationControl(),
        'top-right'
      );
    }

    const handleMapClickListener = () => {
      onMapClickPropRef.current();
    };
    currentMapInstance.on('click', handleMapClickListener);

    // Geolocation Logic
    const onLocationSuccess = (pos: GeolocationPosition) => {
      const { latitude, longitude, accuracy, heading } = pos.coords;
      const newPosition: [number, number] = [longitude, latitude];

      if (userMarkerRef.current) {
        userMarkerRef.current.setLngLat(newPosition);
        const el = userMarkerRef.current.getElement();
        let arrow = el.querySelector('.location-heading-arrow') as HTMLElement;
        if (!arrow) {
          arrow = document.createElement('div');
          arrow.className = 'location-heading-arrow';
          el.appendChild(arrow);
        }
        if (heading !== null && heading !== undefined && !isNaN(heading)) {
          arrow.style.display = 'block';
          arrow.style.transform = `rotate(${heading}deg)`;
        } else {
          arrow.style.display = 'none';
        }
      } else {
        const el = document.createElement('div');
        el.className = 'location-marker';
        const arrow = document.createElement('div');
        arrow.className = 'location-heading-arrow';
        el.appendChild(arrow);
        if (heading !== null && heading !== undefined && !isNaN(heading)) {
          arrow.style.display = 'block';
          arrow.style.transform = `rotate(${heading}deg)`;
        }
        userMarkerRef.current = new mapboxglModule.Marker({
          element: el,
          anchor: 'center',
        })
          .setLngLat(newPosition)
          .addTo(currentMapInstance);
      }

      if (currentMapInstance.getSource(circleSourceId)) {
        (currentMapInstance.getSource(circleSourceId) as GeoJSONSource).setData(
          {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: { type: 'Point', coordinates: newPosition },
                properties: { radius: accuracy },
              },
            ],
          }
        );
      } else {
        currentMapInstance.addSource(circleSourceId, {
          type: 'geojson',
          data: {
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: { type: 'Point', coordinates: newPosition },
                properties: { radius: accuracy },
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

    let watchId: number | undefined;
    if (navigator.geolocation) {
      watchId = navigator.geolocation.watchPosition(
        onLocationSuccess,
        (error) => {
          console.warn('Geo error:', error.message);
        },
        { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
      );
    }

    return () => {
      // CLEANUP
      currentMapInstance.off('click', handleMapClickListener);
      currentMapInstance.off('click', 'clusters' as any);
      currentMapInstance.off('mouseenter', 'clusters' as any);
      currentMapInstance.off('mouseleave', 'clusters' as any);

      if (watchId !== undefined) navigator.geolocation.clearWatch(watchId);

      if (userMarkerRef.current) {
        userMarkerRef.current.remove();
        userMarkerRef.current = null;
      }

      try {
        if (currentMapInstance.getLayer('cluster-count'))
          currentMapInstance.removeLayer('cluster-count');
        if (currentMapInstance.getLayer('clusters'))
          currentMapInstance.removeLayer('clusters');
        if (currentMapInstance.getSource('landmarks-data'))
          currentMapInstance.removeSource('landmarks-data');
        if (currentMapInstance.getLayer('static-route-line'))
          currentMapInstance.removeLayer('static-route-line');
        if (currentMapInstance.getSource('static-route'))
          currentMapInstance.removeSource('static-route');
        if (currentMapInstance.getLayer(circleLayerId))
          currentMapInstance.removeLayer(circleLayerId);
        if (currentMapInstance.getSource(circleSourceId))
          currentMapInstance.removeSource(circleSourceId);
      } catch (e) {
        // ignore
      }
    };
  }, [map, mapboxglModule, isMapLoaded]);

  // Эффект обновления GeoJSON (Landmarks)
  useEffect(() => {
    if (!isMapLoaded || !map) return;
    const source = map.getSource('landmarks-data') as GeoJSONSource;
    if (source) {
      const geojsonFeatures: Feature<Point, GeoJsonProperties>[] =
        landmarks.map((landmark, index) => ({
          type: 'Feature',
          properties: {
            originalIndex: index,
            category: landmark.category?.[0] || 'default',
          },
          geometry: {
            type: 'Point',
            coordinates: [landmark.coordinates[1], landmark.coordinates[0]],
          },
        }));
      source.setData({ type: 'FeatureCollection', features: geojsonFeatures });
    }
  }, [landmarks, isMapLoaded, map]);

  // Эффект обновления маршрута
  useEffect(() => {
    if (!isMapLoaded || !map) return;
    const source = map.getSource('static-route') as GeoJSONSource;
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
    }
  }, [routeCoordinates, isRouteVisible, isMapLoaded, map]);

  // Эффект полета камеры (easeTo)
  useEffect(() => {
    if (!map || activeIndex === null || !isMapLoaded) return;
    const activeLandmark = landmarks[activeIndex];
    if (activeLandmark) {
      const [lat, lng] = activeLandmark.coordinates;
      map.easeTo({ center: [lng, lat], zoom: map.getZoom(), duration: 800 });
    }
  }, [activeIndex, landmarks, map, isMapLoaded]);

  return (
    <>
      <MapContainerDiv ref={mapContainerRef} />

      {isMapLoaded && map && mapboxglModule && (
        <MapMarkersLayer
          map={map}
          landmarks={landmarks}
          activeIndex={activeIndex}
          onMapMarkerClick={onMapMarkerClickCallback}
          hasUserInteracted={hasUserInteracted}
          getLocalizedContent={getLocalizedContentRef.current}
          mapboxglModule={mapboxglModule}
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
