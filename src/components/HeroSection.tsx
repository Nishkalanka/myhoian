// src/components/HeroSection.tsx

import { Container, Box, Grid } from '@mui/material';

import { useTranslation } from 'react-i18next';

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import { useLanguage } from '../contexts/LanguageContext';
import Preloader from './Preloader';
import LandmarkSwiper from './LandmarkSwiper';
import { MapComponent } from './MapComponent';
import { LandmarkDetailsDialog } from './LandmarkDetailsDialog';
import { UserLocationButton } from './UserLocationButton';
import { AppSnackbar, type SnackbarType } from './AppSnackbar';

import { hoiAnLandmarks, type Landmark, type CategorySlug } from '../data';

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
}

function HeroSection({ selectedCategorySlugs }: HeroSectionProps) {
  const { t, i18n } = useTranslation();
  const { currentLang } = useLanguage();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const swiperRef = useRef<any>(null);

  const [centerMapFn, setCenterMapFn] = useState<
    ((coords: [number, number], zoom?: number) => void) | null
  >(null);

  const [openModal, setOpenModal] = useState(false);
  const [selectedLandmarkForModal, setSelectedLandmarkForModal] =
    useState<Landmark | null>(null);

  const [openSnackbar, setOpenSnackbar] = useState(false);
  const [snackbarMessage, setSnackbarMessage] = useState<string>('');
  const [snackbarType, setSnackbarType] = useState<SnackbarType>(null);
  const snackbarTimerIdRef = useRef<number | null>(null);

  const [hasInteractedWithMarkers, setHasUserInteracted] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const showSnackbar: ShowSnackbarFn = useCallback((message, type) => {
    if (snackbarTimerIdRef.current) {
      clearTimeout(snackbarTimerIdRef.current);
      snackbarTimerIdRef.current = null;
    }
    setOpenSnackbar(false); // Сначала закрываем, чтобы обновить или погасить
    setSnackbarMessage(message);
    setSnackbarType(type);

    // Если тип null и сообщение пустое (т.е. showSnackbar("", null) был вызван), мы не открываем его заново
    if (type === null && message === '') {
      return;
    }

    snackbarTimerIdRef.current = setTimeout(() => {
      setOpenSnackbar(true);
    }, 50) as unknown as number;
  }, []);

  const filteredLandmarks = useMemo(() => {
    const landmarksToFilter = hoiAnLandmarks;

    if (selectedCategorySlugs.length === 0) {
      return landmarksToFilter;
    }

    return landmarksToFilter.filter((landmark) =>
      (landmark.category as CategorySlug[]).some((category) =>
        selectedCategorySlugs.includes(category)
      )
    );
  }, [selectedCategorySlugs, currentLang]);

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

  // Снекбар при клике на пустую область карты
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

  const handleOpenModal = useCallback((landmark: Landmark) => {
    setSelectedLandmarkForModal(landmark);
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setSelectedLandmarkForModal(null);
  }, []);

  // Клик по маркеру - должен ТОЛЬКО ЗАКРЫВАТЬ существующий снекбар
  const handleMapMarkerClick = useCallback(
    (index: number /* event: React.MouseEvent */) => {
      showSnackbar('', null); // Только закрывает
      const landmark = filteredLandmarks[index];
      if (!landmark) {
        console.warn('Clicked marker with invalid index:', index);
        return;
      }
      setActiveIndex(index);
      if (centerMapFn) {
        centerMapFn([landmark.coordinates[1], landmark.coordinates[0]], 18);
      }
      setHasUserInteracted(true);
    },
    [centerMapFn, filteredLandmarks, showSnackbar]
  );

  // Клик по слайду/кнопке детали - должен ТОЛЬКО ЗАКРЫВАТЬ существующий снекбар
  const handleSlideOrButtonDetailClick = useCallback(
    (index: number /* event: React.MouseEvent */) => {
      showSnackbar('', null); // Только закрывает
      setActiveIndex(index);
      const landmark = filteredLandmarks[index];
      if (!landmark) {
        console.warn('Clicked slide/button with invalid index:', index);
        return;
      }
      handleOpenModal(landmark);
      setHasUserInteracted(true);
    },
    [handleOpenModal, filteredLandmarks, showSnackbar]
  );

  useEffect(() => {
    if (activeIndex !== null && centerMapFn) {
      const landmark = filteredLandmarks[activeIndex];
      if (landmark) {
        centerMapFn([landmark.coordinates[1], landmark.coordinates[0]], 18);
      } else {
        setActiveIndex(null);
      }
    }
  }, [activeIndex, centerMapFn, filteredLandmarks]);

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
                setCenterMapFn={setCenterMapFn}
              />

              <UserLocationButton
                centerMapFn={centerMapFn}
                onShowSnackbar={showSnackbar}
              />
            </Box>

            <LandmarkSwiper
              filteredLandmarks={filteredLandmarks}
              activeIndex={activeIndex}
              hasInteractedWithMarkers={hasInteractedWithMarkers}
              isContentLoaded={isContentLoaded}
              snackbarImages={snackbarImages}
              getImageUrl={getImageUrl}
              getLocalizedContent={(landmark: Landmark) => landmark.en}
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

export default React.memo(HeroSection);
