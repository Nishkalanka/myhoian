// src/contexts/ThemeContext.tsx (ИСПРАВЛЕННЫЙ ДЛЯ ПРИНУДИТЕЛЬНОЙ ТЕМНОЙ ТЕМЫ)
import React, { createContext, useContext, useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens } from '../theme/theme'; // Убедитесь в правильности пути

// Определяем тип для нашего контекста
interface ThemeContextType {
  toggleColorMode: () => void;
  mode: PaletteMode;
}

// Создаем контекст
const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

// Создаем провайдер темы
interface ThemeContextProviderProps {
  children: ReactNode;
}

export const ThemeContextProvider: React.FC<ThemeContextProviderProps> = ({
  children,
}) => {
  // Принудительно устанавливаем mode в 'dark' и не позволяем ему меняться.
  // Можно даже не использовать useState, если тема абсолютно фиксирована
  const mode: PaletteMode = 'dark'; // <--- ЖЕСТКО ЗАДАЕМ ТЕМНЫЙ РЕЖИМ

  // Заглушка для toggleColorMode, если он все еще нужен где-то для типа, но не должен ничего делать
  const toggleColorMode = React.useCallback(() => {
    console.warn('Theme switching is disabled.');
    // Ничего не делаем
  }, []);

  // Если вы хотите, чтобы localStorage сохранял выбор, но тема была только dark
  // const [mode, setMode] = useState<PaletteMode>(() => {
  //   localStorage.setItem('themeMode', 'dark'); // Всегда сохраняем 'dark'
  //   return 'dark';
  // });
  // const toggleColorMode = React.useCallback(() => {
  //   // Ничего не делаем, тема всегда dark
  // }, []);

  // Создаем объект темы на основе текущего режима (mode)
  const theme = useMemo(() => createTheme(getDesignTokens(mode)), [mode]);

  return (
    <ThemeContext.Provider value={{ toggleColorMode, mode }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

// Хук для удобного использования контекста темы
export const useThemeContext = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error(
      'useThemeContext must be used within a ThemeContextProvider'
    );
  }
  return context;
};
