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
  // --- ИЗМЕНЕНИЕ ЛОГИКИ ОПРЕДЕЛЕНИЯ initialMode ЗДЕСЬ ---
  const [mode, setMode] = useState<PaletteMode>(() => {
    // 1. Пытаемся получить сохраненную тему из localStorage
    const savedMode = localStorage.getItem('themeMode') as PaletteMode | null;

    // 2. Если есть сохраненная тема, используем ее.
    // 3. Если нет сохраненной темы, по умолчанию устанавливаем 'dark'.
    //    Игнорируем prefers-color-scheme для начальной установки, но
    //    сохраняем ее для пользовательского переключения.
    return savedMode || 'dark'; // Если savedMode null/undefined, то будет 'dark'
  });
  // --- КОНЕЦ ИЗМЕНЕНИЯ ---

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
