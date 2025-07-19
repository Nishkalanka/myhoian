// src/hooks/useMapRoutes.ts
import { useEffect, useCallback } from 'react'; // Добавлен useCallback
import mapboxgl from 'mapbox-gl';

interface UseMapRoutesProps {
  map: React.MutableRefObject<mapboxgl.Map | null>;
  isMapLoaded: boolean;
  routeCoordinates: [number, number][]; // Массив пар [долгота, широта]
  routeSourceId?: string; // Опциональный ID для источника маршрута
  routeLayerId?: string; // Опциональный ID для слоя маршрута
}

export const useMapRoutes = ({
  map,
  isMapLoaded,
  routeCoordinates,
  routeSourceId = 'route-data', // По умолчанию 'route-data'
  routeLayerId = 'route-layer', // По умолчанию 'route-layer'
}: UseMapRoutesProps) => {
  // Функция для запроса маршрута, мемоизированная с useCallback
  const fetchRoute = useCallback(async (coords: [number, number][]) => {
    if (coords.length < 2) {
      console.warn('Недостаточно координат для построения маршрута.');
      return null;
    }

    const coordinatesString = coords
      .map((coord) => `${coord[0]},${coord[1]}`)
      .join(';');
    const accessToken = mapboxgl.accessToken; // Используем токен, установленный глобально или из переменной окружения

    try {
      const response = await fetch(
        `https://api.mapbox.com/directions/v5/mapbox/walking/${coordinatesString}?geometries=geojson&access_token=${accessToken}`
      );

      if (!response.ok) {
        throw new Error(`Mapbox Directions API error: ${response.statusText}`);
      }

      const data = await response.json();
      if (data.routes && data.routes.length > 0) {
        return data.routes[0].geometry; // Возвращаем геометрию первого маршрута
      } else {
        console.warn('Маршрут не найден для данных координат.');
        return null;
      }
    } catch (error) {
      console.error(
        'Ошибка при получении маршрута от Mapbox Directions API:',
        error
      );
      return null;
    }
  }, []); // Пустой массив зависимостей, т.к. accessToken берется глобально

  useEffect(() => {
    if (!isMapLoaded || !map.current) {
      return;
    }

    const mapInstance = map.current;

    // Функция для очистки источника и слоя
    const cleanupRoute = () => {
      if (mapInstance.getLayer(routeLayerId)) {
        mapInstance.removeLayer(routeLayerId);
      }
      if (mapInstance.getSource(routeSourceId)) {
        mapInstance.removeSource(routeSourceId);
      }
    };

    // Вызываем очистку перед добавлением нового маршрута.
    // Это особенно важно при изменении routeCoordinates, чтобы избежать дублирования.
    cleanupRoute();

    if (routeCoordinates && routeCoordinates.length >= 2) {
      fetchRoute(routeCoordinates).then((routeGeoJSON) => {
        if (routeGeoJSON) {
          // Проверяем, существует ли источник, прежде чем добавлять его
          if (!mapInstance.getSource(routeSourceId)) {
            mapInstance.addSource(routeSourceId, {
              type: 'geojson',
              data: {
                type: 'Feature',
                properties: {},
                geometry: routeGeoJSON,
              },
            });
          } else {
            // Если источник уже есть (что не должно произойти после cleanupRoute, но на всякий случай)
            // мы просто обновляем его данные
            (
              mapInstance.getSource(routeSourceId) as mapboxgl.GeoJSONSource
            ).setData({
              type: 'Feature',
              properties: {},
              geometry: routeGeoJSON,
            });
          }

          // Добавляем или обновляем слой маршрута
          if (!mapInstance.getLayer(routeLayerId)) {
            mapInstance.addLayer({
              id: routeLayerId,
              type: 'line',
              source: routeSourceId,
              layout: {
                'line-join': 'round',
                'line-cap': 'round',
              },
              paint: {
                'line-color': '#007cbf', // Цвет маршрута
                'line-width': 6,
                'line-opacity': 0.75,
              },
            });
          } else {
            // Если слой уже есть, возможно, обновим его свойства, если это необходимо
            // В данном случае, это не требуется, так как данные источника уже обновлены
          }
        }
      });
    }

    // Возвращаем функцию очистки, которая будет вызвана при размонтировании компонента
    // или перед следующим запуском эффекта
    return () => {
      cleanupRoute();
    };
  }, [
    isMapLoaded,
    map,
    routeCoordinates,
    fetchRoute,
    routeSourceId,
    routeLayerId,
  ]); // Добавлены все необходимые зависимости
};
