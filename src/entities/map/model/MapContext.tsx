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

// 🛠 FIX: Используем any для модуля, чтобы TS не ругался на несовпадение типов при импорте

type MapboxGLModule = any;

// 🌍 SINGLETON: Глобальная переменная живет вне жизненного цикла React
// Это гарантирует, что new mapboxgl.Map() вызовется ровно 1 раз за сессию вкладки.
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
}

export const MapProvider: React.FC<MapProviderProps> = ({ children }) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [map, setMap] = useState<Map | null>(null);
  const [mapboxglModule, setMapboxglModule] = useState<MapboxGLModule | null>(
    null
  );
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // Реф для хранения модуля, чтобы восстановить его при ре-маунте
  const mapboxglModuleRef = useRef<MapboxGLModule | null>(null);

  useEffect(() => {
    // 1. СЦЕНАРИЙ ВОССТАНОВЛЕНИЯ
    // Если карта уже была создана ранее (при смене языка или роута)
    if (globalMapInstance) {
      console.log('♻️ [MapContext] Восстановление существующей карты');
      setMap(globalMapInstance);

      if (mapboxglModuleRef.current) {
        setMapboxglModule(mapboxglModuleRef.current);
      } else {
        // Если реф пуст (страница перезагрузилась), пробуем подгрузить модуль снова, но карту не трогаем
        import('mapbox-gl').then((mod) => {
          setMapboxglModule(mod.default || mod);
          mapboxglModuleRef.current = mod.default || mod;
        });
      }

      // Небольшая задержка для плавности UI
      setTimeout(() => setIsMapLoaded(true), 100);
      return;
    }

    // 2. СЦЕНАРИЙ ПЕРВОЙ ИНИЦИАЛИЗАЦИИ
    if (!mapContainerRef.current) return;

    let isMounted = true;

    const initializeMap = async () => {
      try {
        // Double-check: если пока мы ждали, карту уже кто-то создал
        if (globalMapInstance) return;

        console.log('🚀 [MapContext] Загрузка Mapbox GL JS...');

        // Ленивая загрузка
        const mapboxglImport = await import('mapbox-gl');
        const mapboxgl = mapboxglImport.default || mapboxglImport;
        await import('mapbox-gl/dist/mapbox-gl.css');

        if (!isMounted) return;

        // Сохраняем модуль
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
      // 🛑 ВАЖНО: Мы НЕ вызываем globalMapInstance.remove() здесь.
      // Мы хотим, чтобы карта жила в памяти даже при размонтировании компонента.

      // Сбрасываем локальный стейт, но не глобальный инстанс
      setIsMapLoaded(false);
    };
  }, []);

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
