import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './i18n.ts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContextProvider } from './contexts/ThemeContexts';

import { LanguageProvider } from './contexts/LanguageContext';
import { MapProvider } from './contexts/MapContext';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <BrowserRouter
    future={{
      v7_startTransition: true,
      v7_relativeSplatPath: true,
    }}
  >
    <ThemeContextProvider>
      <CssBaseline />
      <LanguageProvider>
        <MapProvider>
          <Routes>
            <Route path="/:lang/:slug" element={<App />} />
            <Route path="/" element={<App />} />
          </Routes>
        </MapProvider>
      </LanguageProvider>
    </ThemeContextProvider>
  </BrowserRouter>
);
