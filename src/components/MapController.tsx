// src/components/MapController.tsx

import { useEffect } from 'react';
import { useMap } from 'react-leaflet';
import type { Landmark } from '../data/index';
import L from 'leaflet'; // Импортируем Leaflet для типа LatLngExpression

interface MapControllerProps {
  landmarks: Landmark[];
  activeIndex: number | null;
}

function MapController({ landmarks, activeIndex }: MapControllerProps) {
  const map = useMap(); // Теперь этот useMap() находится внутри MapContainer

  // Эффект для центрирования карты при изменении activeIndex
  useEffect(() => {
    if (activeIndex !== null && landmarks[activeIndex]) {
      const targetLandmark = landmarks[activeIndex];
      const targetCoordinates: L.LatLngExpression = targetLandmark.coordinates;
      // Перемещение карты к выбранному маркеру с анимацией
      map.flyTo(targetCoordinates, map.getZoom()); // Сохраняем текущий зум
    }
  }, [activeIndex, landmarks, map]); // Зависимости: activeIndex, landmarks, map

  return null; // Этот компонент не рендерит никакого UI
}

export default MapController;
