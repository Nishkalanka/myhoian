// src/shared/lib/landmarkOptimization.ts

import type {
  Landmark,
  LandmarkContent,
} from '../../entities/landmark/model/landmarkTypes';

/**
 * Обрабатывает fullDescription с оптимизацией:
 * - Ленивая загрузка картинок
 * - Интеграция WebP
 */
export const getOptimizedFullDescription = (
  _landmark: Landmark,
  content: LandmarkContent
): string => {
  let processedHtml = content.fullDescription || '';

  // ✅ Заменяем пути картинок и добавляем lazy loading
  if (content.internalImageNames && content.internalImageNames.length > 0) {
    content.internalImageNames.forEach((imageName: string) => {
      // ✅ Используем прямой путь к public/img/pictures/
      const realImageUrl = `/img/pictures/${imageName}`;

      const placeholder =
        'data:image/svg+xml,%3Csvg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 400 300"%3E%3C/svg%3E';
      processedHtml = processedHtml.replace(
        new RegExp(`src="${imageName}"`, 'g'),
        `loading="lazy" data-src="${realImageUrl}" src="${placeholder}"`
      );
    });
  }

  // ✅ Оборачиваем картинки в контейнер с правильным аспектом
  processedHtml = processedHtml.replace(
    /<img([^>]+?)\s*\/?>/g,
    '<div class="landmark__img-wrapper" style="position: relative; width: 100%; padding-bottom: 75%; overflow: hidden; border-radius: 8px; background: #f5f5f5;"><img$1 style="position: absolute; top: 0; left: 0; width: 100%; height: 100%; object-fit: cover;" class="image-fade-in"/></div>'
  );

  return processedHtml;
};

/**
 * Очищает кэш (больше не нужно)
 */
export const clearContentCache = (): void => {
  // Оставляю функцию для совместимости, но кэша больше нет
};
