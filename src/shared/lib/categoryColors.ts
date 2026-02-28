// src/utils/categoryColors.ts

import { type CategorySlug } from '../../data';

// Определите здесь ваши цвета.
export const categoryColors: Record<CategorySlug | 'default', string> = {
  museum: '#1976d2',
  'food-drinks': '#ed6c02',
  'art-galleries': '#9c27b0',
  clubs: '#283593',
  shops: '#00897b',
  default: '#ff980',
};

export const getCategoryColor = (categorySlug: CategorySlug): string => {
  return categoryColors[categorySlug] || categoryColors.default;
};
