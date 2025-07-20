// src/App.tsx
import React, { useState } from 'react';
import './index.css';
import { Box } from '@mui/material';

import { LanguageProvider } from './contexts/LanguageContext';
import Header from './components/Header';
import HeroSection from './components/HeroSection'; // Переносим сюда, если HeroSection больше не внутри Router/Routes

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
        />

        <HeroSection selectedCategorySlugs={selectedCategorySlugs} />
      </Box>
    </LanguageProvider>
  );
}

export default App;
