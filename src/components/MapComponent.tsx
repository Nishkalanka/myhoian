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
import type { Landmark } from '../data/index';

import { MapProvider } from '../contexts/MapContext';
import { useMapContext } from '../contexts/MapContext';

import { IconButton } from '@mui/material';
import LocationOnIcon from '@mui/icons-material/LocationOn';

// Импортируем CSS-файл с анимацией
import '/src/index.css';

mapboxgl.accessToken = import.meta.env.VITE_MAPBOX_ACCESS_TOKEN as string;

interface MapComponentProps {
  landmarks: Landmark[];
  activeIndex: number | null;
  onMarkerClick: (index: number, event: React.MouseEvent) => void;
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
  isBouncing: boolean; // Добавляем новый пропс для анимации
}

const CustomMarker: React.FC<CustomMarkerProps> = React.memo(
  ({ isActive, onClick, isBouncing }) => {
    // Принимаем новый пропс
    const handleClick = useCallback(
      (event: React.MouseEvent) => {
        event.stopPropagation();
        onClick(event);
      },
      [onClick]
    );

    // Добавляем класс анимации в зависимости от isBouncing
    const markerClassName = isBouncing ? 'marker-bounce' : '';

    return (
      <IconButton
        onClick={handleClick}
        className={markerClassName} // Применяем класс анимации
        sx={{
          p: 0,
          lineHeight: 1,
          color: isActive ? 'error.main' : 'primary.main',
          '&:hover': {
            color: isActive ? 'error.dark' : 'primary.dark',
          },
          // Добавляем transition для плавного изменения масштаба при клике
          transition: 'transform 0.3s ease-in-out',
          transform: isActive ? 'scale(1.5)' : 'scale(1)', // Увеличиваем активный маркер
          cursor: 'pointer',
        }}
        aria-label="landmark-marker"
      >
        <LocationOnIcon sx={{ fontSize: 40 }} />
      </IconButton>
    );
  }
);

export const MapComponent: React.FC<MapComponentProps> = ({
  landmarks,
  activeIndex,
  onMarkerClick,
  onMapClick,
  setCenterMapFn,
}) => {
  const { i18n } = useTranslation();

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [isMapLoaded, setIsMapLoaded] = useState(false);

  // --- НОВОЕ СОСТОЯНИЕ для отслеживания взаимодействия
  const [hasUserInteracted, setHasUserInteracted] = useState(false);

  const markerObjectsRef = useRef<mapboxgl.Marker[]>([]);
  const markerRootsRef = useRef<ReactDOM.Root[]>([]);

  const memoizedSetCenterMapFn = useCallback(
    (mapInstance: mapboxgl.Map | null) => {
      if (!mapInstance) return;
      setCenterMapFn(() => (coords: [number, number], zoom?: number) => {
        mapInstance.flyTo({
          center: coords,
          zoom: zoom || mapInstance.getZoom(),
          essential: true,
        });
      });
    },
    [setCenterMapFn]
  );

  // useEffect для инициализации карты
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
      center: [108.32607252520863, 15.877085241922142],
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

      hoiAnLandmarks.forEach((landmark: Landmark, index: number) => {
        const markerContainer = document.createElement('div');
        const root = ReactDOM.createRoot(markerContainer);
        markerRootsRef.current.push(root);

        root.render(
          <CustomMarker
            isActive={activeIndex === index}
            onClick={(event) => {
              // При клике на маркер, отключаем анимацию
              setHasUserInteracted(true);
              onMarkerClick(index, event);
            }}
            // Передаем состояние анимации в компонент маркера
            isBouncing={!hasUserInteracted}
          />
        );

        const marker = new mapboxgl.Marker({
          element: markerContainer,
          anchor: 'bottom',
        })
          .setLngLat([landmark.coordinates[1], landmark.coordinates[0]])
          .addTo(newMap);

        markerObjectsRef.current.push(marker);
      });
    });

    const handleMapClickListener = () => {
      // При клике на карту, отключаем анимацию
      setHasUserInteracted(true);
      onMapClick();
    };
    newMap.on('click', handleMapClickListener);

    // --- НОВОЕ ИЗМЕНЕНИЕ: Отслеживаем движение карты для отключения анимации
    const handleMapMoveStart = () => {
      setHasUserInteracted(true);
    };
    newMap.on('movestart', handleMapMoveStart);

    return () => {
      if (newMap) {
        newMap.off('click', handleMapClickListener);
        newMap.off('movestart', handleMapMoveStart); // Отключаем слушатель

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
  }, []); // Пустой массив зависимостей, чтобы карта не перезагружалась

  // useEffect для обновления маркеров при изменении activeIndex
  useEffect(() => {
    if (!isMapLoaded) return;

    markerRootsRef.current.forEach((root, index) => {
      root.render(
        <CustomMarker
          isActive={activeIndex === index}
          onClick={(event) => {
            // При клике на маркер, отключаем анимацию
            setHasUserInteracted(true);
            onMarkerClick(index, event);
          }}
          // Обновляем состояние анимации при каждом рендере
          isBouncing={!hasUserInteracted}
        />
      );
    });
  }, [activeIndex, isMapLoaded, onMarkerClick, hasUserInteracted]); // Добавили hasUserInteracted в зависимости

  return (
    <MapProvider mapRef={map}>
      <div ref={mapContainerRef} style={{ height: '100%', width: '100%' }} />
      {isMapLoaded && <LocationMarker />}
    </MapProvider>
  );
};

// LocationMarker остается без изменений
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
      const newPosition: [number, number] = [longitude, latitude];

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
            .setLngLat(newPosition)
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
