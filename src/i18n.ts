// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем наши JSON-файлы с переводами
import translationEN from './data/locales/en/resumeData';
import translationRU from './data/locales/ru/resumeData';
import translationES from './data/locales/es/resumeData';
import translationFR from './data/locales/fr/resumeData';
import translationVN from './data/locales/vn/resumeData';

i18n
  .use(initReactI18next) // Передаем i18n экземпляр react-i18next
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
    lng: 'en', // Язык по умолчанию (например, русский)
    fallbackLng: 'ru', // Язык, который будет использоваться, если нет перевода на основной язык
    interpolation: {
      escapeValue: false, // React уже экранирует от XSS, так что это не нужно
    },
    debug: false, // Установи в true, если нужна отладка
  });

export default i18n;
