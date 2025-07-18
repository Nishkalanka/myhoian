// src/components/MapComponent.tsx

import React, {
  useRef,
  useEffect,
  useState,
  useCallback,
  useLayoutEffect,
} from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import ReactDOM from 'react-dom/client';

import { useTranslation } from 'react-i18next';

import { hoiAnLandmarks } from '../data/index';
import type { Landmark, LandmarkContent, CategorySlug } from '../data/index'; // Убедитесь, что CategorySlug импортирован

import { MapProvider } from '../contexts/MapContext';
import { useMapContext } from '../contexts/MapContext';

import { IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

import '/src/index.css';
import { getCategoryColor } from '../utils/categoryColors';

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

interface CustomMarkerProps {
  isActive: boolean;
  onClick: (event: React.MouseEvent) => void;
  isBouncing: boolean;
  markerColor: string; // <-- НОВОЕ: Добавляем пропс для цвета маркера
}

const CustomMarker: React.FC<CustomMarkerProps> = React.memo(
  ({ isActive, onClick, isBouncing, markerColor }) => {
    // <-- НОВОЕ: Принимаем markerColor
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
          color: isActive ? 'error.main' : markerColor, // <-- ИЗМЕНЕНО: Используем markerColor
          '&:hover': {
            color: isActive ? 'error.dark' : markerColor, // <-- ИЗМЕНЕНО: Используем markerColor
          },
          transition: 'transform 0.3s ease-in-out',
          transform: isActive ? 'scale(1.5)' : 'scale(1)',
          cursor: 'pointer',
        }}
        aria-label="landmark-marker"
      >
        <LocationOnIcon sx={{ fontSize: 35 }} />
      </IconButton>
    );
  }
);

