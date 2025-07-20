// src/components/HeroSection.tsx

import {
  Container,
  Box,
  Grid,
  IconButton,
  useTheme,
  Snackbar,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import { useTranslation } from 'react-i18next';

import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  useMemo,
} from 'react';

import { alpha } from '@mui/material/styles';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import { useLanguage } from '../contexts/LanguageContext';
import Preloader from './Preloader';
import LandmarkSwiper from './LandmarkSwiper';
import { MapComponent } from './MapComponent';
import { LandmarkDetailsDialog } from './LandmarkDetailsDialog';

import { hoiAnLandmarks, type Landmark, type CategorySlug } from '../data';

const images = import.meta.glob('../assets/img/pictures/*', {
  eager: true,
  as: 'url',
});

export const getImageUrl = (name: string) =>
  images[`../assets/img/pictures/${name}`]; // <--- ЭКСПОРТИРУЕМ

const snackbarImages = {
  welcome: getImageUrl('dragon.png'),
  error: getImageUrl('dragon.png'),
};

type SnackbarType = 'welcome' | 'error' | 'info' | 'success' | 'warning' | null;

interface HeroSectionProps {
  selectedCategorySlugs: string[];
}

function HeroSection({ selectedCategorySlugs }: HeroSectionProps) {
  const { t, i18n } = useTranslation();
  const theme = useTheme();
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

  // const dialogContentRef = useRef<HTMLDivElement>(null); // УДАЛЕНО
  // const [loadedModalImages, setLoadedModalImages] = useState<Set<string>>(new Set()); // УДАЛЕНО

  const [hasInteractedWithMarkers, setHasUserInteracted] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const filteredLandmarks = useMemo(() => {
    const landmarksToFilter = hoiAnLandmarks;

    if (selectedCategorySlugs.length === 0) {
      return landmarksToFilter;
    }

    return landmarksToFilter.filter((landmark) =>
      // Используем some, чтобы проверить, есть ли хотя бы одна общая категория
      (landmark.category as CategorySlug[]).some((category) =>
        selectedCategorySlugs.includes(category)
      )
    );
  }, [selectedCategorySlugs, currentLang]);

  useEffect(() => {
    const imagesToLoad = [
      snackbarImages.welcome,
      // ...Object.values(fullDescriptionImageMap).filter(Boolean), // УДАЛЕНО, теперь в LandmarkDetailsDialog
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
      if (snackbarTimerIdRef.current) {
        clearTimeout(snackbarTimerIdRef.current);
      }
      snackbarTimerIdRef.current = setTimeout(() => {
        setSnackbarMessage(t('welcomeMessage'));
        setSnackbarType('welcome');
        setOpenSnackbar(true);
      }, 500) as unknown as number;

      return () => {
        if (snackbarTimerIdRef.current) {
          clearTimeout(snackbarTimerIdRef.current);
        }
      };
    }
  }, [i18n.language, t, showPreloader]);

  const handleMapClick = useCallback(() => {
    if (snackbarTimerIdRef.current) {
      clearTimeout(snackbarTimerIdRef.current);
    }
    setSnackbarMessage(t('noMarkers'));
    setSnackbarType('info');
    setOpenSnackbar(false);
    snackbarTimerIdRef.current = setTimeout(() => {
      setOpenSnackbar(true);
    }, 200) as unknown as number;
  }, [t]);

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

  const snackbarAction = (
    <IconButton
      size="small"
      aria-label="close"
      color="inherit"
      onClick={handleCloseSnackbar}
    >
      <CloseIcon fontSize="small" />
    </IconButton>
  );

  const handleOpenModal = useCallback((landmark: Landmark) => {
    setSelectedLandmarkForModal(landmark);
    setOpenModal(true);
    // setLoadedModalImages(new Set()); // УДАЛЕНО, теперь в LandmarkDetailsDialog
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setSelectedLandmarkForModal(null);
    // setLoadedModalImages(new Set()); // УДАЛЕНО, теперь в LandmarkDetailsDialog
  }, []);

  const centerMapOnUserLocation = useCallback(() => {
    if (!centerMapFn) {
      setSnackbarMessage(t('mapNotLoadedYet'));
      setSnackbarType('warning');
      setOpenSnackbar(true);
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          // Mapbox ожидает [долгота, широта]
          centerMapFn([longitude, latitude], 15);
          setOpenSnackbar(false);
          if (snackbarTimerIdRef.current) {
            clearTimeout(snackbarTimerIdRef.current);
            snackbarTimerIdRef.current = null;
          }
          setSnackbarMessage(t('youAreHere'));
          setSnackbarType('success');
          setOpenSnackbar(true);
        },
        (error) => {
          console.error('Error getting user location:', error);
          let errorMessage = t('locationError');
          let currentSnackbarType: SnackbarType = 'error';
          if (error.code === error.PERMISSION_DENIED) {
            errorMessage = t('locationPermissionDenied');
            currentSnackbarType = 'error';
          }
          setSnackbarMessage(errorMessage);
          setSnackbarType(currentSnackbarType);
          setOpenSnackbar(true);
        },
        {
          enableHighAccuracy: true,
          timeout: 15000,
          maximumAge: 0,
        }
      );
    } else {
      setSnackbarMessage(t('geolocationNotSupported'));
      setSnackbarType('error');
      setOpenSnackbar(true);
    }
  }, [centerMapFn, t]);

  const handleMapMarkerClick = useCallback(
    (index: number, event: React.MouseEvent) => {
      setOpenSnackbar(false);
      setSnackbarMessage('');
      setSnackbarType(null);
      if (snackbarTimerIdRef.current) {
        clearTimeout(snackbarTimerIdRef.current);
        snackbarTimerIdRef.current = null;
      }
      setHasUserInteracted(true);
      const landmark = filteredLandmarks[index];
      if (!landmark) {
        console.warn('Clicked marker with invalid index:', index);
        return;
      }
      setActiveIndex(index);
      if (centerMapFn) {
        centerMapFn([landmark.coordinates[1], landmark.coordinates[0]], 18);
      }
    },
    [centerMapFn, filteredLandmarks]
  );

  const handleSlideOrButtonDetailClick = useCallback(
    (index: number, event: React.MouseEvent) => {
      setActiveIndex(index);
      setOpenSnackbar(false);
      setSnackbarMessage('');
      setSnackbarType(null);
      if (snackbarTimerIdRef.current) {
        clearTimeout(snackbarTimerIdRef.current);
        snackbarTimerIdRef.current = null;
      }
      setHasUserInteracted(true);
      const landmark = filteredLandmarks[index];
      if (!landmark) {
        console.warn('Clicked slide/button with invalid index:', index);
        return;
      }
      handleOpenModal(landmark);
    },
    [handleOpenModal, filteredLandmarks]
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

              <IconButton
                onClick={centerMapOnUserLocation}
                sx={{
                  position: 'absolute',
                  opacity: 0.5,
                  bottom: 184,
                  right: 8,
                  zIndex: 1000,
                  backgroundColor: theme.palette.background.paper,
                  '&:hover': {
                    backgroundColor: alpha(theme.palette.background.paper, 0.8),
                  },
                  boxShadow: theme.shadows[3],
                }}
                aria-label={t('centerMap')}
                disabled={!centerMapFn}
              >
                <MyLocationIcon />
              </IconButton>
            </Box>

            <LandmarkSwiper
              filteredLandmarks={filteredLandmarks}
              activeIndex={activeIndex}
              hasInteractedWithMarkers={hasInteractedWithMarkers}
              isContentLoaded={isContentLoaded}
              snackbarImages={snackbarImages}
              getImageUrl={getImageUrl} // Передаем getImageUrl в LandmarkSwiper
              getLocalizedContent={
                (landmark: Landmark) => landmark.en // Временная заглушка
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

      <Snackbar
        sx={{
          zIndex: 1001,
          top: 72,
        }}
        open={openSnackbar}
        autoHideDuration={10000}
        onClose={handleCloseSnackbar}
        message={snackbarMessage}
        action={snackbarAction}
        anchorOrigin={{ vertical: 'top', horizontal: 'center' }}
        ContentProps={{
          sx: {
            backgroundColor: '#ffbf00',
          },
        }}
      />

      <Preloader isLoading={showPreloader} />
    </Box>
  );
}

export default React.memo(HeroSection);
