// src/contexts/LanguageContext.tsx

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useTransition, // <-- НОВЫЙ ИМПОРТ: useTransition
  type ReactNode,
} from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Определяем интерфейс для нашего контекста
interface LanguageContextType {
  currentLang: string;
  setLang: (lang: string) => void;
  isLanguageTransitionPending: boolean; // <-- НОВОЕ: состояние ожидания перехода
}

// Создаем контекст с дефолтными значениями
const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

// Определяем пропсы для провайдера
interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  const location = useLocation();
  const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [isPending, startTransition] = useTransition(); // <-- ИСПОЛЬЗУЕМ useTransition

  // Получаем список поддерживаемых языков из конфигурации i18n
  const supportedLanguages = i18n.options.supportedLngs || i18n.languages;

  const getLangFromUrl = useCallback(() => {
    const pathSegments = location.pathname.split('/').filter(Boolean);
    if (pathSegments.length > 0) {
      const potentialLang = pathSegments[0];
      if (supportedLanguages.includes(String(potentialLang))) {
        return String(potentialLang);
      }
    }
    return i18n.language;
  }, [location.pathname, supportedLanguages, i18n.language]);

  const [currentLang, setCurrentLang] = useState<string>(getLangFromUrl());

  useEffect(() => {
    // Этот useEffect синхронизирует i18n с currentLang, когда currentLang меняется
    if (i18n.language !== currentLang) {
      // Оборачиваем изменение языка i18n в startTransition
      startTransition(() => {
        i18n.changeLanguage(currentLang);
      });
    }
  }, [currentLang, i18n, startTransition]); // Добавляем startTransition в зависимости

  useEffect(() => {
    // Этот useEffect синхронизирует currentLang с URL (например, при прямой навигации или F5)
    const langInUrl = getLangFromUrl();
    if (currentLang !== langInUrl) {
      setCurrentLang(langInUrl);
    }
  }, [location.pathname, getLangFromUrl, currentLang]);

  const setLang = useCallback(
    (newLang: string) => {
      if (newLang !== currentLang) {
        setCurrentLang(newLang);

        const currentPathname = location.pathname;

        let pathWithoutLangPrefix = '';

        let foundLangPrefix = '';
        for (const lang of supportedLanguages) {
          if (currentPathname.startsWith(`/${lang}/`)) {
            foundLangPrefix = `/${lang}`;
            break;
          } else if (currentPathname === `/${lang}`) {
            foundLangPrefix = `/${lang}`;
            break;
          }
        }

        if (foundLangPrefix) {
          pathWithoutLangPrefix = currentPathname.substring(
            foundLangPrefix.length
          );
        } else {
          pathWithoutLangPrefix = currentPathname;
        }

        if (pathWithoutLangPrefix === '') {
          pathWithoutLangPrefix = '/';
        } else if (!pathWithoutLangPrefix.startsWith('/')) {
          pathWithoutLangPrefix = '/' + pathWithoutLangPrefix;
        }
        pathWithoutLangPrefix = pathWithoutLangPrefix.replace(/\/{2,}/g, '/');

        const newPath = `/${newLang}${pathWithoutLangPrefix === '/' ? '' : pathWithoutLangPrefix}`;

        // Оборачиваем навигацию в startTransition
        startTransition(() => {
          i18n.changeLanguage(newLang); // Обновляем i18n язык немедленно
          navigate(newPath); // Обновляем URL
        });
      }
    },
    [
      currentLang,
      i18n,
      location.pathname,
      navigate,
      supportedLanguages,
      startTransition,
    ] // Добавляем startTransition в зависимости
  );

  return (
    <LanguageContext.Provider
      value={{ currentLang, setLang, isLanguageTransitionPending: isPending }}
    >
      {' '}
      {/* <-- ПЕРЕДАЕМ isPending */}
      {children}
    </LanguageContext.Provider>
  );
};

// Хук для удобного использования контекста
export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
