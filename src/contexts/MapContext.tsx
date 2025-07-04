// src/contexts/MapContext.tsx
import React, { createContext, useContext, useRef, useEffect } from 'react';
import mapboxgl from 'mapbox-gl';

// 1. Определяем тип для контекста
interface MapContextType {
  map: React.MutableRefObject<mapboxgl.Map | null>;
}

// 2. Создаем контекст с начальным значением null
const MapContext = createContext<MapContextType | undefined>(undefined);

// 3. Создаем хук для удобного доступа к контексту
export const useMapContext = () => {
  const context = useContext(MapContext);
  if (context === undefined) {
    throw new Error('useMapContext must be used within a MapProvider');
  }
  return context;
};

// 4. Создаем провайдер контекста
interface MapProviderProps {
  children: React.ReactNode;
  mapRef: React.MutableRefObject<mapboxgl.Map | null>; // Передаем ref карты из MapComponent
}

export const MapProvider: React.FC<MapProviderProps> = ({
  children,
  mapRef,
}) => {
  // MapRef уже передан из MapComponent
  const contextValue = { map: mapRef };

  return (
    <MapContext.Provider value={contextValue}>{children}</MapContext.Provider>
  );
};
