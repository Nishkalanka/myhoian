// src/hooks/useLandmarkModal.ts
import { useState, useCallback, useRef, useEffect } from 'react';
import { useTranslation } from 'react-i18next';
import { fullDescriptionImageMap } from '../utils/imagePaths'; // Зависимость от карты изображений
import { type Landmark, type LandmarkContent } from '../data'; // Зависимость от типов данных

// Интерфейс UseLandmarkModalProps был удален, так как он не использовался
// и хук не принимает пропсов в текущей реализации.
// Если в будущем понадобятся пропсы, его можно будет добавить снова.

// Изменена сигнатура хука: убран пустой объект деструктуризации
// и параметр `_props` удален, так как он не используется.
export const useLandmarkModal = () => {
  const { i18n } = useTranslation();

  const [openModal, setOpenModal] = useState(false);
  const [selectedLandmarkForModal, setSelectedLandmarkForModal] =
    useState<Landmark | null>(null);
  const [loadedModalImages, setLoadedModalImages] = useState<Set<string>>(
    new Set()
  );
  const dialogContentRef = useRef<HTMLDivElement>(null);

  const handleOpenModal = useCallback((landmark: Landmark) => {
    setSelectedLandmarkForModal(landmark);
    setOpenModal(true);
    setLoadedModalImages(new Set()); // Очищаем состояние загруженных изображений при открытии
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setSelectedLandmarkForModal(null);
    setLoadedModalImages(new Set()); // Очищаем состояние загруженных изображений при закрытии
  }, []);

  // Логика получения локализованного контента для модального окна
  const getLocalizedContent = useCallback(
    (landmark: Landmark): LandmarkContent => {
      const langMap: Record<
        string,
        keyof Pick<Landmark, 'ru' | 'en' | 'es' | 'fr' | 'vn'>
      > = {
        ru: 'ru',
        es: 'es',
        fr: 'fr',
        vn: 'vn',
        en: 'en', // По умолчанию всегда есть
      };

      const currentLang = i18n.language;
      const langKey = langMap[currentLang] || 'en'; // Получаем ключ языка или по умолчанию 'en'

      const content = landmark[langKey];
      // Проверяем, существует ли контент для выбранного языка. Если нет, возвращаем английский.
      if (content) {
        return content;
      }
      return landmark.en; // По умолчанию английский, если выбранный язык не найден
    },
    [i18n.language]
  );

  // Логика обработки HTML описания, включая замену путей к изображениям
  const getProcessedFullDescription = useCallback(
    (landmark: Landmark) => {
      const content = getLocalizedContent(landmark);
      const descriptionHtml = content.fullDescription;
      const internalImageNames = content.internalImageNames;

      if (!descriptionHtml) {
        return '';
      }

      let processedHtml = descriptionHtml;

      if (internalImageNames && internalImageNames.length > 0) {
        internalImageNames.forEach((imageName: string) => {
          const realImageUrl = fullDescriptionImageMap[imageName];
          if (realImageUrl) {
            processedHtml = processedHtml.replace(
              new RegExp(`src="${imageName}"`, 'g'),
              `src="${realImageUrl}"`
            );
          } else {
            if (process.env.NODE_ENV === 'development') {
              console.warn(
                `Предупреждение: Изображение "${imageName}" указано в internalImageNames, но не найдено в fullDescriptionImageMap.`,
                `Попытка заменить src="${imageName}" для достопримечательности ${landmark.id}`
              );
            }
          }
        });
      } else {
        if (process.env.NODE_ENV === 'development') {
          console.warn(
            `Предупреждение: internalImageNames пусто или отсутствует для достопримечательности ${landmark.id}. Изображения в fullDescription могут загружаться некорректно.`
          );
        }
      }

      // Оборачиваем теги <img> для применения стилей (например, плавное появление)
      processedHtml = processedHtml.replace(
        /<img([^>]+?)\/?>/g,
        '<div class="landmark__img-wrapper"><img class="image-fade-in"$1/></div>'
      );
      return processedHtml;
    },
    [getLocalizedContent]
  );

  // Эффект для прокрутки содержимого модального окна наверх и обработки загрузки изображений внутри
  useEffect(() => {
    if (openModal && dialogContentRef.current) {
      dialogContentRef.current.scrollTop = 0; // Прокручиваем вверх при открытии

      const imgElements = dialogContentRef.current.querySelectorAll(
        '.landmark-details-content .landmark__img-wrapper img'
      );

      imgElements.forEach((img) => {
        const imageElement = img as HTMLImageElement;

        // Удаляем старые обработчики, чтобы избежать дублирования
        const oldLoadHandler = () =>
          imageElement.removeEventListener('load', oldLoadHandler);
        const oldErrorHandler = () =>
          imageElement.removeEventListener('error', oldErrorHandler);
        imageElement.removeEventListener('load', oldLoadHandler);
        imageElement.removeEventListener('error', oldErrorHandler);

        // Если изображение уже загружено, добавляем класс 'loaded' немедленно
        if (imageElement.complete) {
          imageElement.classList.add('loaded');
        } else {
          // Обработчики для загрузки и ошибок
          const handleLoad = () => {
            imageElement.classList.add('loaded');
            imageElement.removeEventListener('load', handleLoad);
            imageElement.removeEventListener('error', handleError);
          };

          const handleError = () => {
            imageElement.classList.add('loaded');
            imageElement.removeEventListener('load', handleLoad);
            imageElement.removeEventListener('error', handleError);
          };

          imageElement.addEventListener('load', handleLoad);
          imageElement.addEventListener('error', handleError);
        }
      });
    }
  }, [openModal, selectedLandmarkForModal]);

  return {
    openModal,
    selectedLandmarkForModal,
    dialogContentRef,
    loadedModalImages,
    handleOpenModal,
    handleCloseModal,
    getLocalizedContent,
    getProcessedFullDescription,
    setLoadedModalImages,
  };
};
