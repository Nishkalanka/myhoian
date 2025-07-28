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
          animation: isBouncing ? 'pulse 1s infinite alternate' : 'none',
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
  landmarks: Landmark[]; // Нелокализованные данные
  activeIndex: number | null;
  onMapMarkerClick: (index: number, event: React.MouseEvent) => void;
  hasUserInteracted: boolean;
  getLocalizedContent: (landmark: Landmark) => LandmarkContent; // <-- Снова принимаем саму функцию
}

export const MapMarkersLayer: React.FC<MapMarkersLayerProps> = ({
  map,
  landmarks,
  activeIndex,
  onMapMarkerClick,
  hasUserInteracted,
  getLocalizedContent, // <-- Теперь эта функция здесь обновляется
}) => {
  const individualMarkers = useRef<
    Map<number, { marker: mapboxgl.Marker; root: ReactDOM.Root }>
  >(new Map());

  // Этот useEffect отвечает за создание/удаление Mapbox-маркеров и их React-корней.
  // Он должен срабатывать только при изменении `map` или `landmarks`.
  useEffect(() => {
    const currentMapInstance = map;
    if (!currentMapInstance) {
      return;
    }

    const updateVisibleMarkers = () => {
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
        // console.warn("MapMarkersLayer: Error querying source features:", error);
        return;
      }

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
            .setLngLat(feature.geometry.coordinates as [number, number])
            .addTo(currentMapInstance);

          individualMarkers.current.set(originalIndex, { marker, root });
        } else {
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

      individualMarkers.current.forEach((markerData, originalIndex) => {
        if (!newUnclusteredPoints.has(originalIndex)) {
          setTimeout(() => {
            try {
              markerData.root.unmount();
            } catch (e) {
              // console.error("MapMarkersLayer: Error unmounting marker root (deferred) during removal:", e);
            }
          }, 0);
          markerData.marker.remove();
          individualMarkers.current.delete(originalIndex);
        }
      });
    };

    currentMapInstance.on('idle', updateVisibleMarkers);
    currentMapInstance.on('moveend', updateVisibleMarkers);
    currentMapInstance.on('sourcedata', updateVisibleMarkers);

    const initialRenderTimeout = setTimeout(() => {
      if (currentMapInstance.loaded()) {
        updateVisibleMarkers();
      }
    }, 0);

    return () => {
      clearTimeout(initialRenderTimeout);

      if (currentMapInstance) {
        currentMapInstance.off('idle', updateVisibleMarkers);
        currentMapInstance.off('moveend', updateVisibleMarkers);
        currentMapInstance.off('sourcedata', updateVisibleMarkers);
      }

      const currentMarkers = individualMarkers.current;
      currentMarkers.forEach(({ marker, root }) => {
        setTimeout(() => {
          try {
            root.unmount();
          } catch (e) {
            // console.error("MapMarkersLayer: Error unmounting marker root during cleanup (deferred):", e);
          }
        }, 0);
        marker.remove();
      });
      currentMarkers.clear();
    };
  }, [map, landmarks]); // <-- УДАЛЕНА getLocalizedContent из зависимостей первого useEffect

  // Этот useEffect для обновления состояния активности маркеров и их стиля.
  // Он будет срабатывать при изменении activeIndex, hasUserInteracted, onMapMarkerClick
  // или getLocalizedContent (т.е. при смене языка).
  useEffect(() => {
    // console.log("MapMarkersLayer: Second useEffect triggered. Updating CustomMarker props.");
    individualMarkers.current.forEach((markerData, originalIndex) => {
      const landmark = landmarks[originalIndex]; // landmarks тоже меняется, но не должен вызывать пересоздание
      if (!landmark) {
        return;
      }

      const categoryColor = getCategoryColor(
        (landmark.category && landmark.category.length > 0
          ? landmark.category[0]
          : 'default') as CategorySlug
      );

      // Перерисовываем только React-компонент внутри существующего Mapbox маркера
      markerData.root.render(
        <CustomMarker
          isActive={activeIndex === originalIndex}
          onClick={(event) => onMapMarkerClick(originalIndex, event)}
          isBouncing={!hasUserInteracted}
          markerColor={categoryColor}
          // Если CustomMarker будет отображать локализованный текст,
          // вам понадобится передать его сюда через `getLocalizedContent(landmark).title`
          // localizedTitle={getLocalizedContent(landmark).title}
        />
      );
    });
    // Зависимости для обновления активности и локализованного контента
  }, [
    activeIndex,
    onMapMarkerClick,
    hasUserInteracted,
    getLocalizedContent, // <-- Эта зависимость ОСТАЕТСЯ, так как она влияет на ре-рендер CustomMarker
  ]);

  return null;
};
