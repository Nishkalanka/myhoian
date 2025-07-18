// src/hooks/useUserLocation.ts
import { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import { useMapContext } from '../contexts/MapContext'; // Для доступа к экземпляру карты

// Интерфейс UseUserLocationProps удален, так как он был пуст
// interface UseUserLocationProps {}

// Удален параметр 'props' из сигнатуры хука, так как он не использовался
export const useUserLocation = () => {
  const { map } = useMapContext();
  const userMarkerRef = useRef<mapboxgl.Marker | null>(null);
  const circleSourceId = 'user-location-circle';
  const circleLayerId = 'user-location-circle-layer';

  useEffect(() => {
    // Убедимся, что карта инициализирована
    if (!map.current) {
      return;
    }

    const currentMap = map.current;

    // Проверяем поддержку Geolocation API
    if (!navigator.geolocation) {
      console.warn('Geolocation is not supported by your browser.');
      return;
    }

    // Callback при успешном получении местоположения
    const onLocationSuccess = (pos: GeolocationPosition) => {
      const { latitude, longitude, accuracy } = pos.coords;
      const newPosition: [number, number] = [longitude, latitude];

      if (currentMap) {
        // Обновляем или создаем маркер пользователя
        if (userMarkerRef.current) {
          userMarkerRef.current.setLngLat(newPosition);
        } else {
          // Создаем HTML-элемент для маркера
          const el = document.createElement('div');
          el.className = 'location-marker'; // Класс для стилизации
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
            .addTo(currentMap); // Добавляем на карту
        }

        // Обновляем или создаем источник и слой для круга точности
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
                  radius: accuracy, // Передаем точность как свойство
                },
              },
            ],
          });
        } else {
          // Добавляем источник
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

          // Добавляем слой для круга
          currentMap.addLayer({
            id: circleLayerId,
            type: 'circle',
            source: circleSourceId,
            paint: {
              'circle-radius': [
                // Радиус круга зависит от зума и точности
                'interpolate',
                ['linear'],
                ['zoom'],
                0,
                ['/', ['get', 'radius'], ['literal', 100]], // Масштабирование для разных зумов
                20,
                ['/', ['get', 'radius'], ['literal', 1]],
              ],
              'circle-color': 'rgba(0, 128, 255, 0.4)', // Цвет круга
              'circle-stroke-color': 'rgba(0, 128, 255, 0.8)', // Цвет обводки
              'circle-stroke-width': 1,
            },
          });
        }
      }
    };

    // Callback при ошибке геолокации
    const onLocationError = (_err: GeolocationPositionError) => {
      // Добавлен '_' перед 'err'
      // Можно добавить обработку ошибок, например, показать снекбар
      // console.error(`Geolocation error (${_err.code}): ${_err.message}`);
    };

    // Запускаем отслеживание позиции
    const watchId = navigator.geolocation.watchPosition(
      onLocationSuccess,
      onLocationError,
      { enableHighAccuracy: true, timeout: 15000, maximumAge: 0 } // Опции отслеживания
    );

    // Функция очистки: вызывается при размонтировании компонента или изменении зависимостей
    return () => {
      navigator.geolocation.clearWatch(watchId); // Останавливаем отслеживание

      if (userMarkerRef.current) {
        userMarkerRef.current.remove(); // Удаляем маркер с карты
        userMarkerRef.current = null;
      }

      // Безопасное удаление слоя и источника, проверяя их существование и загрузку карты
      if (currentMap && currentMap.loaded()) {
        try {
          if (currentMap.getLayer(circleLayerId)) {
            currentMap.removeLayer(circleLayerId);
          }
        } catch (e) {
          // console.warn(`useUserLocation: Failed to remove layer ${circleLayerId}:`, e);
        }
        try {
          if (currentMap.getSource(circleSourceId)) {
            currentMap.removeSource(circleSourceId);
          }
        } catch (e) {
          // console.warn(`useUserLocation: Failed to remove source ${circleSourceId}:`, e);
        }
      } else {
        // console.warn("useUserLocation: Map not fully loaded during unmount. Skipping layer/source cleanup.");
      }
    };
  }, [map]); // Зависимость от экземпляра карты
};