export const MapComponent: React.FC<MapComponentProps> = ({
  landmarks,
  activeIndex,
  onMapMarkerClick,
  onMapClick,
  setCenterMapFn,
}) => {
  const { i18n } = useTranslation();
  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const markerObjectsRef = useRef<mapboxgl.Marker[]>([]);
  const markerRootsRef = useRef<ReactDOM.Root[]>([]);

  // Вспомогательная функция для получения локализованного контента (скопирована из HeroSection)
  // Оставляем эту функцию, так как она может пригодиться, когда попапы будут включены снова.
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

  const memoizedSetCenterMapFn = useCallback(
    (mapInstance: mapboxgl.Map | null) => {
      if (!mapInstance) return;
      setCenterMapFn(() => (coords: [number, number], zoom?: number) => {
        // coords уже должны быть [долгота, широта]
        mapInstance.flyTo({
          center: coords,
          zoom: zoom || mapInstance.getZoom(),
          essential: true,
        });
      });
    },
    [setCenterMapFn]
  );

  useEffect(() => {
    if (map.current) {
      memoizedSetCenterMapFn(map.current);
      return;
    }

    if (!mapContainerRef.current) {
      return;
    }

    const newMap = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/streets-v11',
      center: [108.32607252520863, 15.877085241922142], // [долгота, широта]
      zoom: 17,
      pitch: 0,
      bearing: 0,
      attributionControl: false,
    });

    map.current = newMap;

    newMap.addControl(new mapboxgl.NavigationControl(), 'top-right');
    memoizedSetCenterMapFn(newMap);

    newMap.on('load', () => {
      setIsMapLoaded(true);
    });

    const handleMapClickListener = () => {
      setHasUserInteracted(true);
      onMapClick();
    };
    newMap.on('click', handleMapClickListener);

    const handleMapMoveStart = () => {
      setHasUserInteracted(true);
    };
    newMap.on('movestart', handleMapMoveStart);

    return () => {
      if (newMap) {
        newMap.off('click', handleMapClickListener);
        newMap.off('movestart', handleMapMoveStart);

        markerRootsRef.current.forEach((root) => {
          queueMicrotask(() => {
            try {
              root.unmount();
            } catch (e) {
              /* do nothing */
            }
          });
        });
        markerObjectsRef.current.forEach((marker) => marker.remove());
        markerObjectsRef.current = [];
        markerRootsRef.current = [];

        newMap.remove();
        map.current = null;
        setIsMapLoaded(false);
      }
    };
  }, []);

  useEffect(() => {
    if (!isMapLoaded || !map.current) return;

    const currentMapInstance = map.current;

    // Очищаем предыдущие маркеры
    markerRootsRef.current.forEach((root) => {
      queueMicrotask(() => {
        try {
          root.unmount();
        } catch (e) {
          /* do nothing */
        }
      });
    });
    markerObjectsRef.current.forEach((marker) => marker.remove());
    markerObjectsRef.current = [];
    markerRootsRef.current = [];

    landmarks.forEach((landmark: Landmark, index: number) => {
      const markerContainer = document.createElement('div');
      const root = ReactDOM.createRoot(markerContainer);
      markerRootsRef.current.push(root);

      // Получаем цвет для маркера
      // Если у достопримечательности есть первая категория, используем ее. Иначе - "default".
      const categoryColor = getCategoryColor(landmark.category[0] || 'default'); // <-- НОВОЕ

      root.render(
        <CustomMarker
          isActive={activeIndex === index}
          onClick={(event) => {
            setHasUserInteracted(true);
            onMapMarkerClick(index, event);
          }}
          isBouncing={!hasUserInteracted}
          markerColor={categoryColor} // <-- НОВОЕ: Передаем цвет в CustomMarker
        />
      );

      // --- НАЧАЛО ЗАКОММЕНТИРОВАННОГО КОДА ПОПАПА ---
      // Получаем локализованное название для попапа
      // const landmarkTitle = getLocalizedContent(landmark).title;

      // Создаем попап
      // const popup = new mapboxgl.Popup({
      //   offset: 25, // Смещение попапа от маркера
      //   closeButton: false, // Не показывать кнопку закрытия
      //   closeOnClick: true, // Закрывать попап при клике на карту
      //   className: "landmark-popup", // Добавляем класс для стилизации
      // }).setHTML(`<h4>${landmarkTitle}</h4>`); // Устанавливаем HTML-содержимое
      // --- КОНЕЦ ЗАКОММЕНТИРОВАННОГО КОДА ПОПАПА ---

      const marker = new mapboxgl.Marker({
        element: markerContainer,
        anchor: 'bottom',
      })
        .setLngLat([landmark.coordinates[1], landmark.coordinates[0]]) // [долгота, широта]
        // .setPopup(popup) // <-- Закомментировано: Привязываем попап к маркеру
        .addTo(currentMapInstance);

      // --- НАЧАЛО ЗАКОММЕНТИРОВАННОГО КОДА ДЛЯ ОТКРЫТИЯ/ЗАКРЫТИЯ ПОПАПА ---
      // Опционально: открывать попап активного маркера
      // if (activeIndex === index) {
      //   popup.addTo(currentMapInstance);
      // }

      // Дополнительная логика: открывать/закрывать попап при активности
      // markerContainer.addEventListener("mouseenter", () => {
      //   if (!popup.isOpen()) {
      //     popup.addTo(currentMapInstance);
      //   }
      // });
      // markerContainer.addEventListener("mouseleave", () => {
      //   if (popup.isOpen() && activeIndex !== index) {
      //     // Закрывать, если не активный маркер
      //     popup.remove();
      //   }
      // });
      // --- КОНЕЦ ЗАКОММЕНТИРОВАННОГО КОДА ДЛЯ ОТКРЫТИЯ/ЗАКРЫТИЯ ПОПАПА ---

      markerObjectsRef.current.push(marker);
    });
  }, [
    landmarks,
    activeIndex,
    isMapLoaded,
    onMapMarkerClick,
    hasUserInteracted,
    getLocalizedContent, // Зависимость для getLocalizedContent, даже если попапы закомментированы
  ]);

  return (
    <MapProvider mapRef={map}>
      <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
      {isMapLoaded && <LocationMarker />}
    </MapProvider>
  );
};

