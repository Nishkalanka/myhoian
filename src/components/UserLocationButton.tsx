// src/components/UserLocationButton.tsx

import React, { useCallback } from 'react';
import { IconButton, useTheme, Box } from '@mui/material';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { alpha } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

// Определяем тип для функции показа Snackbar, которую будем передавать
export type ShowSnackbarFn = (
  message: string,
  type: 'welcome' | 'error' | 'info' | 'success' | 'warning' | null
) => void;

interface UserLocationButtonProps {
  centerMapFn: ((coords: [number, number], zoom?: number) => void) | null;
  onShowSnackbar: ShowSnackbarFn; // Функция для показа Snackbar
}

export const UserLocationButton: React.FC<UserLocationButtonProps> = ({
  centerMapFn,
  onShowSnackbar,
}) => {
  const theme = useTheme();
  const { t } = useTranslation();

  const centerMapOnUserLocation = useCallback(() => {
    if (!centerMapFn) {
      onShowSnackbar(t('mapNotLoadedYet'), 'warning');
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Mapbox ожидает [долгота, широта]
          centerMapFn([longitude, latitude], 15);
          onShowSnackbar(t('youAreHere'), 'success');
        },
        (error) => {
          console.error('Error getting user location:', error);
          let errorMessage = t('locationError');
          let currentSnackbarType: 'error' | 'warning' = 'error';
          if (error.code === error.PERMISSION_DENIED) {
            errorMessage = t('locationPermissionDenied');
            currentSnackbarType = 'error';
          }
          onShowSnackbar(errorMessage, currentSnackbarType);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0,
        }
      );
    } else {
      onShowSnackbar(t('geolocationNotSupported'), 'error');
    }
  }, [centerMapFn, onShowSnackbar, t]);

  return (
    <IconButton
      onClick={centerMapOnUserLocation}
      sx={{
        position: 'absolute',
        opacity: 0.5,
        bottom: 184,
        right: 8,
        zIndex: 1000,
        backgroundColor: theme.palette.background.paper,
        '&:hover': {
          backgroundColor: alpha(theme.palette.background.paper, 0.8),
        },
        boxShadow: theme.shadows[3],
      }}
      aria-label={t('centerMap')}
      disabled={!centerMapFn}
    >
      <MyLocationIcon />
    </IconButton>
  );
};
