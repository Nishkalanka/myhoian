// src/contexts/LanguageContext.tsx

import React, {
  createContext,
  useContext,
  useState, // Оставил, если вдруг понадобится для других целей, но для currentLang не используется
  useEffect,
  useCallback,
  useTransition,
  type ReactNode,
} from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextType {
  currentLang: string;
  setLang: (lang: string) => void;
  isLanguageTransitionPending: boolean;
}

const LanguageContext = createContext<LanguageContextType | undefined>(
  undefined
);

interface LanguageProviderProps {
  children: ReactNode;
}

export const LanguageProvider: React.FC<LanguageProviderProps> = ({
  children,
}) => {
  console.log('LanguageProvider: Render'); // Лог рендера

  const { i18n } = useTranslation();
  const [isPending, startTransition] = useTransition();

  const currentLang = i18n.language;

  const setLang = useCallback(
    (newLang: string) => {
      if (newLang !== i18n.language) {
        startTransition(() => {
          i18n.changeLanguage(newLang);
        });
      }
    },
    [i18n, startTransition]
  );

  // Этот useEffect будет срабатывать при монтировании/размонтировании самого LanguageProvider
  useEffect(() => {
    console.log('LanguageProvider: Mounted');
    return () => {
      console.log('LanguageProvider: Unmounted (Cleaning up)');
    };
  }, []); // Пустой массив зависимостей

  return (
    <LanguageContext.Provider
      value={{ currentLang, setLang, isLanguageTransitionPending: isPending }}
    >
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};
