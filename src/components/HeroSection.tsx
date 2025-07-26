// src/components/HeroSection.tsx

import { Container, Box, Grid } from '@mui/material';
import { useTranslation } from 'react-i18next';
import React, {
  useState,
  useRef,
  useEffect,
  useCallback,
  // useMemo, // Удален неиспользуемый импорт useMemo
  memo,
} from 'react';

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
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  selectedCategorySlugs, // Этот пропс передается в LandmarkSwiper, поэтому его оставляем
  filteredLandmarks,
  activeIndex,
  setActiveIndex,
  setHasUserInteracted,
  hasInteractedWithMarkers,
  getLocalizedContent,
  onShowSnackbar,
}: HeroSectionProps) {
  const { t, i18n } = useTranslation();
  // const { currentLang } = useLanguage(); // Удалена неиспользуемая переменная

  const swiperRef = useRef<any>(null);

  const [openModal, setOpenModal] = useState(false);
  const [selectedLandmarkForModal, setSelectedLandmarkForModal] =
    useState<LocalizedLandmark | null>(null);

  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const welcomeSnackbarShownRef = useRef(false);

  useEffect(() => {
    // Удалена пустая функция useEffect и ее очистка
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
      // Здесь нет локального таймера для снекбара, так что очищать нечего
    };
  }, [filteredLandmarks]); // Удалены snackbarImages, getImageUrl из зависимостей, так как они константы

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
      onShowSnackbar(t('welcomeMessage'), 'welcome');
      welcomeSnackbarShownRef.current = true;
    }
  }, [i18n.language, t, showPreloader, onShowSnackbar]);

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
      // _event помечен как неиспользуемый, чтобы ESLint не ругался

      setActiveIndex(index);
      const landmark = filteredLandmarks[index];
      if (!landmark) {
        // console.warn("Clicked slide/button with invalid index:", index); // Удален console.warn
        return;
      }
      handleOpenModal(landmark);
      setHasUserInteracted(true);
    },
    [
      handleOpenModal,
      filteredLandmarks,
      onShowSnackbar,
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

      {/* AppSnackbar теперь рендерится в App.tsx */}
      <Preloader isLoading={showPreloader} />
    </Box>
  );
}

export default memo(HeroSection);
