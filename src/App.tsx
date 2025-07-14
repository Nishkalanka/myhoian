// src/App.tsx
import React, { useState, Suspense } from 'react';
import './index.css';
import { Box, CircularProgress } from '@mui/material';
import HeroSection from './components/HeroSection';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate, // Удаляем Navigate, так как мы больше не перенаправляем на /en/
} from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';

function App() {
  const [selectedCategorySlugs, setSelectedCategorySlugs] = useState<string[]>([
    'museum',
    'food-drinks',
    'art-galleries',
    'clubs',
  ]);

  const handleCategorySelection = (selectedSlugs: string[]) => {
    setSelectedCategorySlugs(selectedSlugs);
  };

  return (
    <Router
      future={{
        v7_startTransition: true,
        v7_relativeSplatPath: true,
      }}
    >
      <LanguageProvider>
        <Suspense
          fallback={
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
                width: '100vw',
                position: 'fixed',
                top: 0,
                left: 0,
                backgroundColor: (theme) => theme.palette.background.default,
                zIndex: 9999,
              }}
            >
              <CircularProgress />
            </Box>
          }
        >
          <Box
            sx={{
              minHeight: '100vh',
              display: 'flex',
              flexDirection: 'column',
            }}
          >
            <Header
              onSelectCategories={handleCategorySelection}
              selectedCategorySlugs={selectedCategorySlugs}
            />

            <Routes>
              {/* Убираем все маршруты с /:lang */}
              {/* Вместо них используем один корневой маршрут */}
              <Route
                path="/" // Теперь основной маршрут просто "/"
                element={
                  <HeroSection selectedCategorySlugs={selectedCategorySlugs} />
                }
              />
              {/* Удаляем Navigate, так как не нужно перенаправлять */}
              {/* <Route path="/" element={<Navigate to="/en/" replace />} /> */}
            </Routes>
          </Box>
        </Suspense>
      </LanguageProvider>
    </Router>
  );
}

export default App;
