// src/components/HeroSection.tsx

import { Container, Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
  memo,
} from 'react';

import { useLanguage } from '../contexts/LanguageContext';
import Preloader from './Preloader';
import LandmarkSwiper from './LandmarkSwiper';
import { LandmarkDetailsDialog } from './LandmarkDetailsDialog';
import { UserLocationButton } from './UserLocationButton'; // Можно удалить, если не используется в рендере
import { AppSnackbar, type SnackbarType } from './AppSnackbar';

import {
  hoiAnLandmarks,
  type Landmark,
  type LandmarkContent,
  type CategorySlug,
} from '../data';
import type { LocalizedLandmark } from '../data/landmarks/landmarkTypes.js';

const images = import.meta.glob('../assets/img/pictures/*', {
  eager: true,
  as: 'url',
});

export const getImageUrl = (name: string) =>
  images[`../assets/img/pictures/${name}`];

const snackbarImages = {
  welcome: getImageUrl('dragon.png'),
  error: getImageUrl('dragon.png'),
};

type ShowSnackbarFn = (message: string, type: SnackbarType) => void;

interface HeroSectionProps {
  selectedCategorySlugs: string[];
  // routeCoordinates?: [number, number][]; // Удаляем, если не используется
  // isRouteVisible?: boolean; // Удаляем, если не используется
  filteredLandmarks: LocalizedLandmark[];
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setHasUserInteracted: React.Dispatch<React.SetStateAction<boolean>>;
  hasInteractedWithMarkers: boolean;
  getLocalizedContent: (landmark: Landmark) => LandmarkContent; // Добавляем этот пропс
}

