// src/components/map/MapMarkersLayer.tsx

import React, { useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import mapboxgl from 'mapbox-gl';

import { IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import { getCategoryColor } from '../../utils/categoryColors';
import type { Landmark, CategorySlug } from '../../data';

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
          animation: isBouncing ? 'pulse 1s infinite alternate' : 'none',
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
  map: mapboxgl.Map | null;
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
  const individualMarkers = useRef<
    Map<number, { marker: mapboxgl.Marker; root: ReactDOM.Root }>
  >(new Map());

  // Этот useEffect будет отвечать за создание/удаление Mapbox-маркеров и их React-корней.
  // Он будет срабатывать только при изменении `map` или `landmarks`.
  // Изменение `activeIndex` не должно приводить к пересозданию маркеров.
  useEffect(() => {
    const currentMapInstance = map;
    if (!currentMapInstance) {
      console.log('MapMarkersLayer: Map instance is null, returning.');
      return;
    }

    console.log('MapMarkersLayer: Setting up map event listeners for markers.');

    const updateVisibleMarkers = () => {
      //console.log('MapMarkersLayer: updateVisibleMarkers triggered.');
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
        console.warn('MapMarkersLayer: Error querying source features:', error);
        return;
      }

      // Обновляем/добавляем маркеры
      newUnclusteredPoints.forEach((feature, originalIndex) => {
        const landmark = landmarks[originalIndex];
        if (!landmark) {
          return;
        }

        const categoryColor = getCategoryColor(
          (landmark.category && landmark.category.length > 0
            ? landmark.category[0]
            : 'default') as CategorySlug
        );

        if (!individualMarkers.current.has(originalIndex)) {
          // Создаем новый маркер
          //console.log(`MapMarkersLayer: Creating new marker for index ${originalIndex}`);
          const markerContainer = document.createElement('div');
          const root = ReactDOM.createRoot(markerContainer);

          root.render(
            <CustomMarker
              isActive={activeIndex === originalIndex} // initial active state
              onClick={(event) => onMapMarkerClick(originalIndex, event)}
              isBouncing={!hasUserInteracted}
              markerColor={categoryColor}
            />
          );

          const marker = new mapboxgl.Marker({
            element: markerContainer,
            anchor: 'bottom',
          })
            .setLngLat(feature.geometry.coordinates as [number, number])
            .addTo(currentMapInstance);

          individualMarkers.current.set(originalIndex, { marker, root });
        } else {
          // Обновляем существующий маркер.
          // Здесь мы не вызываем render, так как для CustomMarker props activeIndex
          // обновляются в отдельном useEffect ниже.
          // Только если координаты изменились, мы обновляем LngLat.
          const markerData = individualMarkers.current.get(originalIndex);
          if (markerData) {
            markerData.marker.setLngLat(
              feature.geometry.coordinates as [number, number]
            );
          }
        }
      });

      // Удаляем маркеры, которых больше нет
      individualMarkers.current.forEach((markerData, originalIndex) => {
        if (!newUnclusteredPoints.has(originalIndex)) {
          //console.log(`MapMarkersLayer: Removing marker for index ${originalIndex}`);
          // *** ИЗМЕНЕНИЕ ЗДЕСЬ: Откладываем unmount в setTimeout ***
          setTimeout(() => {
            try {
              markerData.root.unmount();
            } catch (e) {
              console.error('Error unmounting marker root (deferred):', e);
            }
          }, 0);
          markerData.marker.remove();
          individualMarkers.current.delete(originalIndex);
        }
      });
    };

    // Привязываем обработчик к событиям карты
    currentMapInstance.on('idle', updateVisibleMarkers);
    currentMapInstance.on('moveend', updateVisibleMarkers);
    currentMapInstance.on('sourcedata', updateVisibleMarkers);

    // Initial call
    const initialRenderTimeout = setTimeout(() => {
      if (currentMapInstance.loaded()) {
        updateVisibleMarkers();
      }
    }, 0);

    return () => {
      console.log('MapMarkersLayer: Cleaning up markers and listeners.');
      clearTimeout(initialRenderTimeout);

      if (currentMapInstance) {
        currentMapInstance.off('idle', updateVisibleMarkers);
        currentMapInstance.off('moveend', updateVisibleMarkers);
        currentMapInstance.off('sourcedata', updateVisibleMarkers);
      }

      individualMarkers.current.forEach(({ marker, root }) => {
        // *** ИЗМЕНЕНИЕ ЗДЕСЬ: Откладываем unmount в setTimeout при размонтировании компонента ***
        setTimeout(() => {
          try {
            root.unmount();
          } catch (e) {
            console.error(
              'Error unmounting marker root during cleanup (deferred):',
              e
            );
          }
        }, 0);
        marker.remove();
      });
      individualMarkers.current.clear();
    };
  }, [map, landmarks, hasUserInteracted]); // activeIndex УБРАН из зависимостей этого useEffect

  // НОВЫЙ useEffect для обновления состояния активности маркеров
  // Этот эффект будет срабатывать только при изменении activeIndex.
  // Он будет рендерить CustomMarker заново с новыми пропсами.
  useEffect(() => {
    //console.log("MapMarkersLayer: Updating active marker status.", { activeIndex });
    individualMarkers.current.forEach((markerData, originalIndex) => {
      const landmark = landmarks[originalIndex];
      if (!landmark) return;

      const categoryColor = getCategoryColor(
        (landmark.category && landmark.category.length > 0
          ? landmark.category[0]
          : 'default') as CategorySlug
      );

      markerData.root.render(
        <CustomMarker
          isActive={activeIndex === originalIndex}
          onClick={(event) => onMapMarkerClick(originalIndex, event)}
          isBouncing={!hasUserInteracted}
          markerColor={categoryColor}
        />
      );
    });
  }, [activeIndex, landmarks, onMapMarkerClick, hasUserInteracted]); // Зависимости для обновления активности

  return null;
};
