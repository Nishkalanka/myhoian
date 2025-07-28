// src/components/HeroSection.tsx

import { Container, Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React, { useState, useRef, useEffect, useCallback, memo } from 'react';

import Preloader from './Preloader';
import LandmarkSwiper from './LandmarkSwiper';
import { LandmarkDetailsDialog } from './LandmarkDetailsDialog';

import { type LandmarkContent } from '../data';
import type {
  LocalizedLandmark,
  Landmark,
} from '../data/landmarks/landmarkTypes.js';

import type { ShowSnackbarFn } from './UserLocationButton';

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
  selectedCategorySlugs,
  filteredLandmarks,
  activeIndex,
  setActiveIndex,
  setHasUserInteracted,
  hasInteractedWithMarkers,
  getLocalizedContent,
  onShowSnackbar,
}: HeroSectionProps) {
  const { t, i18n } = useTranslation();

  const swiperRef = useRef<any>(null);

  const [openModal, setOpenModal] = useState(false);
  const [selectedLandmarkForModal, setSelectedLandmarkForModal] =
    useState<LocalizedLandmark | null>(null);

  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  // const welcomeSnackbarShownRef = useRef(false); // <-- УДАЛИТЬ ЭТУ СТРОКУ

  // useEffect для загрузки изображений
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
        handleImageLoad(); // Учитываем пустые URL как загруженные
      }
    });

    // Очистка не требуется, так как это одноразовый процесс
  }, [filteredLandmarks]);

  // useEffect для скрытия прелоадера
  useEffect(() => {
    if (isContentLoaded) {
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 500) as unknown as number;
      return () => clearTimeout(timer);
    }
  }, [isContentLoaded]);

  // useEffect для синхронизации Swiper с activeIndex
  useEffect(() => {
    if (
      swiperRef.current &&
      activeIndex !== null &&
      swiperRef.current.activeIndex !== activeIndex
    ) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  // --- ИЗМЕНЕНИЯ ЗДЕСЬ ---
  // Этот эффект теперь срабатывает при каждой смене языка, когда прелоадер исчез
  useEffect(() => {
    // Ждем, пока прелоадер скроется и i18n будет инициализирован.
    // Если i18n еще не инициализирован, t() может вернуть ключ.
    if (!showPreloader && i18n.isInitialized) {
      // Добавим небольшую задержку для начального показа,
      // чтобы не конфликтовать с анимацией прелоадера.
      // При смене языка эта задержка также будет, что нормально.
      const welcomeTimer = setTimeout(() => {
        onShowSnackbar(t('welcomeMessage'), 'welcome');
      }, 100); // Небольшая задержка, можно убрать, если не нужна
      return () => clearTimeout(welcomeTimer);
    }
  }, [showPreloader, i18n.isInitialized, i18n.language, onShowSnackbar, t]);
  // --- КОНЕЦ ИЗМЕНЕНИЙ ---

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

      <Preloader isLoading={showPreloader} />
    </Box>
  );
}

export default memo(HeroSection);
