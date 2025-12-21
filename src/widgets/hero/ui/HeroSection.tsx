import { Container, Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React, { useState, useRef, useEffect, useCallback, memo } from 'react';

import LandmarkSwiper from '../../../entities/landmark/ui/LandmarkSwiper.js';
import { LandmarkDetailsDialog } from '../../../entities/landmark/ui/LandmarkDetailsDialog.js';

import { type LandmarkContent } from '../../../entities/landmark/model/landmarkTypes';
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
  const snackbarImages = {
    welcome: getImageUrl('dragon.png'),
    error: getImageUrl('dragon.png'),
  };

  const [openModal, setOpenModal] = useState(false);
  const [selectedLandmarkForModal, setSelectedLandmarkForModal] =
    useState<LocalizedLandmark | null>(null);

  // Эффект для синхронизации Swiper с активным индексом
  useEffect(() => {
    if (
      swiperRef.current &&
      activeIndex !== null &&
      swiperRef.current.activeIndex !== activeIndex
    ) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  // Эффект для показа приветствия (срабатывает при загрузке и смене языка)
  useEffect(() => {
    if (i18n.isInitialized) {
      const welcomeTimer = setTimeout(() => {
        onShowSnackbar(t('welcomeMessage'), 'welcome');
      }, 100);
      return () => clearTimeout(welcomeTimer);
    }
  }, [i18n.isInitialized, i18n.language, onShowSnackbar, t]);

  const handleOpenModal = useCallback((landmark: LocalizedLandmark) => {
    setSelectedLandmarkForModal(landmark);
    setOpenModal(true);
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setSelectedLandmarkForModal(null);
  }, []);

  // 🔥 ИСПРАВЛЕНИЕ: Удален аргумент _event, так как он не использовался
  const handleSlideOrButtonDetailClick = useCallback(
    (index: number) => {
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

  const handleInitialSelect = useCallback(() => {
    setActiveIndex(0);
    setHasUserInteracted(true);
  }, [setActiveIndex, setHasUserInteracted]);

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
              isContentLoaded={true}
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
              onInitialSelect={handleInitialSelect}
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
    </Box>
  );
}

export default memo(HeroSection);
