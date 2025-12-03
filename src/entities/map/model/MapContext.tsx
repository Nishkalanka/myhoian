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

type MapboxGLModule = typeof mapboxgl;

interface MapContextType {
  map: Map | null;
  mapContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  centerMap: (center: [number, number], zoom?: number) => void;
  mapboxglModule: MapboxGLModule | null;
  isMapLoaded: boolean; // Экспортируем состояние загрузки, если нужно снаружи
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
  const [isMapLoaded, setIsMapLoaded] = useState(false); // ✨ Состояние загрузки

  const mapInstanceRef = useRef<Map | null>(null);
  const mapInitializedRef = useRef(false);

  useEffect(() => {
    if (!mapContainerRef.current || mapInitializedRef.current) return;

    mapInitializedRef.current = true;
    let isMounted = true;

    const initializeMap = async () => {
      try {
        const mapboxgl = (await import('mapbox-gl')).default;
        await import('mapbox-gl/dist/mapbox-gl.css');

        if (!isMounted) return;

        setMapboxglModule(mapboxgl);
        if (!mapContainerRef.current) return;

        mapboxgl.accessToken = import.meta.env
          .VITE_MAPBOX_ACCESS_TOKEN as string;

        const mapInstance = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [108.32601152345488, 15.877122578067937],
          zoom: 17,
          pitch: 0,
          bearing: 0,
          attributionControl: false,
        });

        mapInstanceRef.current = mapInstance;

        // ✨ Ждем, пока карта полностью загрузит стиль и базовые тайлы
        mapInstance.on('load', () => {
          if (isMounted) {
            setMap(mapInstance);
            // Небольшая задержка, чтобы точно не видеть серый фон
            setTimeout(() => {
              setIsMapLoaded(true);
            }, 150);
          }
        });

        mapInstance.on('error', (e) => {
          console.error('Mapbox GL JS Error:', e.error);
        });
      } catch (error) {
        console.error('Failed to load mapbox-gl:', error);
        if (isMounted) mapInitializedRef.current = false;
      }
    };

    initializeMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
      setMap(null);
      setIsMapLoaded(false); // Сбрасываем при размонтировании
      mapInitializedRef.current = false;
    };
  }, []);

  const centerMap = useCallback(
    (center: [number, number], zoom?: number) => {
      if (map) {
        map.flyTo({ center, zoom: zoom || map.getZoom() });
      }
    },
    [map]
  );

  const contextValue = useMemo(
    () => ({
      map,
      mapContainerRef,
      centerMap,
      mapboxglModule,
      isMapLoaded,
    }),
    [map, centerMap, mapboxglModule, isMapLoaded]
  );

  return (
    <MapContext.Provider value={contextValue}>
      {/* 
            ✨ Обертка для плавного появления. 
            Мы применяем стили прямо к контейнеру карты через пропсы или CSS.
            Но так как ref передается извне (скорее всего), 
            лучше всего управлять классом на самом div с картой.
        */}
      {children}
    </MapContext.Provider>
  );
};

export const useMapContext = () => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error('useMapContext must be used within a MapProvider');
  }
  return context;
};
