// src/hooks/useLandmarkContent.tsx
import { useTranslation } from 'react-i18next';
import React, { useCallback } from 'react';
import { type Landmark, type LangCode } from '../data/landmarks/landmarkTypes';
// ИЗМЕНЕНИЕ: РАСКОММЕНТИРОВАНО
import { StyledContentImage } from '../components/LandmarkDetailsDialog';
import { useTheme } from '@mui/material';

export const useLandmarkContent = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme(); // ИЗМЕНЕНИЕ: useTheme() СНОВА ВЫЗЫВАЕТСЯ ЗДЕСЬ

  const getLocalizedContent = useCallback(
    (
      landmark: Landmark,
      field: 'title' | 'description' | 'fullDescription'
    ): string => {
      const currentLang = i18n.language as LangCode;
      const localizedData = landmark[currentLang] || landmark.en;

      if (!localizedData) {
        console.warn(
          `No localized data found for landmark with currentLang: ${currentLang}`
        );
        return '';
      }
      return (localizedData[field] as string) || '';
    },
    [i18n.language]
  );

  const getProcessedFullDescription = useCallback(
    (
      description: string,
      getImageUrl: (name: string) => string | undefined
      // ИЗМЕНЕНИЕ: t: ReturnType<typeof useTranslation>['t'] - УДАЛЕНО из аргументов,
      // так как t берется из useTranslation() выше в хуке useLandmarkContent
    ): React.ReactNode => {
      // ИЗМЕНЕНИЕ: ТЕПЕРЬ ВОЗВРАЩАЕТ React.ReactNode
      const parts = description.split(/(\[img:\s*[^\]]+\])/g);

      return parts.map((part, index) => {
        if (part.startsWith('[img:') && part.endsWith(']')) {
          const imageName = part.substring(5, part.length - 1).trim();
          const imageUrl = getImageUrl(imageName);
          if (imageUrl) {
            return (
              <StyledContentImage // ИСПОЛЬЗУЕМ СТИЛИЗОВАННЫЙ КОМПОНЕНТ ДЛЯ КАРТИНКИ
                key={`img-${index}`}
                src={imageUrl}
                alt={t('image_of', { name: imageName })}
                // theme={theme} // StyledComponent получает theme автоматически через Context
                onLoad={(e) => e.currentTarget.classList.add('loaded')}
                onError={(e) => e.currentTarget.classList.add('loaded')}
                className="landmark__img-wrapper"
              />
            );
          }
        }
        // Это текстовая часть, которая может содержать HTML.
        // Используем dangerouslySetInnerHTML для рендеринга HTML.
        return (
          <span
            key={`text-${index}`}
            dangerouslySetInnerHTML={{ __html: part }}
          />
          // Примечание: Использование <span> для всего может вызвать проблемы, если внутри есть блочные элементы.
          // Если будут проблемы с версткой, возможно, придется вернуться к <div> для текста.
        );
      });
    },
    [t, theme] // ИЗМЕНЕНИЕ: ДОБАВЛЯЕМ 'theme' В ЗАВИСИМОСТИ CALLBACK
  );

  return { getLocalizedContent, getProcessedFullDescription };
};
