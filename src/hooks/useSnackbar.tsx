// src/hooks/useSnackbar.tsx  <-- Обратите внимание на .tsx
import React, { useState, useCallback, useRef } from 'react';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';

type SnackbarType = 'welcome' | 'error' | 'info' | 'success' | 'warning' | null;

export const useSnackbar = () => {
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [snackbarType, setSnackbarType] = useState<SnackbarType>(null);
  const snackbarTimerIdRef = useRef<number | null>(null);

  const handleOpenSnackbar = useCallback(
    (message: string | null, type: SnackbarType = 'info') => {
      if (snackbarTimerIdRef.current) {
        clearTimeout(snackbarTimerIdRef.current);
      }
      setOpenSnackbar(false); // Сначала скрыть, чтобы сбросить анимацию
      setSnackbarMessage(message || ''); // Ensure message is always a string
      setSnackbarType(type);

      snackbarTimerIdRef.current = setTimeout(() => {
        setOpenSnackbar(true);
      }, 200) as unknown as number; // Small delay for re-animation
    },
    []
  );

  const handleCloseSnackbar = useCallback(
    (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
      setSnackbarMessage('');
      setSnackbarType(null);
      if (snackbarTimerIdRef.current) {
        clearTimeout(snackbarTimerIdRef.current);
        snackbarTimerIdRef.current = null;
      }
    },
    []
  );

  const snackbarAction = (
    // Это JSX, который требует .tsx расширения
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleCloseSnackbar}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  return {
    openSnackbar,
    snackbarMessage,
    snackbarType,
    handleOpenSnackbar,
    handleCloseSnackbar,
    snackbarAction,
  };
};
