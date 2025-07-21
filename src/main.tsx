import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './i18n.ts';

import CssBaseline from '@mui/material/CssBaseline'; // Для сброса базовых стилей CSS
import { ThemeContextProvider } from './contexts/ThemeContexts';

// Импортируем провайдеры MapContext и LanguageContext
import { LanguageProvider } from './contexts/LanguageContext';
import { MapProvider } from './contexts/MapContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeContextProvider>
    <CssBaseline />
    <LanguageProvider>
      <MapProvider>
        <App />
      </MapProvider>
    </LanguageProvider>
  </ThemeContextProvider>
);
