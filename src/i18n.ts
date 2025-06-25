// src/i18n.ts
import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

// Импортируем наши JSON-файлы с переводами
import translationEN from './data/locales/en/resumeData';
import translationRU from './data/locales/ru/resumeData';

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
    },
    lng: 'ru', // Язык по умолчанию (например, русский)
    fallbackLng: 'en', // Язык, который будет использоваться, если нет перевода на основной язык
    interpolation: {
      escapeValue: false, // React уже экранирует от XSS, так что это не нужно
    },
    debug: false, // Установи в true, если нужна отладка
  });

export default i18n;
