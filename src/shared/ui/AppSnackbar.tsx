// src/components/AppSnackbar.tsx

import React from 'react';
import { Snackbar, IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

// Тип для SnackbarType, теперь определен прямо здесь
export type SnackbarType =
  | 'welcome'
  | 'error'
  | 'info'
  | 'success'
  | 'warning'
  | null;

interface AppSnackbarProps {
  open: boolean;
  message: string;
  type: SnackbarType;
  onClose: (event?: React.SyntheticEvent | Event, reason?: string) => void;
}

export const AppSnackbar: React.FC<AppSnackbarProps> = ({
  open,
  message,
  type,
  onClose,
}) => {
  const snackbarAction = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={onClose}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  const getBackgroundColor = (snackbarType: SnackbarType) => {
    switch (snackbarType) {
      case 'welcome':
        return '#ffbf00'; // Желтый для приветствия
      case 'error':
        return '#d32f2f'; // Красный для ошибки
      case 'info':
        return '#ffbf00'; // Синий для информации
      case 'success':
        return '#ffbf00'; // Зеленый для успеха
      case 'warning':
        return '#ff9800'; // Оранжевый для предупреждения
      default:
        return '#323232'; // Дефолтный темный
    }
  };

  return (
    <Snackbar
      sx={{
        zIndex: 1001,
        top: 72,
      }}
      open={open}
      autoHideDuration={10000}
      onClose={onClose}
      message={message}
      action={snackbarAction}
      anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
      ContentProps={{
        sx: {
          backgroundColor: getBackgroundColor(type),
        },
      }}
    />
  );
};
