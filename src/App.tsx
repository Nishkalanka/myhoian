// src/App.tsx
import React, { useState, Suspense } from 'react';
import './index.css';
import { Box, CircularProgress } from '@mui/material';
import HeroSection from './components/HeroSection';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from 'react-router-dom';
import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';

function App() {
  // Состояние для выбранных категорий, теперь инициализируется с 'museum'
  const [selectedCategorySlugs, setSelectedCategorySlugs] = useState<string[]>([
    'museum',
    'food-drinks',
    'art-galleries',
  ]);

  // Функция для обработки выбора категорий, передается в Header
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
              <Route
                path="/:lang"
                element={
                  <HeroSection selectedCategorySlugs={selectedCategorySlugs} />
                }
              />
              <Route
                path="/:lang/"
                element={
                  <HeroSection selectedCategorySlugs={selectedCategorySlugs} />
                }
              />
              <Route path="/" element={<Navigate to="/en/" replace />} />
            </Routes>
          </Box>
        </Suspense>
      </LanguageProvider>
    </Router>
  );
}

export default App;
