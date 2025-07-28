// src/contexts/LanguageContext.tsx

import React, {
  createContext,
  useContext,
  useCallback,
  // useTransition, // <-- УДАЛИТЬ ЭТУ СТРОКУ
  type ReactNode,
} from 'react';
import { useTranslation } from 'react-i18next';

interface LanguageContextType {
  currentLang: string;
  setLang: (lang: string) => void;
  // isLanguageTransitionPending: boolean; // <-- УДАЛИТЬ ЭТУ СТРОКУ, если не используешь
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
  // const [isPending, startTransition] = useTransition(); // <-- УДАЛИТЬ ЭТУ СТРОКУ

  const currentLang = i18n.language;

  const setLang = useCallback(
    (newLang: string) => {
      if (newLang !== i18n.language) {
        // startTransition(() => { // <-- УДАЛИТЬ ЭТУ СТРОКУ
        i18n.changeLanguage(newLang);
        // }); // <-- УДАЛИТЬ ЭТУ СТРОКУ
      }
    },
    [i18n] // <-- УДАЛИТЬ startTransition из зависимостей
  );

  return (
    <LanguageContext.Provider
      value={{
        currentLang,
        setLang,
        // isLanguageTransitionPending: isPending // <-- УДАЛИТЬ ЭТУ СТРОКУ, если не используешь
      }}
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
