// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import LanguageDetector from 'i18next-browser-languagedetector';

// Импортируем наши JSON-файлы с переводами
import translationEN from './data/locales/en/resumeData.js';
import translationRU from './data/locales/ru/resumeData.js';
import translationES from './data/locales/es/resumeData.js';
import translationFR from './data/locales/fr/resumeData.js';
import translationVN from './data/locales/vn/resumeData.js';

i18n
  .use(LanguageDetector) // Определяет язык браузера
  .use(initReactI18next) // Передает i18n экземпляр react-i18next
  .init({
    resources: {
      en: {
        translation: translationEN,
      },
      ru: {
        translation: translationRU,
      },
      es: {
        translation: translationES,
      },
      fr: {
        translation: translationFR,
      },
      vn: {
        translation: translationVN,
      },
    },
    // <--- ПРОВЕРЬТЕ ЭТИ ПАРАМЕТРЫ
    lng: 'en', // Язык по умолчанию при первой загрузке, если не определен детектором
    fallbackLng: 'en', // Язык, который будет использоваться, если нет перевода или текущий язык не найден.
    supportedLngs: ['en', 'ru', 'es', 'fr', 'vn'], // Явно указываем поддерживаемые языки
    nonExplicitSupportedLngs: true, // Позволяет детектору выбирать из fallback, даже если не указано в supportedLngs напрямую
    load: 'languageOnly', // Загружать только основной язык (например, 'en' вместо 'en-US')

    interpolation: {
      escapeValue: false, // React уже экранирует от XSS, так что это не нужно
    },
    debug: false, // Установи в true, если нужна отладка (для продакшена false)

    // <--- ОПЦИИ ДЛЯ LanguageDetector
    detection: {
      order: ['path', 'localStorage', 'navigator'], // Порядок, в котором детектор будет искать язык
      caches: ['localStorage'], // Где хранить последний выбранный язык
    },
    // --- ВАЖНОЕ ИЗМЕНЕНИЕ ЗДЕСЬ ---
    react: {
      useSuspense: true, // <-- Включаем Suspense для React
    },
    // ----------------------------
  });

export default i18n;
