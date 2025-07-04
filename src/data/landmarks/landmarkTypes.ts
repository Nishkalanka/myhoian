// src/data/landmarks/landmarkTypes.ts

// Этот интерфейс описывает контент достопримечательности на ОДНОМ языке
export interface LandmarkContent {
  id: number; // ID должен быть общим для всех языков для одной и той же достопримечательности
  title: string;
  description: string;
  fullDescription?: string; // Опциональное поле для полного описания
  internalImageNames?: string[]; // Опциональное поле для имён файлов изображений, используемых во fullDescription
}

// Этот интерфейс описывает ПОЛНУЮ достопримечательность со всеми языками и общими данными
export interface Landmark {
  id: number;
  coordinates: [number, number];
  imageUrl: string; // Основное изображение достопримечательности
  category:
    | 'historical'
    | 'food'
    | 'market'
    | 'nature'
    | 'craft'
    | 'other'
    | 'museum'; // Добавил "museum" в категории
  // Ссылки на локализованный контент
  ru: LandmarkContent;
  en: LandmarkContent;
  es?: LandmarkContent | undefined; // <--- КЛЮЧЕВОЕ ИЗМЕНЕНИЕ: ДОБАВЬТЕ '| undefined'
  fr?: LandmarkContent | undefined; // <--- ДОБАВЬТЕ '| undefined'
  vn?: LandmarkContent | undefined; // <--- ДОБАВЬТЕ '| undefined'
}
