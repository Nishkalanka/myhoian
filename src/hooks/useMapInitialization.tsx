// src/hooks/useMapInitialization.ts
import { useRef, useEffect, useState, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;

interface UseMapInitializationProps {
  mapContainerRef: React.RefObject<HTMLDivElement>;
  setCenterMapFn: React.Dispatch<
    React.SetStateAction<
      ((coords: [number, number], zoom?: number) => void) | null
    >
  >;
  onMapClick: () => void;
  setHasUserInteracted: React.Dispatch<React.SetStateAction<boolean>>;
}

interface UseMapInitializationResult {
  map: React.MutableRefObject<mapboxgl.Map | null>;
  isMapLoaded: boolean;
}

export const useMapInitialization = ({
  mapContainerRef,
  setCenterMapFn,
  onMapClick,
  setHasUserInteracted,
}: UseMapInitializationProps): UseMapInitializationResult => {
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

    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      //center: [108.34391265913898, 15.888422719170611],
      center: [108.32601152345488, 15.877122578067937],
      //zoom: 12.1,
      zoom: 17,
      pitch: 0,
      bearing: 0,
      attributionControl: false,
    });

    map.current = newMap;
    memoizedSetCenterMapFn(newMap);

    newMap.addControl(new mapboxgl.NavigationControl(), 'top-right');

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
        (_e: mapboxgl.MapMouseEvent) => {
          // 'e' теперь '_e'
          newMap.getCanvas().style.cursor = 'pointer';
        }
      );
      newMap.on(
        'mouseleave',
        'clusters' as any,
        (_e: mapboxgl.MapMouseEvent) => {
          // 'e' теперь '_e'
          newMap.getCanvas().style.cursor = '';
        }
      );
    });

    const handleMapClickListener = (_e: mapboxgl.MapboxEvent) => {
      // 'e' теперь '_e'
      setHasUserInteracted(true);
      onMapClick();
    };
    newMap.on('click', handleMapClickListener);

    const handleMapMoveStart = (_e: mapboxgl.MapboxEvent) => {
      // 'e' теперь '_e'
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

        newMap.remove();
        map.current = null;
        setIsMapLoaded(false);
      }
    };
  }, [
    mapContainerRef,
    setCenterMapFn,
    onMapClick,
    setHasUserInteracted,
    memoizedSetCenterMapFn,
  ]);

  return { map, isMapLoaded };
};
