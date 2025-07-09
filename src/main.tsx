import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './i18n.ts';

import CssBaseline from '@mui/material/CssBaseline'; // Для сброса базовых стилей CSS
import { ThemeContextProvider } from './contexts/ThemeContexts';
// import { LanguageProvider } from './contexts/LanguageContext'; // <--- УДАЛИТЕ ЭТУ СТРОКУ, мы переместим импорт в App.tsx

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <ThemeContextProvider>
      {' '}
      {/* ThemeContextProvider остается здесь */}
      <CssBaseline />
      {/* LanguageProvider будет внутри App.tsx вместе с BrowserRouter */}
      <App />
    </ThemeContextProvider>
  </React.StrictMode>
);
