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
// import { useMapContext } from "../contexts/MapContext"; // Больше не нужен MapContext здесь
import Preloader from './Preloader';
import LandmarkSwiper from './LandmarkSwiper';
// import { MapComponent } from "./MapComponent"; // Больше не нужен MapComponent здесь
import { LandmarkDetailsDialog } from './LandmarkDetailsDialog';
import { UserLocationButton } from './UserLocationButton';
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
  routeCoordinates: [number, number][]; // Возможно, это больше не нужно HeroSection
  isRouteVisible: boolean; // Возможно, это больше не нужно HeroSection
  filteredLandmarks: LocalizedLandmark[]; // Новый пропс
  activeIndex: number | null; // Новый пропс
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>; // Новый пропс
  setHasUserInteracted: React.Dispatch<React.SetStateAction<boolean>>; // Новый пропс
  hasInteractedWithMarkers: boolean; // Новый пропс
}

function HeroSection({
  selectedCategorySlugs,
  routeCoordinates, // Удалите, если не используется
  isRouteVisible, // Удалите, если не используется
  filteredLandmarks, // Принимаем как пропс
  activeIndex,
  setActiveIndex,
  setHasUserInteracted,
  hasInteractedWithMarkers,
}: HeroSectionProps) {
  console.log('HeroSection: Render');

  const { t, i18n } = useTranslation();
  const { currentLang } = useLanguage();
  // const { centerMap } = useMapContext(); // Больше не нужен MapContext здесь

  // const [activeIndex, setActiveIndex] = useState<number | null>(null); // Теперь пропсы
  const swiperRef = useRef<any>(null);

  const [openModal, setOpenModal] = useState(false);
  const [selectedLandmarkForModal, setSelectedLandmarkForModal] =
    useState<LocalizedLandmark | null>(null);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [snackbarType, setSnackbarType] = useState<SnackbarType>(null);
  const snackbarTimerIdRef = useRef<number | null>(null);

  // const [hasInteractedWithMarkers, setHasUserInteracted] = useState(false); // Теперь пропс
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const showSnackbar: ShowSnackbarFn = useCallback((message, type) => {
    if (snackbarTimerIdRef.current) {
      clearTimeout(snackbarTimerIdRef.current);
      snackbarTimerIdRef.current = null;
    }
    setOpenSnackbar(false);
    setSnackbarMessage(message);
    setSnackbarType(type);

    if (type === null && message === '') {
      return;
    }

    snackbarTimerIdRef.current = setTimeout(() => {
      setOpenSnackbar(true);
    }, 50) as unknown as number;
  }, []);

  // filteredLandmarks теперь приходит как пропс
  // const filteredLandmarks: LocalizedLandmark[] = useMemo(() => { /* ... */ }, [selectedCategorySlugs, i18n.language]);

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
  }, [filteredLandmarks]);

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

  useEffect(() => {
    if (!showPreloader) {
      showSnackbar(t('welcomeMessage'), 'welcome');
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

  // handleMapMarkerClick больше не здесь, он в App.tsx
  // const handleMapMarkerClick = useCallback(/* ... */);

  const handleSlideOrButtonDetailClick = useCallback(
    (index: number) => {
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

  useEffect(() => {
    // Больше не используем centerMap напрямую, HeroSection просто управляет swiper
    // if (activeIndex !== null && centerMap) {
    //   const landmark = filteredLandmarks[activeIndex];
    //   if (landmark) {
    //     centerMap([landmark.coordinates[1], landmark.coordinates[0]], 18);
    //   } else {
    //     setActiveIndex(null);
    //   }
    // }
  }, [activeIndex, filteredLandmarks]); // centerMap удален

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
            <Box
              sx={{
                flexGrow: 1,
                minHeight: 0,
                position: 'absolute', // Этот Box больше не должен быть абсолютным, если MapComponent вне его
                height: '100%', // Эти стили должны быть пересмотрены, если MapComponent вынесен
                width: '100%',
              }}
            >
              {/* <MapComponent ... /> Больше не здесь */}
              {/* <UserLocationButton ... /> Больше не здесь */}
            </Box>

            <LandmarkSwiper
              filteredLandmarks={filteredLandmarks}
              activeIndex={activeIndex}
              hasInteractedWithMarkers={hasInteractedWithMarkers}
              isContentLoaded={isContentLoaded}
              snackbarImages={snackbarImages}
              getImageUrl={getImageUrl}
              getLocalizedContent={(landmark: LocalizedLandmark) =>
                landmark.localizedContent || landmark.en
              }
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
