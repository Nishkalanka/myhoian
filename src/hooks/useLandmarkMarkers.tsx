// src/hooks/useLandmarkMarkers.ts
import { useEffect, useRef, useCallback } from 'react';
import mapboxgl from 'mapbox-gl';
import ReactDOM from 'react-dom/client';
import { useTranslation } from 'react-i18next';
import {
  type Landmark,
  type LandmarkContent,
  type CategorySlug,
} from '../data';
import { getCategoryColor } from '../utils/categoryColors';
import { IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

interface CustomMarkerProps {
  isActive: boolean;
  onClick: (event: React.MouseEvent) => void;
  isBouncing: boolean;
  markerColor: string;
}

const CustomMarker: React.FC<CustomMarkerProps> = ({
  isActive,
  onClick,
  isBouncing,
  markerColor,
}) => {
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
};

interface UseLandmarkMarkersProps {
  map: React.MutableRefObject<mapboxgl.Map | null>;
  isMapLoaded: boolean;
  landmarks: Landmark[];
  activeIndex: number | null;
  onMapMarkerClick: (index: number, event: React.MouseEvent) => void;
  setHasUserInteracted: React.Dispatch<React.SetStateAction<boolean>>;
  hasUserInteracted: boolean;
}

export const useLandmarkMarkers = ({
  map,
  isMapLoaded,
  landmarks,
  activeIndex,
  onMapMarkerClick,
  setHasUserInteracted,
  hasUserInteracted,
}: UseLandmarkMarkersProps) => {
  const { i18n } = useTranslation();

  const individualMarkers = useRef<
    Map<number, { marker: mapboxgl.Marker; root: ReactDOM.Root }>
  >(new Map());

  const getLocalizedContent = useCallback(
    (landmark: Landmark): LandmarkContent => {
      const lang = i18n.language as keyof Pick<
        Landmark,
        'ru' | 'en' | 'es' | 'fr' | 'vn'
      >;

      if (lang === 'ru' && landmark.ru) return landmark.ru;
      if (lang === 'es' && landmark.es) return landmark.es;
      if (lang === 'fr' && landmark.fr) return landmark.fr;
      if (lang === 'vn' && landmark.vn) return landmark.vn;
      return landmark.en;
    },
    [i18n.language]
  );

  useEffect(() => {
    if (!isMapLoaded || !map.current) return;

    const currentMapInstance = map.current;
    const source = currentMapInstance.getSource(
      'landmarks-data'
    ) as mapboxgl.GeoJSONSource;

    if (!source) {
      console.warn('Mapbox source "landmarks-data" not found.');
      return;
    }

    // 1. Обновляем GeoJSON источник данных для Mapbox (для кластеров)
    const geojsonFeatures: GeoJSON.Feature<
      GeoJSON.Point,
      { originalIndex: number; category: CategorySlug }
    >[] = landmarks.map((landmark, index) => ({
      type: 'Feature',
      properties: {
        originalIndex: index,
        category: landmark.category[0] || 'default',
      },
      geometry: {
        type: 'Point',
        coordinates: [landmark.coordinates[1], landmark.coordinates[0]],
      },
    }));

    source.setData({
      type: 'FeatureCollection',
      features: geojsonFeatures,
    });

    // 2. Функция для обновления индивидуальных HTML-маркеров
    const updateIndividualMarkers = () => {
      const newUnclusteredPoints = new Map<
        number,
        GeoJSON.Feature<GeoJSON.Point>
      >();

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

      newUnclusteredPoints.forEach((_feature, originalIndex) => {
        const landmark = landmarks[originalIndex];
        if (!landmark) return;

        if (!individualMarkers.current.has(originalIndex)) {
          const markerContainer = document.createElement('div');
          const root = ReactDOM.createRoot(markerContainer);
          const categoryColor = getCategoryColor(
            landmark.category[0] || 'default'
          );

          root.render(
            <CustomMarker
              isActive={activeIndex === originalIndex}
              onClick={(event) => {
                setHasUserInteracted(true);
                onMapMarkerClick(originalIndex, event);
              }}
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
          const markerData = individualMarkers.current.get(originalIndex);
          if (markerData) {
            const categoryColor = getCategoryColor(
              landmark.category[0] || 'default'
            );
            markerData.root.render(
              <CustomMarker
                isActive={activeIndex === originalIndex}
                onClick={(event) => {
                  setHasUserInteracted(true);
                  onMapMarkerClick(originalIndex, event);
                }}
                isBouncing={!hasUserInteracted}
                markerColor={categoryColor}
              />
            );
          }
        }
      });
    };

    currentMapInstance.on('render', updateIndividualMarkers);
    currentMapInstance.on('moveend', updateIndividualMarkers);

    updateIndividualMarkers();

    // Захватываем текущее значение individualMarkers.current для функции очистки
    // Это решает предупреждение react-hooks/exhaustive-deps
    const currentIndividualMarkers = individualMarkers.current;

    return () => {
      if (currentMapInstance) {
        currentMapInstance.off('render', updateIndividualMarkers);
        currentMapInstance.off('moveend', updateIndividualMarkers);
      }

      currentIndividualMarkers.forEach(({ marker, root }) => {
        // Используем захваченное значение
        queueMicrotask(() => {
          try {
            root.unmount();
          } catch (e) {
            /* do nothing */
          }
        });
        marker.remove();
      });
      currentIndividualMarkers.clear(); // Используем захваченное значение
    };
  }, [
    map,
    isMapLoaded,
    landmarks,
    activeIndex,
    onMapMarkerClick,
    setHasUserInteracted,
    hasUserInteracted,
    getLocalizedContent,
  ]);
};
