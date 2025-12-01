import { useCallback, useState } from 'react';
import { useTranslation } from 'react-i18next';
import type { Landmark, MenuCategory } from '../model/landmarkTypes';

type LangCode = 'ru' | 'en' | 'es' | 'fr' | 'vn';

export const useMenuDisplay = () => {
  const { i18n } = useTranslation();
  const [selectedCategory, setSelectedCategory] = useState<string>('');

  const getLocalizedMenu = useCallback(
    (landmark: Landmark): MenuCategory[] => {
      const currentLang = i18n.language as LangCode;
      const localizedData = landmark[currentLang] || landmark.en;
      return localizedData?.menu || [];
    },
    [i18n.language]
  );

  const getMenuItems = useCallback(
    (landmark: Landmark, categoryName: string) => {
      const menu = getLocalizedMenu(landmark);
      return menu.find((cat) => cat.categoryName === categoryName)?.items || [];
    },
    [getLocalizedMenu]
  );

  return {
    getLocalizedMenu,
    getMenuItems,
    selectedCategory,
    setSelectedCategory,
  };
};
