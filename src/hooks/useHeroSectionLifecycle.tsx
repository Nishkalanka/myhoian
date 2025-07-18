// src/hooks/useHeroSectionLifecycle.ts
import { useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { useSnackbarManager } from './useSnackbarManager';

interface UseHeroSectionLifecycleProps {
  isContentLoaded: boolean;
  showPreloader: boolean;
  setShowPreloader: React.Dispatch<React.SetStateAction<boolean>>;
}

export const useHeroSectionLifecycle = ({
  isContentLoaded,
  showPreloader,
  setShowPreloader,
}: UseHeroSectionLifecycleProps) => {
  const { i18n } = useTranslation(); // <-- i18n теперь используется здесь
  const { showSnackbar } = useSnackbarManager();

  // Эффект для управления прелоадером
  useEffect(() => {
    if (isContentLoaded) {
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 500) as unknown as number;
      return () => clearTimeout(timer);
    }
  }, [isContentLoaded, setShowPreloader]);

  // Эффект для показа приветственного снекбара
  useEffect(() => {
    if (!showPreloader) {
      showSnackbar('welcomeMessage', 'welcome', 500);
    }
  }, [i18n.language, showPreloader, showSnackbar]); // Зависимость от i18n.language здесь
};
