// src/components/MapComponent.tsx

import React, { useRef, useEffect, useState, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import type {
  Feature,
  Point,
  GeoJsonProperties,
  FeatureCollection,
  LineString,
} from 'geojson';
import type { Landmark, CategorySlug } from '../data/index';

import { MapProvider } from '../contexts/MapContext';
import { useMapContext } from '../contexts/MapContext';

import { MapMarkersLayer } from './map/MapMarkersLayer';

// Your Mapbox Access Token
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;

interface MapComponentProps {
  landmarks: Landmark[];
  activeIndex: number | null;
  onMapMarkerClick: (index: number, event: React.MouseEvent) => void;
  onMapClick: () => void;
  setCenterMapFn: React.Dispatch<
    React.SetStateAction<
      ((coords: [number, number], zoom?: number | undefined) => void) | null
    >
  >;
  routeCoordinates?: [number, number][]; // <--- CHANGE THIS LINE: Make it optional
  hasUserInteracted: boolean;
  isRouteVisible: boolean;
}

export const MapComponent = React.memo(
  ({
    landmarks,
    activeIndex,
    onMapMarkerClick,
    onMapClick,
    setCenterMapFn,
    routeCoordinates,
    hasUserInteracted,
    isRouteVisible,
  }: MapComponentProps) => {
    const mapContainerRef = useRef<HTMLDivElement | null>(null);
    const map = useRef<mapboxgl.Map | null>(null);
    const [isMapLoaded, setIsMapLoaded] = useState(false);

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

      console.log('MapComponent: Initializing Mapbox map...');

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
            (
              err: Error | null | undefined,
              zoom: number | null | undefined
            ) => {
              if (err) {
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
          (_e: mapboxgl.MapMouseEvent) => {
            newMap.getCanvas().style.cursor = 'pointer';
          }
        );
        newMap.on(
          'mouseleave',
          'clusters' as any,
          (_e: mapboxgl.MapMouseEvent) => {
            newMap.getCanvas().style.cursor = '';
          }
        );

        // --- ADDING SOURCE AND LAYER FOR STATIC ROUTE ON MAP LOAD ---
        newMap.addSource('static-route', {
          type: 'geojson',
          data: {
            type: 'Feature',
            properties: {},
            geometry: {
              type: 'LineString',
              coordinates: [], // Initially empty coordinates
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
            'line-color': '#007bff',
            'line-width': 6,
            'line-opacity': 0.75,
          },
        });
        // --- END ADDING LAYERS FOR STATIC ROUTE ---
      });

      // --- CLICK HANDLER FOR GETTING COORDINATES ---
      const handleMapClickListener = (e: mapboxgl.MapMouseEvent) => {
        const { lng, lat } = e.lngLat;
        console.log('Map clicked: Longitude:', lng, 'Latitude:', lat);
        onMapClick(); // Call existing prop for snackbar
      };

      newMap.on('click', handleMapClickListener);
      // --- END CLICK HANDLER ---

      const handleMapMoveStart = (_e: mapboxgl.MapboxEvent) => {
        // This is a map movement handler if you need to do something when movement starts
      };
      newMap.on('movestart', handleMapMoveStart);

      // Cleanup logic when component unmounts
      return () => {
        if (newMap) {
          console.log('MapComponent: Removing Mapbox map...');
          newMap.off('click', handleMapClickListener);
          newMap.off('movestart', handleMapMoveStart);
          newMap.off('click', 'clusters' as any);
          newMap.off('mouseenter', 'clusters' as any);
          newMap.off('mouseleave', 'clusters' as any);

          const removeMapLayer = (id: string) => {
            if (newMap.getLayer(id)) newMap.removeLayer(id);
          };
          const removeMapSource = (id: string) => {
            if (newMap.getSource(id)) newMap.removeSource(id);
          };

          removeMapLayer('cluster-count');
          removeMapLayer('clusters');
          removeMapSource('landmarks-data');

          removeMapLayer('static-route-line');
          removeMapSource('static-route');

          newMap.remove();
          map.current = null;
          setIsMapLoaded(false);
        }
      };
    }, [onMapClick, memoizedSetCenterMapFn]);

    // useEffect for updating GeoJSON data in source (for markers/clusters)
    useEffect(() => {
      if (!isMapLoaded || !map.current) return;

      const currentMapInstance = map.current;
      const source = currentMapInstance.getSource(
        'landmarks-data'
      ) as mapboxgl.GeoJSONSource;

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
    }, [landmarks, isMapLoaded]);

    // --- useEffect for updating static route ---
    useEffect(() => {
      if (!isMapLoaded || !map.current) {
        return;
      }

      const mapInstance = map.current;
      const sourceId = 'static-route';

      const source = mapInstance.getSource(sourceId) as mapboxgl.GeoJSONSource;
      if (source) {
        const geojson: Feature<LineString> = {
          type: 'Feature',
          properties: {},
          geometry: {
            type: 'LineString',
            // Use routeCoordinates if available and visible, otherwise an empty array
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
    }, [routeCoordinates, isMapLoaded, isRouteVisible]);

    return (
      <MapProvider mapRef={map}>
        <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
        {isMapLoaded && <LocationMarker />}
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
  }
);

// LocationMarker and its logic remain the same
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
