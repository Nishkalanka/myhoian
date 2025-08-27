// src/components/map/MapMarkersLayer.tsx

import React, { useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import mapboxgl from 'mapbox-gl';

import { IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { getCategoryColor } from '../../utils/categoryColors';
import type { Landmark, CategorySlug, LandmarkContent } from '../../data';

interface CustomMarkerProps {
  isActive: boolean;
  onClick: (event: React.MouseEvent) => void;
  isBouncing: boolean;
  markerColor: string;
}

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

interface MapMarkersLayerProps {
  map: mapboxgl.Map | null;
  landmarks: Landmark[];
  activeIndex: number | null;
  onMapMarkerClick: (index: number, event: React.MouseEvent) => void;
  hasUserInteracted: boolean;
  getLocalizedContent: (landmark: Landmark) => LandmarkContent;
}

export const MapMarkersLayer: React.FC<MapMarkersLayerProps> = ({
  map,
  landmarks,
  activeIndex,
  onMapMarkerClick,
  hasUserInteracted,
  getLocalizedContent,
}) => {
  const individualMarkers = useRef<
    Map<number, { marker: mapboxgl.Marker; root: ReactDOM.Root }>
  >(new Map());

  // Эффект 1: Отвечает за создание, обновление позиции и удаление Mapbox-маркеров.
  // Зависит только от `map` и `landmarks`. Запускается редко.
  useEffect(() => {
    const currentMapInstance = map;
    if (!currentMapInstance) {
      return;
    }

    const updateVisibleMarkers = () => {
      // Собираем все точки, которые не являются кластерами
      const newUnclusteredPoints = new Map<
        number,
        GeoJSON.Feature<GeoJSON.Point>
      >();
      try {
        currentMapInstance
          .querySourceFeatures('landmarks-data', {
            filter: ['!', ['has', 'point_count']],
          })
          .forEach((feature) => {
            if (
              feature.properties &&
              typeof feature.properties.originalIndex === 'number' &&
              feature.geometry &&
              feature.geometry.type === 'Point'
            ) {
              newUnclusteredPoints.set(
                feature.properties.originalIndex,
                feature as GeoJSON.Feature<GeoJSON.Point>
              );
            }
          });
      } catch (error) {
        return;
      }

      // Обновляем существующие маркеры или создаем новые
      newUnclusteredPoints.forEach((feature, originalIndex) => {
        const landmark = landmarks[originalIndex];
        if (!landmark) {
          return;
        }

        // Получаем пропсы для CustomMarker, но не рендерим его здесь!
        const categoryColor = getCategoryColor(
          (landmark.category && landmark.category.length > 0
            ? landmark.category[0]
            : 'default') as CategorySlug
        );
        const markerProps = {
          isActive: activeIndex === originalIndex,
          onClick: (event: React.MouseEvent) =>
            onMapMarkerClick(originalIndex, event),
          isBouncing: !hasUserInteracted,
          markerColor: categoryColor,
        };

        if (!individualMarkers.current.has(originalIndex)) {
          // Создание нового маркера
          const markerContainer = document.createElement('div');
          const root = ReactDOM.createRoot(markerContainer);

          root.render(<CustomMarker {...markerProps} />);

          const marker = new mapboxgl.Marker({
            element: markerContainer,
            anchor: 'bottom',
          })
            .setLngLat(feature.geometry.coordinates as [number, number])
            .addTo(currentMapInstance);

          individualMarkers.current.set(originalIndex, { marker, root });
        } else {
          // Обновляем позицию маркера, если она изменилась
          const markerData = individualMarkers.current.get(originalIndex);
          if (markerData) {
            const currentLngLat = markerData.marker.getLngLat();
            const newLngLat = feature.geometry.coordinates as [number, number];
            if (
              currentLngLat.lng !== newLngLat[0] ||
              currentLngLat.lat !== newLngLat[1]
            ) {
              markerData.marker.setLngLat(newLngLat);
            }
          }
        }
      });

      // Удаляем маркеры, которые больше не видны
      individualMarkers.current.forEach((markerData, originalIndex) => {
        if (!newUnclusteredPoints.has(originalIndex)) {
          setTimeout(() => {
            try {
              markerData.root.unmount();
            } catch (e) {
              // error
            }
          }, 0);
          markerData.marker.remove();
          individualMarkers.current.delete(originalIndex);
        }
      });
    };

    // Привязываем обработчики событий
    currentMapInstance.on('idle', updateVisibleMarkers);
    currentMapInstance.on('moveend', updateVisibleMarkers);
    currentMapInstance.on('sourcedata', updateVisibleMarkers);

    // Вызываем начальный рендер
    const initialRenderTimeout = setTimeout(() => {
      if (currentMapInstance.loaded()) {
        updateVisibleMarkers();
      }
    }, 0);

    // Функция очистки при размонтировании компонента
    return () => {
      clearTimeout(initialRenderTimeout);

      if (currentMapInstance) {
        currentMapInstance.off('idle', updateVisibleMarkers);
        currentMapInstance.off('moveend', updateVisibleMarkers);
        currentMapInstance.off('sourcedata', updateVisibleMarkers);
      }

      individualMarkers.current.forEach(({ marker, root }) => {
        setTimeout(() => {
          try {
            root.unmount();
          } catch (e) {
            // error
          }
        }, 0);
        marker.remove();
      });
      individualMarkers.current.clear();
    };
  }, [map, landmarks]);

  // Эффект 2: Отвечает за обновление пропсов CustomMarker.
  // Зависит от `activeIndex`, `hasUserInteracted` и других пропсов, которые могут часто меняться.
  useEffect(() => {
    individualMarkers.current.forEach((markerData, originalIndex) => {
      const landmark = landmarks[originalIndex];
      if (!landmark) {
        return;
      }

      const categoryColor = getCategoryColor(
        (landmark.category && landmark.category.length > 0
          ? landmark.category[0]
          : 'default') as CategorySlug
      );

      // Перерисовываем только React-компонент, а не весь маркер
      markerData.root.render(
        <CustomMarker
          isActive={activeIndex === originalIndex}
          onClick={(event) => onMapMarkerClick(originalIndex, event)}
          isBouncing={!hasUserInteracted}
          markerColor={categoryColor}
        />
      );
    });
  }, [
    activeIndex,
    onMapMarkerClick,
    hasUserInteracted,
    landmarks,
    getLocalizedContent,
  ]);

  return null;
};
