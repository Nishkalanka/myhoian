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
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

// Ваш Mapbox Access Token
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;

interface MapContextType {
  map: mapboxgl.Map | null; // Сам экземпляр карты
  mapContainerRef: React.MutableRefObject<HTMLDivElement | null>; // Реф на DOM-контейнер
  centerMap: (center: [number, number], zoom?: number) => void;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

interface MapProviderProps {
  children: React.ReactNode;
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  console.log('MapProvider: Render'); // Лог рендера

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<mapboxgl.Map | null>(null);
  const mapInitializedRef = useRef(false);

  useEffect(() => {
    if (!mapContainerRef.current || mapInitializedRef.current) {
      return;
    }

    console.log('MapProvider: Initializing Mapbox map...');
    mapInitializedRef.current = true;

    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [108.32601152345488, 15.877122578067937],
      zoom: 17,
      pitch: 0,
      bearing: 0,
      attributionControl: false,
    });

    newMap.on('load', () => {
      setMap(newMap);
      console.log('MapProvider: Map loaded and set in context.');
    });

    newMap.on('error', (e) => {
      console.error('Mapbox GL JS Error:', e.error);
    });

    return () => {
      if (newMap) {
        console.log('MapProvider: Cleaning up map instance.');
        newMap.remove();
        setMap(null);
        mapInitializedRef.current = false;
      }
    };
  }, []); // Пустой массив зависимостей

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
    () => ({ map, mapContainerRef, centerMap }),
    [map, centerMap]
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
