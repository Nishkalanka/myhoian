import React, { Suspense } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './i18n.ts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeContextProvider } from './contexts/ThemeContexts';
import { LanguageProvider } from './contexts/LanguageContext';
import { MapProvider } from './entities/map/model/MapContext.tsx';

// Ленивая загрузка страниц
const Hoian = React.lazy(() => import('./pages/Hoian.tsx'));
const LandingPage2 = React.lazy(() => import('./pages/Kvest.tsx'));

ReactDOM.createRoot(document.getElementById('root')!).render(
  <HelmetProvider>
    <BrowserRouter
      future={{ v7_startTransition: true, v7_relativeSplatPath: true }}
    >
      <ThemeContextProvider>
        <CssBaseline />
        <LanguageProvider>
          <MapProvider>
            <Suspense fallback={null}>
              <Routes>
                <Route
                  path="/hoian-avtorskaya-ekskursiya"
                  element={<Hoian />}
                />
                <Route
                  path="/kvest-ekskursiya-hoian-v-korobke"
                  element={<LandingPage2 />}
                />
                <Route path="/:lang/:slug" element={<App />} />
                <Route path="/" element={<App />} />
              </Routes>
            </Suspense>
          </MapProvider>
        </LanguageProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </HelmetProvider>
);
