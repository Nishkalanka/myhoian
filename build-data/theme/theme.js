export const getDesignTokens = (mode) => ({
  palette: {
    mode,
    ...(mode === 'light'
      ? {
          // Палитра для светлой темы
          primary: {
            main: '#1976d2',
          },
          secondary: {
            main: '#dc004e',
          },
          background: {
            default: '#f8f9fa',
            paper: '#ffffff',
          },
          text: {
            primary: '#212529',
            secondary: '#495057',
          },
        }
      : {
          // Палитра для темной темы
          primary: {
            main: '#90caf9',
          },
          secondary: {
            main: '#f48fb1',
          },
          background: {
            default: '#2e2e39',
            paper: '#2e2e39',
          },
          text: {
            primary: '#e0e0e0',
            secondary: '#a0a0a0',
          },
        }),
  },
  typography: {
    fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif',
    h1: {
      fontSize: '3rem',
    },
    // ... другие настройки типографики
  },
  // ... другие настройки, такие как компоненты, shadow, spacing
});
