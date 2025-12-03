// src/contexts/MapContext.tsx

import React, {
  createContext,
  useContext,
  useRef,
  useState,
  useEffect,
  useCallback,
  useMemo,
} from 'react';
import type { Map } from 'mapbox-gl';
import type mapboxgl from 'mapbox-gl';

// Define the type for the mapbox-gl module
type MapboxGLModule = typeof mapboxgl;

interface MapContextType {
  map: Map | null;
  mapContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  centerMap: (center: [number, number], zoom?: number) => void;
  mapboxglModule: MapboxGLModule | null; // Expose the module
}

const MapContext = createContext<MapContextType | undefined>(undefined);

interface MapProviderProps {
  children: React.ReactNode;
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<Map | null>(null);
  const [mapboxglModule, setMapboxglModule] = useState<MapboxGLModule | null>(
    null
  );
  const mapInitializedRef = useRef(false);

  useEffect(() => {
    if (!mapContainerRef.current || mapInitializedRef.current) {
      return;
    }

    mapInitializedRef.current = true;
    let mapInstance: Map | null = null;

    const initializeMap = async () => {
      try {
        // 🚀 OPTIMIZATION: Lazy load mapbox-gl
        const mapboxgl = (await import('mapbox-gl')).default;
        await import('mapbox-gl/dist/mapbox-gl.css');

        setMapboxglModule(mapboxgl); // Store the module

        // Check if component is still mounted
        if (!mapContainerRef.current) return;

        mapboxgl.accessToken = import.meta.env
          .VITE_MAPBOX_ACCESS_TOKEN as string;

        mapInstance = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [108.32601152345488, 15.877122578067937],
          zoom: 17,
          pitch: 0,
          bearing: 0,
          attributionControl: false,
        });

        mapInstance.on('load', () => {
          setMap(mapInstance);
        });

        mapInstance.on('error', (e) => {
          console.error('Mapbox GL JS Error:', e.error);
        });
      } catch (error) {
        console.error('Failed to load mapbox-gl:', error);
        mapInitializedRef.current = false;
      }
    };

    initializeMap();

    return () => {
      if (mapInstance) {
        mapInstance.remove();
        setMap(null);
      }
      mapInitializedRef.current = false;
    };
  }, []);

  const centerMap = useCallback(
    (center: [number, number], zoom?: number) => {
      if (map) {
        map.flyTo({ center, zoom: zoom || map.getZoom() });
      } else {
        console.warn('MapProvider: Cannot center map, map instance is null.');
      }
    },
    [map]
  );

  const contextValue = useMemo(
    () => ({ map, mapContainerRef, centerMap, mapboxglModule }),
    [map, centerMap, mapboxglModule]
  );

  return (
    <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>
  );
};

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error('useMapContext must be used within a MapProvider');
  }
  return context;
};