function HeroSection({
  selectedCategorySlugs,
  // routeCoordinates, // Удаляем
  // isRouteVisible, // Удаляем
  filteredLandmarks,
  activeIndex,
  setActiveIndex,
  setHasUserInteracted,
  hasInteractedWithMarkers,
  getLocalizedContent, // Деструктурируем
}: HeroSectionProps) {
  console.log('HeroSection: Render', {
    selectedCategorySlugs: selectedCategorySlugs.length,
    // routeCoordinatesLength: routeCoordinates?.length, // Удаляем
    // isRouteVisible, // Удаляем
    filteredLandmarksCount: filteredLandmarks.length,
    activeIndex,
    hasInteractedWithMarkers,
  });

  const { t, i18n } = useTranslation();
  const { currentLang } = useLanguage();

  const swiperRef = useRef<any>(null);

  const [openModal, setOpenModal] = useState(false);
  const [selectedLandmarkForModal, setSelectedLandmarkForModal] =
    useState<LocalizedLandmark | null>(null);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [snackbarType, setSnackbarType] = useState<SnackbarType>(null);
  const snackbarTimerIdRef = useRef<number | null>(null);

  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const welcomeSnackbarShownRef = useRef(false); // Новый реф для отслеживания показа приветственного снекбара

  const showSnackbar: ShowSnackbarFn = useCallback((message, type) => {
    if (snackbarTimerIdRef.current) {
      clearTimeout(snackbarTimerIdRef.current);
      snackbarTimerIdRef.current = null;
    }

    if (type === null && message === '') {
      setOpenSnackbar(false);
      setSnackbarMessage('');
      setSnackbarType(null);
      return;
    }

    setSnackbarMessage(message);
    setSnackbarType(type);

    snackbarTimerIdRef.current = setTimeout(() => {
      setOpenSnackbar(true);
    }, 50) as unknown as number;
  }, []);

  useEffect(() => {
    console.log('HeroSection: Mounted');
    return () => {
      console.log('HeroSection: Unmounted (Cleaning up)');
    };
  }, []);

  useEffect(() => {
    const imagesToLoad = [
      snackbarImages.welcome,
      ...filteredLandmarks
        .map((landmark) => getImageUrl(landmark.imageUrl))
        .filter(Boolean),
    ];

    let loadedCount = 0;
    const totalCount = imagesToLoad.length;

    if (totalCount === 0) {
      setIsContentLoaded(true);
      return;
    }

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalCount) {
        setIsContentLoaded(true);
      }
    };

    imagesToLoad.forEach((url) => {
      if (url) {
        const img = new Image();
        img.src = url;
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad;
      } else {
        handleImageLoad();
      }
    });

    return () => {
      if (snackbarTimerIdRef.current) {
        clearTimeout(snackbarTimerIdRef.current);
      }
    };
  }, [filteredLandmarks, snackbarImages, getImageUrl]);

  useEffect(() => {
    if (isContentLoaded) {
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 500) as unknown as number;
      return () => clearTimeout(timer);
    }
  }, [isContentLoaded]);

  useEffect(() => {
    if (
      swiperRef.current &&
      activeIndex !== null &&
      swiperRef.current.activeIndex !== activeIndex
    ) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  // Этот эффект теперь срабатывает только один раз, когда showPreloader становится false
  useEffect(() => {
    if (!showPreloader && !welcomeSnackbarShownRef.current) {
      showSnackbar(t('welcomeMessage'), 'welcome');
      welcomeSnackbarShownRef.current = true; // Отмечаем, что снекбар показан
    }
  }, [i18n.language, t, showPreloader, showSnackbar]);

  const handleMapClick = useCallback(() => {
    showSnackbar(t('noMarkers'), 'info');
  }, [t, showSnackbar]);

  const handleCloseSnackbar = useCallback(
    (event?: React.SyntheticEvent | Event, reason?: string) => {
      if (reason === 'clickaway') {
        return;
      }
      setOpenSnackbar(false);
      setSnackbarMessage('');
      setSnackbarType(null);
      if (snackbarTimerIdRef.current) {
        clearTimeout(snackbarTimerIdRef.current);
        snackbarTimerIdRef.current = null;
      }
    },
    []
  );

  const handleOpenModal = useCallback((landmark: LocalizedLandmark) => {
    setSelectedLandmarkForModal(landmark);
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setSelectedLandmarkForModal(null);
  }, []);

  const handleSlideOrButtonDetailClick = useCallback(
    (index: number, _event: React.MouseEvent) => {
      showSnackbar('', null);
      setActiveIndex(index);
      const landmark = filteredLandmarks[index];
      if (!landmark) {
        console.warn('Clicked slide/button with invalid index:', index);
        return;
      }
      handleOpenModal(landmark);
      setHasUserInteracted(true);
    },
    [
      handleOpenModal,
      filteredLandmarks,
      showSnackbar,
      setActiveIndex,
      setHasUserInteracted,
    ]
  );

  return (
    <Box
      component="section"
      id="hero"
      sx={{
        width: '100vw',
        minHeight: '100vh',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        flexWrap: 'nowrap',
      }}
    >
      <Container
        maxWidth={false}
        disableGutters
        sx={{
          flexGrow: 1,
          display: 'flex',
          flexDirection: 'column',
          minHeight: 0,
          width: '100%',
          height: '100dvh',
          overflow: 'hidden',
        }}
      >
        <Grid
          container
          sx={{
            flexGrow: 1,
            width: '100%',
            display: 'flex',
            flexDirection: 'column',
            minHeight: 0,
            height: '100dvh',
            overflow: 'hidden',
          }}
        >
          <Grid
            item
            xs={12}
            sx={{
              flexGrow: 1,
              display: 'flex',
              flexDirection: 'column',
              minHeight: 0,
              height: '100dvh',
              overflow: 'hidden',
            }}
          >
            <LandmarkSwiper
              filteredLandmarks={filteredLandmarks}
              activeIndex={activeIndex}
              hasInteractedWithMarkers={hasInteractedWithMarkers}
              isContentLoaded={isContentLoaded}
              snackbarImages={snackbarImages}
              getImageUrl={getImageUrl}
              getLocalizedContent={getLocalizedContent} // Передаем пропс
              onSlideChange={(swiper) => {
                if (swiper.activeIndex !== activeIndex) {
                  setActiveIndex(swiper.activeIndex);
                }
                if (!hasInteractedWithMarkers) {
                  setHasUserInteracted(true);
                }
              }}
              onSlideOrButtonDetailClick={handleSlideOrButtonDetailClick}
              swiperRef={swiperRef}
            />
          </Grid>
        </Grid>
      </Container>

      <LandmarkDetailsDialog
        open={openModal}
        onClose={handleCloseModal}
        selectedLandmark={selectedLandmarkForModal}
      />

      <AppSnackbar
        open={openSnackbar}
        message={snackbarMessage}
        type={snackbarType}
        onClose={handleCloseSnackbar}
      />

      <Preloader isLoading={showPreloader} />
    </Box>
  );
}

export default memo(HeroSection);
