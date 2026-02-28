import React, { useRef, useEffect, useCallback } from 'react';
import ReactDOM from 'react-dom/client';
import type { Map as MapboxMap, Marker } from 'mapbox-gl';

import { IconButton, Box } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import StarIcon from '@mui/icons-material/Star';

import { getCategoryColor } from '../../../shared/lib/categoryColors';
import type { Landmark, CategorySlug, LandmarkContent } from '../../../data';

// 🛠 FIX: Используем any, чтобы соответствовать типу в MapContext

type MapboxGLModule = any;

interface CustomMarkerProps {
  isActive: boolean;
  onClick: (event: React.MouseEvent) => void;
  isBouncing: boolean;
  markerColor: string;
  isMustVisit?: boolean | undefined;
}

const CustomMarker: React.FC<CustomMarkerProps> = React.memo(
  ({ isActive, onClick, isBouncing, markerColor, isMustVisit }) => {
    const handleClick = useCallback(
      (event: React.MouseEvent) => {
        event.stopPropagation();
        onClick(event);
      },
      [onClick]
    );

    const markerClassName = isBouncing ? 'marker-bounce' : '';

    return (
      <Box
        sx={{
          position: 'relative',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
        }}
      >
        {isMustVisit && (
          <Box
            sx={{
              position: 'absolute',
              top: '-24px',
              backgroundColor: '#ffbf00',
              color: 'white',
              borderRadius: '4px',
              padding: '2px 6px',
              fontSize: '10px',
              fontWeight: 'bold',
              whiteSpace: 'nowrap',
              boxShadow: '0 2px 4px rgba(0,0,0,0.3)',
              display: 'flex',
              alignItems: 'center',
              gap: '2px',
              zIndex: 10,
              '&::after': {
                content: '""',
                position: 'absolute',
                bottom: '-4px',
                left: '50%',
                transform: 'translateX(-50%)',
                borderWidth: '4px 4px 0',
                borderStyle: 'solid',
                borderColor: '#ffbf00 transparent transparent transparent',
              },
            }}
          >
            <StarIcon sx={{ fontSize: '18px' }} />
          </Box>
        )}
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
      </Box>
    );
  }
);

interface MapMarkersLayerProps {
  map: MapboxMap | null;
  landmarks: Landmark[];
  activeIndex: number | null;
  onMapMarkerClick: (index: number, event: React.MouseEvent) => void;
  hasUserInteracted: boolean;
  getLocalizedContent: (landmark: Landmark) => LandmarkContent;
  mapboxglModule: MapboxGLModule;
}

export const MapMarkersLayer: React.FC<MapMarkersLayerProps> = ({
  map,
  landmarks,
  activeIndex,
  onMapMarkerClick,
  hasUserInteracted,
  getLocalizedContent,
  mapboxglModule,
}) => {
  const individualMarkers = useRef<
    Map<number, { marker: Marker; root: ReactDOM.Root }>
  >(new Map());

  const landmarksRef = useRef(landmarks);
  useEffect(() => {
    landmarksRef.current = landmarks;
  }, [landmarks]);

  useEffect(() => {
    const currentMapInstance = map;
    if (!currentMapInstance) return;

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
        return;
      }

      newUnclusteredPoints.forEach((feature, originalIndex) => {
        const landmark = landmarksRef.current[originalIndex];
        if (!landmark) return;

        const categoryColor = getCategoryColor(
          (landmark.category?.[0] || 'default') as CategorySlug
        );

        const markerProps = {
          isActive: activeIndex === originalIndex,
          onClick: (event: React.MouseEvent) =>
            onMapMarkerClick(originalIndex, event),
          isBouncing: !hasUserInteracted,
          markerColor: categoryColor,
          isMustVisit: landmark.isMustVisit,
        };

        if (!individualMarkers.current.has(originalIndex)) {
          const markerContainer = document.createElement('div');
          const root = ReactDOM.createRoot(markerContainer);
          root.render(<CustomMarker {...markerProps} />);

          const marker = new mapboxglModule.Marker({
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
          // Безопасное удаление
          requestAnimationFrame(() => {
            try {
              markerData.root.unmount();
            } catch (e) {
              /* ignore */
            }
            markerData.marker.remove();
          });
          individualMarkers.current.delete(originalIndex);
        }
      });
    };

    currentMapInstance.on('idle', updateVisibleMarkers);
    currentMapInstance.on('moveend', updateVisibleMarkers);
    currentMapInstance.on('sourcedata', updateVisibleMarkers);

    const initialRenderTimeout = setTimeout(() => {
      if (currentMapInstance.loaded()) updateVisibleMarkers();
    }, 0);

    const markersMap = individualMarkers.current;

    return () => {
      clearTimeout(initialRenderTimeout);
      if (currentMapInstance) {
        currentMapInstance.off('idle', updateVisibleMarkers);
        currentMapInstance.off('moveend', updateVisibleMarkers);
        currentMapInstance.off('sourcedata', updateVisibleMarkers);
      }

      // Аккуратная очистка
      markersMap.forEach(({ marker, root }) => {
        requestAnimationFrame(() => {
          try {
            root.unmount();
          } catch (e) {
            /* ignore */
          }
          marker.remove();
        });
      });
      markersMap.clear();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [map, mapboxglModule]);

  useEffect(() => {
    individualMarkers.current.forEach((markerData, originalIndex) => {
      const landmark = landmarks[originalIndex];
      if (!landmark) return;

      const categoryColor = getCategoryColor(
        (landmark.category?.[0] || 'default') as CategorySlug
      );

      markerData.root.render(
        <CustomMarker
          isActive={activeIndex === originalIndex}
          onClick={(event) => onMapMarkerClick(originalIndex, event)}
          isBouncing={!hasUserInteracted}
          markerColor={categoryColor}
          isMustVisit={landmark.isMustVisit}
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
