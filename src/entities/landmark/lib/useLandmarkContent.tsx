import { useTranslation } from 'react-i18next';
import React, { useCallback } from 'react';
import { Box, useTheme } from '@mui/material';

// Исправленный путь к типам (на уровень выше, в model)
import { type Landmark } from '../model/landmarkTypes';

// Определим локальный тип LangCode, если он не экспортируется
type LangCode = 'ru' | 'en' | 'es' | 'fr' | 'vn';

export const useLandmarkContent = () => {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

  const getLocalizedContent = useCallback(
    (
      landmark: Landmark,
      field: 'title' | 'description' | 'fullDescription'
    ): string => {
      const currentLang = i18n.language as LangCode;
      // Берем данные для текущего языка или фоллбэк на английски
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
    ): React.ReactNode => {
      if (!description) return null;

      // Разбиваем текст по тегам [img:filename.jpg]
      const parts = description.split(/(\[img:\s*[^\]]+\])/g);

      return parts.map((part, index) => {
        if (part.startsWith('[img:') && part.endsWith(']')) {
          const imageName = part.substring(5, part.length - 1).trim();
          const imageUrl = getImageUrl(imageName);

          if (imageUrl) {
            return (
              <Box
                component="img"
                key={`img-${index}`}
                src={imageUrl}
                alt={t('image_of', { name: imageName })}
                onLoad={(e: React.SyntheticEvent<HTMLImageElement>) =>
                  e.currentTarget.classList.add('loaded')
                }
                onError={(e: React.SyntheticEvent<HTMLImageElement>) =>
                  e.currentTarget.classList.add('loaded')
                }
                className="landmark__img-wrapper"
                sx={{
                  width: '100%',
                  height: 'auto',
                  borderRadius: '8px',
                  marginTop: theme.spacing(2),
                  marginBottom: theme.spacing(2),
                  display: 'block',
                  opacity: 0,
                  transition: 'opacity 0.5s ease-in-out',
                  '&.loaded': {
                    opacity: 1,
                  },
                }}
              />
            );
          }
        }

        // Рендерим HTML текст
        return (
          <span
            key={`text-${index}`}
            dangerouslySetInnerHTML={{ __html: part }}
          />
        );
      });
    },
    [t, theme]
  );

  return { getLocalizedContent, getProcessedFullDescription };
};
