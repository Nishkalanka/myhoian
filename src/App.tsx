// src/App.tsx
import React, {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
} from 'react';
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
} from './data';
import type { LocalizedLandmark } from './data/landmarks/landmarkTypes.js';

import { useTranslation } from 'react-i18next';

import { AppSnackbar } from './components/AppSnackbar';
import { useSnackbar } from './hooks/useSnackbar';
import type { ShowSnackbarFn } from './components/UserLocationButton';

function App() {
  const { t, i18n } = useTranslation();

  const {
    openSnackbar,
    snackbarMessage,
    snackbarType,
    handleOpenSnackbar,
    handleCloseSnackbar,
  } = useSnackbar();

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
    setIsRouteVisible((prev) => !prev);
  }, []);

  useEffect(() => {
    setRouteCoordinates([]);
  }, []);

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
  );

  const getLocalizedContentForLandmarkRef = useRef(
    getLocalizedContentForLandmark
  );
  useEffect(() => {
    getLocalizedContentForLandmarkRef.current = getLocalizedContentForLandmark;
  }, [getLocalizedContentForLandmark]);

  const baseFilteredLandmarks: Landmark[] = useMemo(() => {
    return hoiAnLandmarks.filter((landmark) =>
      (landmark.category as CategorySlug[]).some((category) =>
        selectedCategorySlugs.includes(category)
      )
    );
  }, [selectedCategorySlugs]);

  const localizedFilteredLandmarksForHero: LocalizedLandmark[] = useMemo(() => {
    return baseFilteredLandmarks.map((landmark) => ({
      ...landmark,
      localizedContent: getLocalizedContentForLandmark(landmark),
    }));
  }, [baseFilteredLandmarks, getLocalizedContentForLandmark]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hasInteractedWithMarkers, setHasUserInteracted] = useState(false);

  const handleMapMarkerClick = useCallback(
    (index: number) => {
      const landmark = baseFilteredLandmarks[index];
      if (!landmark) {
        return;
      }
      setActiveIndex(index);
      setHasUserInteracted(true);
    },
    [setActiveIndex, setHasUserInteracted, baseFilteredLandmarks]
  );

  // --- ИЗМЕНЕНИЯ ЗДЕСЬ ---
  const handleMapClick = useCallback(() => {
    // Проверяем, инициализирован ли i18n, прежде чем использовать t()
    if (i18n.isInitialized) {
      handleOpenSnackbar(t('swiperWelcomeSubtitle'), 'info');
    } else {
      // Опционально: показать запасное сообщение или ничего не делать,
      // если i18n еще не готов.
      // handleOpenSnackbar("Map clicked!", "info");
      console.warn('i18n not initialized, cannot translate map click message.');
    }
    setActiveIndex(null);
  }, [handleOpenSnackbar, t, i18n.isInitialized]); // <-- Добавлена i18n.isInitialized в зависимости
  // --- КОНЕЦ ИЗМЕНЕНИЙ ---

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
          landmarks={baseFilteredLandmarks}
          activeIndex={activeIndex}
          onMapMarkerClick={handleMapMarkerClick}
          onMapClick={handleMapClick}
          routeCoordinates={routeCoordinates}
          hasUserInteracted={hasInteractedWithMarkers}
          isRouteVisible={isRouteVisible}
          onShowSnackbar={handleOpenSnackbar as ShowSnackbarFn}
          getLocalizedContentRef={getLocalizedContentForLandmarkRef}
        />
      </Box>

      <HeroSection
        selectedCategorySlugs={selectedCategorySlugs}
        filteredLandmarks={localizedFilteredLandmarksForHero}
        activeIndex={activeIndex}
        setActiveIndex={setActiveIndex}
        setHasUserInteracted={setHasUserInteracted}
        hasInteractedWithMarkers={hasInteractedWithMarkers}
        getLocalizedContent={getLocalizedContentForLandmark}
        onShowSnackbar={handleOpenSnackbar as ShowSnackbarFn}
      />

      <AppSnackbar
        open={openSnackbar}
        message={snackbarMessage}
        type={snackbarType}
        onClose={handleCloseSnackbar}
      />
    </Box>
  );
}

export default App;
