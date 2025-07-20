// src/components/map/MapMarkersLayer.tsx

import React, { useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import mapboxgl from 'mapbox-gl';

import { IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { getCategoryColor } from '../../utils/categoryColors'; // Убедись, что путь правильный
import type { Landmark, CategorySlug } from '../../data'; // Убедись, что путь правильный

// Определение пропсов для CustomMarker
interface CustomMarkerProps {
  isActive: boolean;
  onClick: (event: React.MouseEvent) => void;
  isBouncing: boolean;
  markerColor: string;
}

// Компонент CustomMarker
const CustomMarker: React.FC<CustomMarkerProps> = React.memo(
  ({ isActive, onClick, isBouncing, markerColor }) => {
    const handleClick = useCallback(
      (event: React.MouseEvent) => {
        event.stopPropagation();
        onClick(event);
      },
      [onClick]
    );

    const markerClassName = isBouncing ? 'marker-bounce' : '';

    return (
      <IconButton
        onClick={handleClick}
        className={markerClassName}
        sx={{
          p: 0,
          lineHeight: 1,
          color: isActive ? 'error.main' : markerColor,
          '&:hover': {
            color: isActive ? 'error.dark' : markerColor,
          },
          transition: 'transform 0.3s ease-in-out',
          transform: isActive ? 'scale(1.5)' : 'scale(1)',
          cursor: 'pointer',
        }}
        aria-label="landmark-marker"
      >
        <LocationOnIcon sx={{ fontSize: 30 }} />
      </IconButton>
    );
  }
);

// Определение пропсов для MapMarkersLayer
interface MapMarkersLayerProps {
  map: React.MutableRefObject<mapboxgl.Map | null>;
  landmarks: Landmark[];
  activeIndex: number | null;
  onMapMarkerClick: (index: number, event: React.MouseEvent) => void;
  hasUserInteracted: boolean;
}

export const MapMarkersLayer: React.FC<MapMarkersLayerProps> = ({
  map,
  landmarks,
  activeIndex,
  onMapMarkerClick,
  hasUserInteracted,
}) => {
  // Карта для хранения ссылок на маркеры и их корни, чтобы легко их удалять
  const individualMarkers = useRef<
    Map<number, { marker: mapboxgl.Marker; root: ReactDOM.Root }>
  >(new Map());

  useEffect(() => {
    const currentMapInstance = map.current;
    if (!currentMapInstance) return;

    const updateIndividualMarkers = () => {
      const newUnclusteredPoints = new Map<
        number,
        GeoJSON.Feature<GeoJSON.Point>
      >();

      // Запрашиваем "несгруппированные" (unclustered) точки с карты
      currentMapInstance
        .querySourceFeatures('landmarks-data', {
          filter: ['!', ['has', 'point_count']],
        })
        .forEach((_feature) => {
          if (
            _feature.properties &&
            typeof _feature.properties.originalIndex === 'number'
          ) {
            newUnclusteredPoints.set(
              _feature.properties.originalIndex,
              _feature as GeoJSON.Feature<GeoJSON.Point>
            );
          }
        });

      // Удаляем маркеры, которых больше нет в новых "несгруппированных" точках
      individualMarkers.current.forEach((markerData, originalIndex) => {
        if (!newUnclusteredPoints.has(originalIndex)) {
          queueMicrotask(() => {
            try {
              markerData.root.unmount();
            } catch (e) {
              /* do nothing */
            }
          });
          markerData.marker.remove();
          individualMarkers.current.delete(originalIndex);
        }
      });

      // Добавляем или обновляем маркеры для текущих "несгруппированных" точек
      newUnclusteredPoints.forEach((_feature, originalIndex) => {
        const landmark = landmarks[originalIndex];
        if (!landmark) return;

        const categoryColor = getCategoryColor(
          landmark.category[0] || 'default'
        );

        if (!individualMarkers.current.has(originalIndex)) {
          // Создаем новый маркер
          const markerContainer = document.createElement('div');
          const root = ReactDOM.createRoot(markerContainer);

          root.render(
            <CustomMarker
              isActive={activeIndex === originalIndex}
              onClick={(event) => onMapMarkerClick(originalIndex, event)}
              isBouncing={!hasUserInteracted}
              markerColor={categoryColor}
            />
          );

          const marker = new mapboxgl.Marker({
            element: markerContainer,
            anchor: 'bottom',
          })
            .setLngLat([landmark.coordinates[1], landmark.coordinates[0]])
            .addTo(currentMapInstance);

          individualMarkers.current.set(originalIndex, { marker, root });
        } else {
          // Обновляем существующий маркер
          const markerData = individualMarkers.current.get(originalIndex);
          if (markerData) {
            markerData.root.render(
              <CustomMarker
                isActive={activeIndex === originalIndex}
                onClick={(event) => onMapMarkerClick(originalIndex, event)}
                isBouncing={!hasUserInteracted}
                markerColor={categoryColor}
              />
            );
          }
        }
      });
    };

    // Привязываем обработчик к событиям 'render' и 'moveend' карты
    // чтобы маркеры обновлялись при изменении видимости/кластеризации
    currentMapInstance.on('render', updateIndividualMarkers);
    currentMapInstance.on('moveend', updateIndividualMarkers);

    // Вызываем один раз при монтировании/обновлении, чтобы сразу отобразить маркеры
    updateIndividualMarkers();

    // Функция очистки при размонтировании компонента
    return () => {
      if (currentMapInstance) {
        currentMapInstance.off('render', updateIndividualMarkers);
        currentMapInstance.off('moveend', updateIndividualMarkers);
      }

      // Удаляем все маркеры и размонтируем React-корни
      individualMarkers.current.forEach(({ marker, root }) => {
        queueMicrotask(() => {
          try {
            root.unmount();
          } catch (e) {
            /* do nothing */
          }
        });
        marker.remove();
      });
      individualMarkers.current.clear();
    };
  }, [map, landmarks, activeIndex, onMapMarkerClick, hasUserInteracted]); // Зависимости useEffect

  return null; // Этот компонент не рендерит ничего сам, он управляет сайд-эффектами на карте
};
