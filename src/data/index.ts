// src/data/index.ts (без изменений, просто для полноты)

import type {
  Landmark,
  CategorySlug,
  LandmarkContent,
  LangCode, // Импортируем новый тип LangCode
} from './landmarks/landmarkTypes.js';

export type { Landmark, CategorySlug, LandmarkContent, LangCode };

// ИМПОРТИРУЕМ ДАННЫЕ НАПРЯМУЮ ИЗ ФАЙЛОВ КАТЕГОРИЙ (они уже содержат все языки)
import { museumLandmarks } from './landmarks/museums.js';
import { foodDrinksLandmarks } from './landmarks/food-drinks.js';
import { artGalleriesLandmarks } from './landmarks/art-galleries.js';
import { clubsLandmarks } from './landmarks/clubs.js';
// import { otherLandmarks } from "./landmarks/other.js";

// =========================================================================
// 1. Создаем ОБЩИЙ список ВСЕХ достопримечательностей.
//    Landmark[] теперь уже включает все языковые версии внутри каждого объекта.
// =========================================================================
export const hoiAnLandmarks: Landmark[] = [
  ...museumLandmarks,
  ...foodDrinksLandmarks,
  ...artGalleriesLandmarks,
  ...clubsLandmarks,
  // ...otherLandmarks,
];

// =========================================================================
// 2. Вспомогательные функции для получения данных по языку и категории.
//    Используем LangCode для языковых параметров.
// =========================================================================

// Теперь lang типизируется как LangCode
export const getLandmarksByLanguage = (lang: LangCode): Landmark[] => {
  // Фильтруем, чтобы вернуть только те достопримечательности,
  // у которых есть контент для запрошенного языка.
  // Так как 'en' является обязательным, а другие - необязательными,
  // эта проверка `!== undefined` важна.
  return hoiAnLandmarks.filter((landmark) => landmark[lang] !== undefined);
};

// Теперь lang типизируется как LangCode
export const getLandmarksByCategoryAndLanguage = (
  category: CategorySlug,
  lang: LangCode
): Landmark[] => {
  let categorySpecificLandmarks: Landmark[] = [];

  // Определяем, из какого общего списка категорий брать данные
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
      categorySpecificLandmarks = artGalleriesLandmarks;
      break;
    // case "other":
    //   categorySpecificLandmarks = otherLandmarks;
    //   break;
    default:
      categorySpecificLandmarks = [];
  }

  // Фильтруем по наличию контента для нужного языка
  return categorySpecificLandmarks.filter(
    (landmark) => landmark[lang] !== undefined
  );
};

// =========================================================================
// (ОПЦИОНАЛЬНО) Добавление функции для получения данных по slug и языку
// =========================================================================

// Теперь lang типизируется как LangCode
export const getLandmarkBySlugAndLanguage = (
  slug: string,
  lang: LangCode // <--- Здесь тоже используем LangCode
): Landmark | undefined => {
  const found = hoiAnLandmarks.find((landmark) => {
    // TypeScript теперь уверен, что `lang` - это один из ключей объекта `landmark.slug`,
    // поскольку `LangCode` это гарантирует.
    // Проверка `landmark.slug` на существование не нужна, т.к. по интерфейсу он обязателен.
    return landmark.slug[lang] === slug;
  });

  // Возвращаем объект только если контент для данного языка существует
  // Добавляем проверку `found && found[lang]` на случай, если для найденного Landmark
  // отсутствует контент на запрошенном языке (если языки необязательны).
  return found && found[lang] ? found : undefined;
};
