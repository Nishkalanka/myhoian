// src/hooks/useSnackbarManager.ts
import { useState, useRef, useEffect, useCallback } from 'react';
import { useTranslation } from 'react-i18next';
import { IconButton } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';

type SnackbarType = 'welcome' | 'error' | 'info' | 'success' | 'warning' | null;

interface UseSnackbarManagerResult {
  openSnackbar: boolean;
  snackbarMessage: string;
  snackbarType: SnackbarType;
  snackbarAction: JSX.Element;
  showSnackbar: (
    messageKey: string,
    type: SnackbarType,
    delay?: number
  ) => void;
  closeSnackbar: (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => void;
  snackbarTimerIdRef: React.MutableRefObject<number | null>;
}

export const useSnackbarManager = (): UseSnackbarManagerResult => {
  const { t } = useTranslation();
  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [snackbarType, setSnackbarType] = useState<SnackbarType>(null);
  const snackbarTimerIdRef = useRef<number | null>(null);

  const showSnackbar = useCallback(
    (messageKey: string, type: SnackbarType, delay = 0) => {
      if (snackbarTimerIdRef.current) {
        clearTimeout(snackbarTimerIdRef.current);
        snackbarTimerIdRef.current = null;
      }

      setOpenSnackbar(false);
      setSnackbarMessage(t(messageKey));
      setSnackbarType(type);

      snackbarTimerIdRef.current = setTimeout(() => {
        setOpenSnackbar(true);
      }, delay) as unknown as number;
    },
    [t]
  );

  const closeSnackbar = useCallback(
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
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={closeSnackbar}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  useEffect(() => {
    return () => {
      if (snackbarTimerIdRef.current) {
        clearTimeout(snackbarTimerIdRef.current);
      }
    };
  }, []);

  return {
    openSnackbar,
    snackbarMessage,
    snackbarType,
    snackbarAction,
    showSnackbar,
    closeSnackbar,
    snackbarTimerIdRef,
  };
};
