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
  .use(LanguageDetector)
  .use(initReactI18next)
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
    lng: 'en',
    fallbackLng: 'en',
    supportedLngs: ['en', 'ru', 'es', 'fr', 'vn'],
    nonExplicitSupportedLngs: true,
    load: 'languageOnly',

    interpolation: {
      escapeValue: false,
    },
    debug: false,

    detection: {
      // Исключаем 'path' из порядка определения языка.
      // Теперь язык будет определяться только из localStorage или настроек браузера.
      order: ['localStorage', 'navigator'],
      caches: ['localStorage'],
    },
    react: {
      useSuspense: true,
    },
  });

export default i18n;
