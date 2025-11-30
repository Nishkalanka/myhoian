import React, { Suspense, useState, useEffect } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './i18n.ts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import CssBaseline from '@mui/material/CssBaseline';

import { ThemeContextProvider } from './contexts/ThemeContexts';
import { LanguageProvider } from './contexts/LanguageContext';
import { MapProvider } from './entities/map/model/MapContext.tsx';
import { GlobalPreloader } from './shared/ui/GlobalPreloader.tsx';

// Ленивая загрузка страниц
const LandingPage = React.lazy(() => import('./pages/LandingPage.tsx'));
const LandingPage2 = React.lazy(() => import('./pages/LandingPage2.tsx'));

// Wrapper component to manage preloader state
function AppWrapper() {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Show root immediately (preloader will be visible)
    const rootElement = document.getElementById('root');
    if (rootElement) {
      rootElement.classList.add('loaded');
    }

    // Hide preloader after a short delay for smooth transition
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 800); // Short delay for smooth appearance

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <GlobalPreloader isLoading={isLoading} />
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
    </>
  );
}

ReactDOM.createRoot(document.getElementById('root')!).render(<AppWrapper />);
