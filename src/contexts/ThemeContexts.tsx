// src/contexts/ThemeContext.tsx
import React, { createContext, useContext, useState, useMemo } from 'react';
import type { ReactNode } from 'react';
import type { PaletteMode } from '@mui/material';
import { ThemeProvider, createTheme } from '@mui/material';
import { getDesignTokens } from '../theme/theme'; // Мы создадим этот файл далее

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
  // Получаем предпочтительную тему пользователя из localStorage или системных настроек
  const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;
  const prefersDarkMode =
    window.matchMedia &&
    window.matchMedia('(prefers-color-scheme: dark)').matches;
  const initialMode: PaletteMode =
    savedMode || (prefersDarkMode ? 'dark' : 'light');

  const [mode, setMode] = useState<PaletteMode>(initialMode);

  // Функция для переключения темы
  const toggleColorMode = React.useCallback(() => {
    setMode((prevMode) => {
      const newMode = prevMode === 'light' ? 'dark' : 'light';
      localStorage.setItem('themeMode', newMode); // Сохраняем выбор пользователя
      return newMode;
    });
  }, []);

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
