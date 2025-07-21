// src/theme.ts
import type { PaletteMode } from '@mui/material';

export const getDesignTokens = (mode: PaletteMode) => ({
  palette: {
    mode,
    // Если mode === "dark", используем темные цвета
    ...(mode === 'dark'
      ? {
          // ПАЛИТРА ДЛЯ ТЕМНОЙ ТЕМЫ
          primary: {
            main: '#90caf9', // Светло-голубой
          },
          secondary: {
            main: '#f48fb1', // Розовый
          },
          background: {
            default: '#2e2e39', // <-- ТЕМНО-СЕРЫЙ ФОН
            paper: '#2e2e39', // <-- ТЕМНО-СЕРЫЙ ФОН ДЛЯ КОМПОНЕНТОВ (карточки, диалоги)
          },
          text: {
            primary: '#e0e0e0', // <-- СВЕТЛЫЙ ТЕКСТ
            secondary: '#a0a0a0', // <-- СВЕТЛО-СЕРЫЙ ТЕКСТ
          },
        }
      : {
          // ПАЛИТРА ДЛЯ СВЕТЛОЙ ТЕМЫ
          primary: {
            main: '#1976d2', // Синий
          },
          secondary: {
            main: '#dc004e', // Красный
          },
          background: {
            default: '#f8f9fa', // <-- СВЕТЛО-СЕРЫЙ ФОН
            paper: '#ffffff', // <-- БЕЛЫЙ ФОН ДЛЯ КОМПОНЕНТОВ
          },
          text: {
            primary: '#212529', // <-- ТЕМНЫЙ ТЕКСТ
            secondary: '#495057', // <-- ТЕМНО-СЕРЫЙ ТЕКСТ
          },
        }),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
    },
  },
});
