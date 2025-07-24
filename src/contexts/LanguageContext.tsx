// src/contexts/LanguageContext.tsx

import React, {
  createContext,
  useContext,
  // useState, // Удален неиспользуемый импорт useState
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
  // Пустой useEffect без зависимостей и без тела не нужен. Удален.
  // useEffect(() => {
  //   return () => {};
  // }, []);

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
