// src/components/MapComponent.tsx
import React, { useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';

import type { Landmark } from '../data/index';

import { MapProvider } from '../contexts/MapContext';

import '/src/index.css';

// ИМПОРТИРУЕМ ВСЕ НАШИ НОВЫЕ ХУКИ
import { useMapInitialization } from '../hooks/useMapInitialization';
import { useLandmarkMarkers } from '../hooks/useLandmarkMarkers';
import { useUserLocation } from '../hooks/useUserLocation'; // Этот хук будет вызван по-другому

// Mapbox token остается здесь, так как это глобальная конфигурация
mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;

interface MapComponentProps {
  landmarks: Landmark[];
  activeIndex: number | null;
  onMapMarkerClick: (index: number, event: React.MouseEvent) => void;
  onMapClick: () => void;
  setCenterMapFn: React.Dispatch<
    React.SetStateAction<
      ((coords: [number, number], zoom?: number) => void) | null
    >
  >;
}

// Новый маленький вспомогательный компонент для размещения хуков,
// которые зависят от MapContext.
// Мы также можем переместить сюда useLandmarkMarkers, если захотим,
// но пока он не использует MapContext напрямую, его можно оставить выше.
const MapChildren: React.FC = () => {
  // Вызываем хук useUserLocation здесь, внутри MapProvider.
  // Теперь MapContext будет доступен.
  useUserLocation();
  return null; // Этот компонент ничего не рендерит сам по себе
};

export const MapComponent: React.FC<MapComponentProps> = ({
  landmarks,
  activeIndex,
  onMapMarkerClick,
  onMapClick,
  setCenterMapFn,
}) => {
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  // ИСПОЛЬЗУЕМ ХУК ДЛЯ ИНИЦИАЛИЗАЦИИ КАРТЫ
  const { map, isMapLoaded } = useMapInitialization({
    mapContainerRef,
    setCenterMapFn,
    onMapClick,
    setHasUserInteracted,
  });

  // ИСПОЛЬЗУЕМ ХУК ДЛЯ УПРАВЛЕНИЯ МАРКЕРАМИ ДОСТОПРИМЕЧАТЕЛЬНОСТЕЙ
  // Он не зависит напрямую от MapContext, только от map.current,
  // который заполняется в useMapInitialization.
  useLandmarkMarkers({
    map,
    isMapLoaded,
    landmarks,
    activeIndex,
    onMapMarkerClick,
    setHasUserInteracted,
    hasUserInteracted,
  });

  return (
    <MapProvider mapRef={map}>
      <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
      {/* Рендерим MapChildren внутри MapProvider */}
      {isMapLoaded && <MapChildren />}
    </MapProvider>
  );
};