function LocationMarker() {
  const { map } = useMapContext();
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
  const circleSourceId = 'user-location-circle';
  const circleLayerId = 'user-location-circle-layer';

  useEffect(() => {
    if (!map.current) {
      return;
    }

    const currentMap = map.current;

    if (!navigator.geolocation) {
      return;
    }

    const onLocationSuccess = (pos: GeolocationPosition) => {
      const { latitude, longitude, accuracy } = pos.coords;
      const newPosition: [number, number] = [longitude, latitude]; // [долгота, широта]

      if (currentMap) {
        if (userMarkerRef.current) {
          userMarkerRef.current.setLngLat(newPosition);
        } else {
          const el = document.createElement('div');
          el.className = 'location-marker';
          el.style.width = '12px';
          el.style.height = '12px';
          el.style.borderRadius = '50%';
          el.style.backgroundColor = 'blue';
          el.style.border = '2px solid white';
          el.style.boxShadow = '0 0 5px rgba(0,0,0,0.5)';

          userMarkerRef.current = new mapboxgl.Marker({
            element: el,
            anchor: 'center',
          })
            .setLngLat(newPosition) // [долгота, широта]
            .addTo(currentMap);
        }

        if (currentMap.getSource(circleSourceId)) {
          (
            currentMap.getSource(circleSourceId) as mapboxgl.GeoJSONSource
          ).setData({
            type: 'FeatureCollection',
            features: [
              {
                type: 'Feature',
                geometry: {
                  type: 'Point',
                  coordinates: newPosition,
                },
                properties: {
                  radius: accuracy,
                },
              },
            ],
          });
        } else {
          currentMap.addSource(circleSourceId, {
            type: 'geojson',
            data: {
              type: 'FeatureCollection',
              features: [
                {
                  type: 'Feature',
                  geometry: {
                    type: 'Point',
                    coordinates: newPosition,
                  },
                  properties: {
                    radius: accuracy,
                  },
                },
              ],
            },
          });

          currentMap.addLayer({
            id: circleLayerId,
            type: 'circle',
            source: circleSourceId,
            paint: {
              'circle-radius': [
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                ['/', ['get', 'radius'], ['literal', 100]],
                20,
                ['/', ['get', 'radius'], ['literal', 1]],
              ],
              'circle-color': 'rgba(0, 128, 255, 0.4)',
              'circle-stroke-color': 'rgba(0, 128, 255, 0.8)',
              'circle-stroke-width': 1,
            },
          });
        }
      }
    };

    const onLocationError = (err: GeolocationPositionError) => {
      // console.error(`Geolocation error (${err.code}): ${err.message}`);
    };

    const watchId = navigator.geolocation.watchPosition(
      onLocationSuccess,
      onLocationError,
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 }
    );

    return () => {
      navigator.geolocation.clearWatch(watchId);
      if (userMarkerRef.current) {
        userMarkerRef.current.remove();
        userMarkerRef.current = null;
      }

      if (currentMap && currentMap.loaded()) {
        try {
          if (currentMap.getLayer(circleLayerId)) {
            currentMap.removeLayer(circleLayerId);
          }
        } catch (e) {
          // console.warn(`LocationMarker: Failed to remove layer ${circleLayerId} during unmount:`, e);
        }
        try {
          if (currentMap.getSource(circleSourceId)) {
            currentMap.removeSource(circleSourceId);
          }
        } catch (e) {
          // console.warn(`LocationMarker: Failed to remove source ${circleSourceId} during unmount:`, e);
        }
      } else {
        // console.warn("LocationMarker: Map not fully loaded during unmount or already being removed. Skipping layer/source cleanup.");
      }
    };
  }, [map]);

  return null;
}
