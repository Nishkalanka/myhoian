import { Container, Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React, { useState, useRef, useEffect, useCallback, memo } from 'react';

import Preloader from '../../../shared/ui/Preloader.js';
import LandmarkSwiper from '../../../entities/landmark/ui/LandmarkSwiper.js';
import { LandmarkDetailsDialog } from '../../../entities/landmark/ui/LandmarkDetailsDialog.js';

import { type LandmarkContent } from '../../../data/index.js';
import type {
  LocalizedLandmark,
  Landmark,
} from '../../../entities/landmark/model/landmarkTypes.js';

import type { ShowSnackbarFn } from '../../../features/user-location/ui/UserLocationButton.js';

// Импортируем наш универсальный хук для картинок
import { usePictureUrl } from '../../../shared/lib/usePictureUrl.js';

interface HeroSectionProps {
  selectedCategorySlugs: string[];
  filteredLandmarks: LocalizedLandmark[];
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setHasUserInteracted: React.Dispatch<React.SetStateAction<boolean>>;
  hasInteractedWithMarkers: boolean;
  getLocalizedContent: (landmark: Landmark) => LandmarkContent;
  onShowSnackbar: ShowSnackbarFn;
}

function HeroSection({
  filteredLandmarks,
  activeIndex,
  setActiveIndex,
  setHasUserInteracted,
  hasInteractedWithMarkers,
  getLocalizedContent,
  onShowSnackbar,
}: HeroSectionProps) {
  const { t, i18n } = useTranslation();

  // Инициализируем хук для получения URL картинок
  const getImageUrl = usePictureUrl();

  const swiperRef = useRef<any>(null);

  // Картинки для снэкбара (получаем через общий хук)
  // Убедись, что 'dragon.png' есть в src/assets/img/pictures/
  const snackbarImages = {
    welcome: getImageUrl('dragon.png'),
    error: getImageUrl('dragon.png'),
  };

  const [openModal, setOpenModal] = useState(false);
  const [selectedLandmarkForModal, setSelectedLandmarkForModal] =
    useState<LocalizedLandmark | null>(null);

  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  // 1. Эффект для предзагрузки изображений
  useEffect(() => {
    const imagesToLoad = [
      snackbarImages.welcome,
      ...filteredLandmarks
        .map((landmark) => getImageUrl(landmark.imageUrl))
        .filter((url): url is string => !!url),
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
  }, [filteredLandmarks, getImageUrl, snackbarImages.welcome]);

  // 2. Эффект для скрытия прелоадера
  useEffect(() => {
    if (isContentLoaded) {
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isContentLoaded]);

  // 3. Эффект для синхронизации Swiper с активным индексом
  useEffect(() => {
    if (
      swiperRef.current &&
      activeIndex !== null &&
      swiperRef.current.activeIndex !== activeIndex
    ) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  // 4. Эффект для показа приветствия (срабатывает при загрузке и смене языка)
  useEffect(() => {
    if (!showPreloader && i18n.isInitialized) {
      const welcomeTimer = setTimeout(() => {
        onShowSnackbar(t('welcomeMessage'), 'welcome');
      }, 100);
      return () => clearTimeout(welcomeTimer);
    }
  }, [showPreloader, i18n.isInitialized, i18n.language, onShowSnackbar, t]);

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
      setActiveIndex(index);
      const landmark = filteredLandmarks[index];
      if (!landmark) {
        return;
      }
      handleOpenModal(landmark);
      setHasUserInteracted(true);
    },
    [handleOpenModal, filteredLandmarks, setActiveIndex, setHasUserInteracted]
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
              getLocalizedContent={getLocalizedContent}
              onSlideChange={(swiper: any) => {
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

      <Preloader isLoading={showPreloader} />
    </Box>
  );
}

export default memo(HeroSection);
