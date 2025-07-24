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
  // useEffect(() => {}, [i18n.language]); // Удалена пустая функция useEffect

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
    setIsRouteVisible((prev) => {
      return !prev;
    });
  }, []);

  useEffect(() => {
    setRouteCoordinates([
      /*[108.33179828107085, 15.87521631272881],
      [108.332203949894, 15.87531004402662],
      [108.33318597999323, 15.875130148544812],
      [108.33307482899937, 15.876236581779779],
      [108.33458097111202, 15.87645732752091],
      [108.33425316230614, 15.877918721988124],
      [108.33263343889013, 15.8776531248554],
      [108.33001062222235, 15.877318814399999],
      [108.32912423935835, 15.877138354967968],*/
    ]);
    // return () => {}; // Удалена пустая функция очистки
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
  );
  const getLocalizedContentForLandmarkRef = useRef(
    getLocalizedContentForLandmark
  );
  useEffect(() => {
    if (
      getLocalizedContentForLandmarkRef.current !==
      getLocalizedContentForLandmark
    ) {
      getLocalizedContentForLandmarkRef.current =
        getLocalizedContentForLandmark;
    }
  }, [getLocalizedContentForLandmark]);

  const filteredLandmarks: LocalizedLandmark[] = useMemo(() => {
    const landmarksToProcess = hoiAnLandmarks.filter((landmark) =>
      (landmark.category as CategorySlug[]).some((category) =>
        selectedCategorySlugs.includes(category)
      )
    );

    return landmarksToProcess.map((landmark) => ({
      ...landmark,
      localizedContent: getLocalizedContentForLandmark(landmark),
    }));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [selectedCategorySlugs, i18n.language, getLocalizedContentForLandmark]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hasInteractedWithMarkers, setHasUserInteracted] = useState(false);

  const handleMapMarkerClick = useCallback(
    (index: number) => {
      // Важно: здесь мы должны использовать filteredLandmarks, чтобы получить правильный Landmark по индексу
      // из текущего отфильтрованного списка, а не из полного hoiAnLandmarks.
      const landmark = filteredLandmarks[index];
      if (!landmark) {
        // console.warn("Clicked marker with invalid index:", index); // Удален console.warn
        return;
      }
      setActiveIndex(index);
      setHasUserInteracted(true);
    },
    [setActiveIndex, setHasUserInteracted, filteredLandmarks] // Добавлена filteredLandmarks в зависимости
  );

  const handleMapClick = useCallback(() => {
    handleOpenSnackbar(t('mapClickedMessage'), 'info');
    setActiveIndex(null);
  }, [handleOpenSnackbar, t]);

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
          landmarks={filteredLandmarks} // <-- ИЗМЕНЕНО: Теперь передаем отфильтрованные данные
          activeIndex={activeIndex}
          onMapMarkerClick={handleMapMarkerClick}
          onMapClick={handleMapClick}
          routeCoordinates={routeCoordinates}
          hasUserInteracted={hasInteractedWithMarkers}
          isRouteVisible={isRouteVisible}
          onShowSnackbar={handleOpenSnackbar as ShowSnackbarFn}
          getLocalizedContent={getLocalizedContentForLandmark}
        />
      </Box>

      <HeroSection
        selectedCategorySlugs={selectedCategorySlugs}
        filteredLandmarks={filteredLandmarks}
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
