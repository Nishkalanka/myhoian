import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './i18n.ts';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
// 1. Импортируй свой новый компонент
import LandingPage from './pages/LandingPage.tsx';
import LandingPage2 from './pages/LandingPage2.tsx';
import CssBaseline from '@mui/material/CssBaseline';
import { ThemeContextProvider } from './contexts/ThemeContexts';
import { LanguageProvider } from './contexts/LanguageContext';
import { MapProvider } from './entities/map/model/MapContext.tsx';

ReactDOM.createRoot(document.getElementById('root')!).render(
  // Оборачиваем все приложение в HelmetProvider
  <HelmetProvider>
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
              <Route
                path="/hoian-avtorskaya-ekskursiya"
                element={<LandingPage />}
              />
              <Route path="/kvest" element={<LandingPage2 />} />
              <Route path="/:lang/:slug" element={<App />} />
              <Route path="/" element={<App />} />
            </Routes>
          </MapProvider>
        </LanguageProvider>
      </ThemeContextProvider>
    </BrowserRouter>
  </HelmetProvider>
);
