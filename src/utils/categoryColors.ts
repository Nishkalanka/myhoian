// src/utils/categoryColors.ts

// ИЗМЕНИТЕ ЭТУ СТРОКУ:
import { type CategorySlug } from '../data'; // <--- Добавьте 'type' перед CategorySlug

// Определите здесь ваши цвета.
export const categoryColors: Record<CategorySlug | 'default', string> = {
  museum: '#1976d2',
  'food-drinks': '#ed6c02',
  'art-galleries': '#9c27b0',
  default: '#ff980',
};

export const getCategoryColor = (categorySlug: CategorySlug): string => {
  return categoryColors[categorySlug] || categoryColors.default;
};
