import React, { Suspense, useEffect } from 'react';
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
const LandingPage = React.lazy(() => import('./pages/LandingPage.tsx'));
const LandingPage2 = React.lazy(() => import('./pages/LandingPage2.tsx'));

// Wrapper component to manage preloader state
function AppWrapper() {
  useEffect(() => {
    // Remove static HTML preloader after a delay
    const timer = setTimeout(() => {
      const staticPreloader = document.getElementById('static-preloader');
      if (staticPreloader) {
        staticPreloader.style.opacity = '0';
        staticPreloader.style.transition = 'opacity 0.6s ease-out';
        setTimeout(() => {
          staticPreloader.remove();
        }, 600);
      }
    }, 800); // Show preloader for 800ms

    return () => clearTimeout(timer);
  }, []);

  return (
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
                    element={<LandingPage />}
                  />
                  <Route path="/kvest" element={<LandingPage2 />} />
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
}

ReactDOM.createRoot(document.getElementById('root')!).render(<AppWrapper />);
