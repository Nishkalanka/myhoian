// src/data/index.ts

import type {
  Landmark,
  CategorySlug,
  LandmarkContent,
  LangCode,
} from './landmarks/landmarkTypes.js';

export type { Landmark, CategorySlug, LandmarkContent, LangCode };

// ИМПОРТИРУЕМ ДАННЫЕ НАПРЯМУЮ ИЗ ФАЙЛОВ КАТЕГОРИЙ (они уже содержат все языки)
import { museumLandmarks } from './landmarks/museums.js';
import { foodDrinksLandmarks } from './landmarks/food-drinks.js';
import { artGalleriesLandmarks } from './landmarks/art-galleries.js';
import { clubsLandmarks } from './landmarks/clubs.js';
// import { otherLandmarks } from "./landmarks/other.js"; // Закомментировано, если не используется

// =========================================================================
// 1. Создаем ОБЩИЙ список ВСЕХ достопримечательностей.
//    Landmark[] теперь уже включает все языковые версии внутри каждого объекта.
// =========================================================================
export const hoiAnLandmarks: Landmark[] = [
  ...museumLandmarks,
  ...foodDrinksLandmarks,
  ...artGalleriesLandmarks,
  ...clubsLandmarks,
  // ...otherLandmarks, // Закомментировано, если не используется
];

// =========================================================================
// 2. Вспомогательные функции для получения данных по языку и категории.
//    Используем LangCode для языковых параметров.
// =========================================================================

export const getLandmarksByLanguage = (lang: LangCode): Landmark[] => {
  return hoiAnLandmarks.filter((landmark) => landmark[lang] !== undefined);
};

export const getLandmarksByCategoryAndLanguage = (
  category: CategorySlug,
  lang: LangCode
): Landmark[] => {
  let categorySpecificLandmarks: Landmark[] = [];

  switch (category) {
    case 'museum':
      categorySpecificLandmarks = museumLandmarks;
      break;
    case 'food-drinks':
      categorySpecificLandmarks = foodDrinksLandmarks;
      break;
    case 'art-galleries':
      categorySpecificLandmarks = artGalleriesLandmarks;
      break;
    case 'clubs':
      categorySpecificLandmarks = clubsLandmarks; // <-- ИСПРАВЛЕНО ЗДЕСЬ
      break;
    // case "other": // Закомментировано, если не используется
    //   categorySpecificLandmarks = otherLandmarks;
    //   break;
    default:
      categorySpecificLandmarks = [];
  }

  return categorySpecificLandmarks.filter(
    (landmark) => landmark[lang] !== undefined
  );
};

// =========================================================================
// (ОПЦИОНАЛЬНО) Добавление функции для получения данных по slug и языку
// =========================================================================

export const getLandmarkBySlugAndLanguage = (
  slug: string,
  lang: LangCode
): Landmark | undefined => {
  const found = hoiAnLandmarks.find((landmark) => {
    return landmark.slug[lang] === slug;
  });

  return found && found[lang] ? found : undefined;
};
