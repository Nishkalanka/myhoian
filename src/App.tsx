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
import { useNavigate, useParams } from 'react-router-dom';

import { AppSnackbar } from './components/AppSnackbar';
import { useSnackbar } from './hooks/useSnackbar';
import type { ShowSnackbarFn } from './components/UserLocationButton';

function App() {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const { slug: urlSlug, lang: urlLang } = useParams<{
    slug: string;
    lang: string;
  }>();

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

  const localizedFilteredLandmarks: LocalizedLandmark[] = useMemo(() => {
    const baseFilteredLandmarks = hoiAnLandmarks.filter((landmark) =>
      (landmark.category as CategorySlug[]).some((category) =>
        selectedCategorySlugs.includes(category)
      )
    );

    return baseFilteredLandmarks.map((landmark) => ({
      ...landmark,
      localizedContent: getLocalizedContentForLandmark(landmark),
    }));
  }, [selectedCategorySlugs, getLocalizedContentForLandmark]);

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hasInteractedWithMarkers, setHasUserInteracted] = useState(false);

  const handleMapMarkerClick = useCallback(
    (index: number) => {
      const landmark = localizedFilteredLandmarks[index];
      if (!landmark) {
        return;
      }
      setActiveIndex(index);
      setHasUserInteracted(true);

      const currentLanguage = i18n.language as keyof typeof landmark.slug;
      const slug = landmark.slug[currentLanguage];
      if (slug) {
        navigate(`/${i18n.language}/${slug}`, { replace: true });
      } else {
        console.error(`Slug for language '${currentLanguage}' not found.`);
      }
    },
    [
      setActiveIndex,
      setHasUserInteracted,
      localizedFilteredLandmarks,
      navigate,
      i18n.language,
    ]
  );

  const handleMapClick = useCallback(() => {
    if (i18n.isInitialized) {
      handleOpenSnackbar(t('swiperWelcomeSubtitle'), 'info');
    } else {
      console.warn('i18n not initialized, cannot translate map click message.');
    }
    setActiveIndex(null);
    navigate('/', { replace: true });
  }, [handleOpenSnackbar, t, i18n.isInitialized, navigate]);

  // Этот useEffect выбирает маркер по URL
  useEffect(() => {
    if (urlSlug && localizedFilteredLandmarks.length > 0) {
      const foundIndex = localizedFilteredLandmarks.findIndex((landmark) => {
        const slugs = Object.values(landmark.slug);
        return slugs.some(
          (slug) => slug?.toLowerCase() === urlSlug.toLowerCase()
        );
      });
      if (foundIndex !== -1) {
        setActiveIndex(foundIndex);
        setHasUserInteracted(true);
      } else {
        setActiveIndex(null);
      }
    } else {
      setActiveIndex(null);
    }
  }, [urlSlug, localizedFilteredLandmarks, i18n.language]);

  // НОВЫЙ useEffect для переключения языка по URL
  useEffect(() => {
    if (urlLang && i18n.language !== urlLang) {
      i18n.changeLanguage(urlLang);
    }
  }, [urlLang, i18n]);

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
          overflow: 'hidden',
        }}
      >
        <MapComponent
          landmarks={localizedFilteredLandmarks}
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
        filteredLandmarks={localizedFilteredLandmarks}
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
