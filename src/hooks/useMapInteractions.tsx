// src/hooks/useMapInteractions.ts
import { useState, useCallback, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { type Landmark } from '../data'; // Зависимость от типа Landmark
import { useSnackbarManager } from './useSnackbarManager'; // Зависимость от useSnackbarManager

interface UseMapInteractionsProps {
  filteredLandmarks: Landmark[];
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setHasUserInteracted: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useMapInteractions = ({
  filteredLandmarks,
  activeIndex,
  setActiveIndex,
  setHasUserInteracted,
}: UseMapInteractionsProps) => {
  const { t } = useTranslation();
  const { showSnackbar, closeSnackbar, snackbarType } = useSnackbarManager();

  const [centerMapFn, setCenterMapFn] = useState<
    ((coords: [number, number], zoom?: number) => void) | null
  >(null);

  // Обработчик клика по карте (если нет маркеров)
  const handleMapClick = useCallback(() => {
    showSnackbar('noMarkers', 'info', 200);
  }, [showSnackbar]);

  // Функция для центрирования карты по местоположению пользователя
  const centerMapOnUserLocation = useCallback(() => {
    if (!centerMapFn) {
      showSnackbar('mapNotLoadedYet', 'warning');
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Mapbox ожидает [долгота, широта]
          centerMapFn([longitude, latitude], 15);
          showSnackbar('youAreHere', 'success');
        },
        (error) => {
          console.error(
            'Ошибка при получении местоположения пользователя:',
            error
          );
          let errorMessageKey = 'locationError';
          const currentSnackbarType: typeof snackbarType = 'error';
          if (error.code === error.PERMISSION_DENIED) {
            errorMessageKey = 'locationPermissionDenied';
          }
          showSnackbar(errorMessageKey, currentSnackbarType);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0,
        }
      );
    } else {
      showSnackbar('geolocationNotSupported', 'error');
    }
  }, [centerMapFn, showSnackbar, snackbarType]);

  // Обработчик клика по маркеру на карте
  const handleMapMarkerClick = useCallback(
    (index: number, event: React.MouseEvent) => {
      closeSnackbar(); // Закрываем снекбар при взаимодействии с маркером
      setHasUserInteracted(true); // Отмечаем, что пользователь взаимодействовал
      const landmark = filteredLandmarks[index];
      if (!landmark) {
        console.warn('Нажат маркер с неверным индексом:', index);
        return;
      }
      setActiveIndex(index);
      if (centerMapFn) {
        // Mapbox ожидает [долгота, широта]
        centerMapFn([landmark.coordinates[1], landmark.coordinates[0]], 18);
      }
    },
    [
      centerMapFn,
      filteredLandmarks,
      closeSnackbar,
      setActiveIndex,
      setHasUserInteracted,
    ]
  );

  // Эффект для центрирования карты при изменении активной достопримечательности
  useEffect(() => {
    if (activeIndex !== null && centerMapFn) {
      const landmark = filteredLandmarks[activeIndex];
      if (landmark) {
        // Mapbox ожидает [долгота, широта]
        centerMapFn([landmark.coordinates[1], landmark.coordinates[0]], 18);
      } else {
        setActiveIndex(null); // Сбрасываем activeIndex, если достопримечательность не найдена
      }
    }
  }, [activeIndex, centerMapFn, filteredLandmarks, setActiveIndex]);

  return {
    centerMapFn,
    setCenterMapFn,
    handleMapClick,
    centerMapOnUserLocation,
    handleMapMarkerClick,
  };
};
