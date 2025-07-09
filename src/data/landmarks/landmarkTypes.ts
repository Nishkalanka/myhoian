// src/data/landmarks/landmarkTypes.ts

export type CategorySlug = 'museum' | 'food-drinks' | 'art-galleries'; // <-- Обновите, если будут новые категории

export interface LandmarkContent {
  title: string;
  description: string;
  fullDescription?: string; // Необязательное поле
  internalImageNames?: string[]; // Необязательное поле
}

export type LangCode = 'en' | 'ru' | 'es' | 'fr' | 'vn';

// Определяем базовые свойства, которые есть у всех Landmark
interface BaseLandmark {
  id: string;
  coordinates: [number, number]; // [долгота, широта]
  imageUrl: string;
  category: CategorySlug[];
  slug: {
    en: string;
    ru?: string; // Могут быть необязательными, если не у всех достопримечательностей есть слаги на всех языках
    es?: string;
    fr?: string;
    vn?: string;
  };
  // Явно указываем, что английский контент обязателен
  en: LandmarkContent;
  color?: string; // <--- ДОБАВЛЕНО: Добавляем необязательное свойство color
}

// Определяем языковые свойства как Record, где ключами являются LangCode,
// а значениями - LandmarkContent (или undefined, если поле необязательно)
// ИЗМЕНЕНИЕ: Используем Exclude для исключения 'en' из LangCode,
// и делаем остальные свойства необязательными с помощью Partial
type LocalizedOptionalContent = Partial<
  Record<Exclude<LangCode, 'en'>, LandmarkContent>
>;

// Объединяем BaseLandmark и LocalizedOptionalContent
// Это позволит индексировать Landmark по LangCode, где en обязателен, остальные опциональны.
export type Landmark = BaseLandmark & LocalizedOptionalContent;
