// src/App.tsx
import React, { useState, useEffect, useCallback, useMemo } from 'react';
import './index.css';
import { Box } from '@mui/material';

import Header from './components/Header';
import HeroSection from './components/HeroSection';
import { MapComponent } from './components/MapComponent';
import {
  hoiAnLandmarks,
  type Landmark,
  type CategorySlug,
  type LandmarkContent,
} from './data'; // Импорт LandmarkContent
import type { LocalizedLandmark } from './data/landmarks/landmarkTypes.js';
import { useTranslation } from 'react-i18next';

function App() {
  console.log('App: Render');

  const { t, i18n } = useTranslation();

  const [selectedCategorySlugs, setSelectedCategorySlugs] = useState<string[]>([
    'museum',
    'food-drinks',
    'art-galleries',
    'clubs',
  ]);

  const handleCategorySelection = useCallback((selectedSlugs: string[]) => {
    setSelectedCategorySlugs(selectedSlugs);
  }, []);

  const [routeCoordinates, setRouteCoordinates] = useState<[number, number][]>(
    []
  );

  const [isRouteVisible, setIsRouteVisible] = useState<boolean>(true);

  const toggleRouteVisibility = useCallback(() => {
    setIsRouteVisible((prev) => {
      console.log('App: Route visibility toggled to', !prev);
      return !prev;
    });
  }, []);

  useEffect(() => {
    console.log('App: Mounted');
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
    return () => {
      console.log('App: Unmounted (Cleaning up)');
    };
  }, []);

  // Стабилизируем функцию getLocalizedContentForLandmark
  const getLocalizedContentForLandmark = useCallback(
    (landmark: Landmark): LandmarkContent => {
      const lang = i18n.language as keyof Pick<
        Landmark,
        'ru' | 'en' | 'es' | 'fr' | 'vn'
      >;

      if (lang === 'ru' && landmark.ru) return landmark.ru;
      if (lang === 'es' && landmark.es) return landmark.es;
      if (lang === 'fr' && landmark.fr) return landmark.fr;
      if (lang === 'vn' && landmark.vn) return landmark.vn;
      return landmark.en;
    },
    [i18n.language]
  ); // Зависит от i18n.language

  const filteredLandmarks: LocalizedLandmark[] = useMemo(() => {
    const landmarksToProcess = hoiAnLandmarks.filter((landmark) =>
      (landmark.category as CategorySlug[]).some((category) =>
        selectedCategorySlugs.includes(category)
      )
    );

    return landmarksToProcess.map((landmark) => ({
      ...landmark,
      localizedContent: getLocalizedContentForLandmark(landmark), // Используем стабилизированную функцию
    }));
  }, [selectedCategorySlugs, i18n.language, getLocalizedContentForLandmark]); // Добавить getLocalizedContentForLandmark в зависимости

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hasInteractedWithMarkers, setHasUserInteracted] = useState(false);

  const handleMapMarkerClick = useCallback(
    (index: number) => {
      const landmark = filteredLandmarks[index];
      if (!landmark) {
        console.warn('Clicked marker with invalid index:', index);
        return;
      }
      setActiveIndex(index);
      setHasUserInteracted(true);
    },
    [filteredLandmarks]
  );

  const handleMapClick = useCallback(() => {
    // ...
  }, []);

  return (
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

      <Box
        sx={{
          flexGrow: 1,
          minHeight: 0,
          position: 'absolute',
          height: '100%',
          width: '100%',
        }}
      >
        <MapComponent
          landmarks={filteredLandmarks}
          activeIndex={activeIndex}
          onMapMarkerClick={handleMapMarkerClick}
          onMapClick={handleMapClick}
          routeCoordinates={routeCoordinates}
          hasUserInteracted={hasInteractedWithMarkers}
          isRouteVisible={isRouteVisible}
        />
      </Box>

      <HeroSection
        selectedCategorySlugs={selectedCategorySlugs}
        filteredLandmarks={filteredLandmarks}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setHasUserInteracted={setHasUserInteracted}
        hasInteractedWithMarkers={hasInteractedWithMarkers}
        getLocalizedContent={getLocalizedContentForLandmark} // Передаем стабилизированную функцию
      />
    </Box>
  );
}

export default App;
