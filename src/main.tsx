import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './i18n.ts';
// Импортируем BrowserRouter из react-router-dom
import { BrowserRouter } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContextProvider } from './contexts/ThemeContexts';

import { LanguageProvider } from './contexts/LanguageContext';
import { MapProvider } from './contexts/MapContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // Оборачиваем все в BrowserRouter
  <BrowserRouter>
    <ThemeContextProvider>
      <CssBaseline />
      <LanguageProvider>
        <MapProvider>
          <App />
        </MapProvider>
      </LanguageProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);
