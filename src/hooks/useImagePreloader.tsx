// src/hooks/useImagePreloader.ts
import { useState, useEffect, useRef } from 'react';
import { useTranslation } from 'react-i18next';
import type { Landmark } from '../data';

interface UseImagePreloaderProps {
  snackbarImages: { welcome: string; error: string };
  fullDescriptionImageMap: Record<string, string>;
  filteredLandmarks: Landmark[]; // Используем все landmarks здесь, если прелоадим все основные изображения
  getImageUrl: (name: string) => string | undefined;
  t: (key: string) => string;
  i18n: any; // Use proper i18n type if available
  setSnackbar: (
    message: string,
    type: 'welcome' | 'error' | 'info' | 'success' | 'warning' | null
  ) => void;
}

export const useImagePreloader = ({
  snackbarImages,
  fullDescriptionImageMap,
  filteredLandmarks,
  getImageUrl,
  t,
  i18n,
  setSnackbar,
}: UseImagePreloaderProps) => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const snackbarTimerIdRef = useRef<number | null>(null);

  useEffect(() => {
    const imagesToLoad = [
      snackbarImages.welcome,
      ...Object.values(fullDescriptionImageMap).filter(Boolean),
      ...filteredLandmarks
        .map((landmark) => getImageUrl(landmark.imageUrl))
        .filter(Boolean),
    ];

    let loadedCount = 0;
    const totalCount = imagesToLoad.length;

    if (totalCount === 0) {
      setIsContentLoaded(true);
      return;
    }

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalCount) {
        setIsContentLoaded(true);
      }
    };

    imagesToLoad.forEach((url) => {
      if (url) {
        const img = new Image();
        img.src = url;
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad;
      } else {
        handleImageLoad();
      }
    });

    return () => {
      if (snackbarTimerIdRef.current) {
        clearTimeout(snackbarTimerIdRef.current);
      }
    };
  }, [filteredLandmarks, fullDescriptionImageMap, getImageUrl, snackbarImages]);

  useEffect(() => {
    if (isContentLoaded) {
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 500) as unknown as number; // Type assertion for setTimeout return type
      return () => clearTimeout(timer);
    }
  }, [isContentLoaded]);

  useEffect(() => {
    if (!showPreloader) {
      if (snackbarTimerIdRef.current) {
        clearTimeout(snackbarTimerIdRef.current);
      }
      snackbarTimerIdRef.current = setTimeout(() => {
        setSnackbar(t('welcomeMessage'), 'welcome');
      }, 500) as unknown as number;

      return () => {
        if (snackbarTimerIdRef.current) {
          clearTimeout(snackbarTimerIdRef.current);
        }
      };
    }
  }, [i18n.language, t, showPreloader, setSnackbar]);

  return { isContentLoaded, showPreloader };
};
