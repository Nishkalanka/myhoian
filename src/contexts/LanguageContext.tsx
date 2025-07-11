// src/contexts/LanguageContext.tsx

import React, {
  createContext,
  useContext,
  useState,
  useEffect,
  useCallback,
  useTransition,
  type ReactNode,
} from 'react';
// Удаляем useLocation и useNavigate, так как они не будут использоваться для URL
// import { useLocation, useNavigate } from 'react-router-dom';
import { useTranslation } from 'react-i18next';

// Определяем интерфейс для нашего контекста
interface LanguageContextType {
  currentLang: string;
  setLang: (lang: string) => void;
  isLanguageTransitionPending: boolean;
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
  // Удаляем useLocation и useNavigate
  // const location = useLocation();
  // const navigate = useNavigate();
  const { i18n } = useTranslation();
  const [isPending, startTransition] = useTransition();

  // Получаем список поддерживаемых языков из конфигурации i18n
  // Теперь currentLang будет браться напрямую из i18n
  const initialLang = i18n.language || 'en'; // Убедимся, что есть начальное значение

  const [currentLang, setCurrentLang] = useState<string>(initialLang);

  useEffect(() => {
    // Этот useEffect синхронизирует i18n с currentLang, когда currentLang меняется
    if (i18n.language !== currentLang) {
      startTransition(() => {
        i18n.changeLanguage(currentLang);
      });
    }
  }, [currentLang, i18n, startTransition]);

  // Удаляем useEffect, который синхронизировал currentLang с URL
  // useEffect(() => {
  //   const langInUrl = getLangFromUrl();
  //   if (currentLang !== langInUrl) {
  //     setCurrentLang(langInUrl);
  //   }
  // }, [location.pathname, getLangFromUrl, currentLang]);

  // Удаляем getLangFromUrl, так как язык больше не будет браться из URL
  // const getLangFromUrl = useCallback(() => {
  //   const pathSegments = location.pathname.split('/').filter(Boolean);
  //   if (pathSegments.length > 0) {
  //     const potentialLang = pathSegments[0];
  //     if (supportedLanguages.includes(String(potentialLang))) {
  //       return String(potentialLang);
  //     }
  //   }
  //   return i18n.language;
  // }, [location.pathname, supportedLanguages, i18n.language]);

  const setLang = useCallback(
    (newLang: string) => {
      // Проверяем, если новый язык отличается от текущего
      if (newLang !== currentLang) {
        // Устанавливаем новый язык
        setCurrentLang(newLang);

        // НЕ МЕНЯЕМ URL
        // Все, что связано с pathWithoutLangPrefix, newPath и navigate, удаляем.
        startTransition(() => {
          i18n.changeLanguage(newLang); // Обновляем i18n язык
          // navigate(newPath); // Эту строку удаляем!
        });
      }
    },
    [
      currentLang,
      i18n,
      startTransition,
      // Удаляем location.pathname, navigate, supportedLanguages из зависимостей
    ]
  );

  return (
    <LanguageContext.Provider
      value={{ currentLang, setLang, isLanguageTransitionPending: isPending }}
    >
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
