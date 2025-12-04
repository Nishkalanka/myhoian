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

type MapboxGLModule = any;
let globalMapInstance: Map | null = null;

interface MapContextType {
  map: Map | null;
  mapContainerRef: React.MutableRefObject<HTMLDivElement | null>;
  centerMap: (center: [number, number], zoom?: number) => void;
  mapboxglModule: MapboxGLModule | null;
  isMapLoaded: boolean;
}

const MapContext = createContext<MapContextType | undefined>(undefined);

interface MapProviderProps {
  children: React.ReactNode;
  lazyLoad?: boolean;
}

export const MapProvider: React.FC<MapProviderProps> = ({
  children,
  lazyLoad = true,
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<Map | null>(null);
  const [mapboxglModule, setMapboxglModule] = useState<MapboxGLModule | null>(
    null
  );
  const [isMapLoaded, setIsMapLoaded] = useState(false);
  const [isContainerVisible, setIsContainerVisible] = useState(!lazyLoad);
  const mapboxglModuleRef = useRef<MapboxGLModule | null>(null);

  // 🆕 Эффект для Intersection Observer (ленивая загрузка)
  useEffect(() => {
    if (!lazyLoad) return;
    if (!mapContainerRef.current) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log(
              '📍 [MapContext] Контейнер вошел в viewport, инициализируем карту'
            );
            setIsContainerVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      {
        rootMargin: '100px',
        threshold: 0.01,
      }
    );

    observer.observe(mapContainerRef.current);

    return () => {
      if (mapContainerRef.current) {
        observer.unobserve(mapContainerRef.current);
      }
    };
  }, [lazyLoad]);

  // Основной эффект инициализации
  useEffect(() => {
    if (!isContainerVisible) return;

    // 1. СЦЕНАРИЙ ВОССТАНОВЛЕНИЯ
    if (globalMapInstance) {
      console.log('♻️ [MapContext] Восстановление существующей карты');
      setMap(globalMapInstance);

      if (mapboxglModuleRef.current) {
        setMapboxglModule(mapboxglModuleRef.current);
      } else {
        import('mapbox-gl').then((mod) => {
          setMapboxglModule(mod.default || mod);
          mapboxglModuleRef.current = mod.default || mod;
        });
      }

      setTimeout(() => setIsMapLoaded(true), 100);
      return;
    }

    // 2. СЦЕНАРИЙ ПЕРВОЙ ИНИЦИАЛИЗАЦИИ
    if (!mapContainerRef.current) return;

    let isMounted = true;

    const initializeMap = async () => {
      try {
        if (globalMapInstance) return;

        console.log('🚀 [MapContext] Загрузка Mapbox GL JS...');

        const mapboxglImport = await import('mapbox-gl');
        const mapboxgl = mapboxglImport.default || mapboxglImport;

        // 🆕 Загружаем CSS асинхронно
        await import('mapbox-gl/dist/mapbox-gl.css');

        if (!isMounted) return;

        mapboxglModuleRef.current = mapboxgl;
        setMapboxglModule(mapboxgl);

        if (!mapContainerRef.current) return;

        mapboxgl.accessToken = import.meta.env
          .VITE_MAPBOX_ACCESS_TOKEN as string;

        console.log('🗺️ [MapContext] Создание новой карты...');

        globalMapInstance = new mapboxgl.Map({
          container: mapContainerRef.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [108.32601152345488, 15.877122578067937],
          zoom: 17,
          pitch: 0,
          bearing: 0,
          attributionControl: false,
        });

        globalMapInstance.on('load', () => {
          if (isMounted) {
            console.log('✅ [MapContext] Карта загружена (load event)');
            setMap(globalMapInstance);
            setTimeout(() => setIsMapLoaded(true), 150);
          }
        });

        globalMapInstance.on('error', (e: any) => {
          console.error('[MapContext] Error:', e);
        });
      } catch (error) {
        console.error('[MapContext] Failed to load mapbox-gl:', error);
      }
    };

    initializeMap();

    return () => {
      isMounted = false;
    };
  }, [isContainerVisible]);

  const centerMap = useCallback(
    (center: [number, number], zoom?: number) => {
      const currentMap = map || globalMapInstance;
      if (currentMap) {
        currentMap.flyTo({ center, zoom: zoom || currentMap.getZoom() });
      } else {
        console.warn('MapProvider: Cannot center map, map instance is null.');
      }
    },
    [map]
  );

  const contextValue = useMemo(
    () => ({ map, mapContainerRef, centerMap, mapboxglModule, isMapLoaded }),
    [map, centerMap, mapboxglModule, isMapLoaded]
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
