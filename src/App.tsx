// src/App.tsx
import React, { useState, useEffect, useCallback } from 'react';
import './index.css';
import { Box } from '@mui/material';

import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection';

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

  // === СТЕЙТ ДЛЯ КООРДИНАТ МАРШРУТА ===
  // Убедитесь, что он инициализирован как пустой массив, а не undefined
  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>(
    [] // <-- ВОТ ГДЕ ОН ВСЕГДА МАССИВ
  );

  // === НОВЫЙ СТЕЙТ ДЛЯ ВИДИМОСТИ МАРШРУТА ===
  const [isRouteVisible, setIsRouteVisible] = useState<boolean>(true);

  // === ФУНКЦИЯ ДЛЯ ПЕРЕКЛЮЧЕНИЯ ВИДИМОСТИ МАРШРУТА ===
  const toggleRouteVisibility = useCallback(() => {
    setIsRouteVisible((prev) => !prev);
    console.log('App: Route visibility toggled to', !isRouteVisible);
  }, [isRouteVisible]);

  useEffect(() => {
    setRouteCoordinates([
      [108.33179828107085, 15.87521631272881],
      [108.332203949894, 15.87531004402662],
      [108.33318597999323, 15.875130148544812],
      [108.33307482899937, 15.876236581779779],
      [108.33458097111202, 15.87645732752091],
      [108.33425316230614, 15.877918721988124],
      [108.33263343889013, 15.8776531248554],
      [108.33001062222235, 15.877318814399999],
      [108.32912423935835, 15.877138354967968],
    ]);
  }, []);

  return (
    <LanguageProvider>
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
          toggleRouteVisibility={toggleRouteVisibility}
          isRouteVisible={isRouteVisible}
        />

        <HeroSection
          selectedCategorySlugs={selectedCategorySlugs}
          routeCoordinates={routeCoordinates} // Всегда массив
          isRouteVisible={isRouteVisible}
        />
      </Box>
    </LanguageProvider>
  );
}

export default App;
