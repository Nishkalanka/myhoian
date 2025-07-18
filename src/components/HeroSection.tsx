// src/components/HeroSection.tsx
import {
  Container,
  Box,
  Typography,
  Grid,
  Stack,
  IconButton,
  useTheme,
  Button,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Snackbar,
} from '@mui/material';

import CloseIcon from '@mui/icons-material/Close';

import { useTranslation } from 'react-i18next';

import React, { useState } from 'react';

// --- ИМПОРТИРУЕМ ВСЕ НАШИ НОВЫЕ ХУКИ ---
import { useSnackbarManager } from '../hooks/useSnackbarManager';
import { useImagePreloader } from '../hooks/useImagePreloader';
import { useLandmarkModal } from '../hooks/useLandmarkModal';
import { useMapInteractions } from '../hooks/useMapInteractions';
import { useLandmarkSwiper } from '../hooks/useLandmarkSwiper';
import { useFilteredLandmarks } from '../hooks/useFilteredLandmarks';
import { useHeroSectionLifecycle } from '../hooks/useHeroSectionLifecycle';

import { alpha } from '@mui/material/styles';
import MyLocationIcon from '@mui/icons-material/MyLocation';
import Preloader from './Preloader';
import LandmarkSwiper from './LandmarkSwiper';
import { MapComponent } from './MapComponent';

// Мы удалили импорты Landmark и CategorySlug, так как они теперь используются внутри хуков
// import { hoiAnLandmarks, type Landmark, type CategorySlug } from "../data";

const images = import.meta.glob('../assets/img/pictures/*', {
  eager: true,
  as: 'url',
});

const getImageUrl = (name: string) => images[`../assets/img/pictures/${name}`];

const snackbarImages = {
  welcome: getImageUrl('dragon.png'),
  error: getImageUrl('dragon.png'),
};

interface HeroSectionProps {
  selectedCategorySlugs: string[];
}

function HeroSection({ selectedCategorySlugs }: HeroSectionProps) {
  const { t } = useTranslation(); // i18n больше не нужен здесь
  const theme = useTheme();

  const [activeIndex, setActiveIndex] = useState<number | null>(null);
  const [hasInteractedWithMarkers, setHasUserInteracted] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  // --- ИСПОЛЬЗУЕМ ХУК УПРАВЛЕНИЯ СНЕКБАРОМ ---
  const { openSnackbar, snackbarMessage, snackbarAction, closeSnackbar } =
    useSnackbarManager();

  // --- ИСПОЛЬЗУЕМ ХУК ФИЛЬТРАЦИИ ДОСТОПРИМЕЧАТЕЛЬНОСТЕЙ ---
  const { filteredLandmarks } = useFilteredLandmarks({ selectedCategorySlugs });

  // --- ИСПОЛЬЗУЕМ ХУК УПРАВЛЕНИЯ МОДАЛЬНЫМ ОКНОМ ---
  const {
    openModal,
    selectedLandmarkForModal,
    dialogContentRef,
    loadedModalImages,
    handleOpenModal,
    handleCloseModal,
    getLocalizedContent,
    getProcessedFullDescription,
    setLoadedModalImages,
  } = useLandmarkModal({ getImageUrl });

  // --- ИСПОЛЬЗУЕМ ХУК ВЗАИМОДЕЙСТВИЙ С КАРТОЙ ---
  const {
    centerMapFn,
    setCenterMapFn,
    handleMapClick,
    centerMapOnUserLocation,
    handleMapMarkerClick,
  } = useMapInteractions({
    filteredLandmarks,
    activeIndex,
    setActiveIndex,
    setHasUserInteracted,
  });

  // --- ИСПОЛЬЗУЕМ ХУК УПРАВЛЕНИЯ SWIPER ---
  const { swiperRef, onSwiperSlideChange, handleSlideOrButtonDetailClick } =
    useLandmarkSwiper({
      filteredLandmarks,
      activeIndex,
      setActiveIndex,
      setHasUserInteracted,
      hasInteractedWithMarkers,
      getImageUrl,
      handleOpenModal,
      getLocalizedContent,
    });

  // --- ИСПОЛЬЗУЕМ ХУК ПРЕДЗАГРУЗКИ ИЗОБРАЖЕНИЙ ---
  const { isContentLoaded } = useImagePreloader({
    filteredLandmarks,
    snackbarImages,
    allImages: images,
  });

  // --- ИСПОЛЬЗУЕМ ХУК УПРАВЛЕНИЯ ЖИЗНЕННЫМ ЦИКЛОМ (ПРЕЛОАДЕР И СНЕКБАР) ---
  useHeroSectionLifecycle({ isContentLoaded, showPreloader, setShowPreloader });

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
              getImageUrl={getImageUrl}
              getLocalizedContent={getLocalizedContent}
              onSlideChange={onSwiperSlideChange}
              onSlideOrButtonDetailClick={handleSlideOrButtonDetailClick}
              swiperRef={swiperRef}
            />
          </Grid>
        </Grid>
      </Container>

      {/* Dialog полностью управляется useLandmarkModal */}
      <Dialog
        open={openModal}
        onClose={handleCloseModal}
        maxWidth="sm"
        fullWidth
        sx={{
          '& .MuiDialog-paper': {
            width: '100%',
            m: 1,
            maxHeight: 'calc(100dvh - 16px)',
          },
        }}
      >
        <DialogTitle sx={{ p: 2, pt: 1, pb: 1 }}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">
              {selectedLandmarkForModal
                ? getLocalizedContent(selectedLandmarkForModal).title
                : t('details')}
            </Typography>

            <IconButton
              edge="end"
              color="inherit"
              onClick={handleCloseModal}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>

        <DialogContent dividers ref={dialogContentRef} sx={{ pl: 2, pr: 2 }}>
          {selectedLandmarkForModal ? (
            <Box>
              {selectedLandmarkForModal.imageUrl && (
                <Box
                  component="img"
                  src={getImageUrl(selectedLandmarkForModal.imageUrl)}
                  alt={getLocalizedContent(selectedLandmarkForModal).title}
                  className={`image-fade-in ${
                    loadedModalImages.has(
                      getImageUrl(selectedLandmarkForModal.imageUrl)
                    )
                      ? 'loaded'
                      : ''
                  }`}
                  onLoad={() =>
                    setLoadedModalImages((prev) =>
                      new Set(prev).add(
                        getImageUrl(selectedLandmarkForModal.imageUrl)
                      )
                    )
                  }
                  onError={() =>
                    setLoadedModalImages((prev) =>
                      new Set(prev).add(
                        getImageUrl(selectedLandmarkForModal.imageUrl)
                      )
                    )
                  }
                  sx={{
                    width: '100%',
                    aspectRatio: '4/3',
                    objectFit: 'cover',
                    borderRadius: '8px',
                  }}
                />
              )}

              {getLocalizedContent(selectedLandmarkForModal).fullDescription ? (
                <Box
                  className="landmark-details-content"
                  sx={{ mb: 2 }}
                  dangerouslySetInnerHTML={{
                    __html: getProcessedFullDescription(
                      selectedLandmarkForModal
                    ),
                  }}
                />
              ) : (
                <Typography>{t('noDetailsAvailable')}</Typography>
              )}
            </Box>
          ) : (
            <Typography>{t('noDetailsAvailable')}</Typography>
          )}
        </DialogContent>

        <DialogActions>
          <Button onClick={handleCloseModal}>{t('close')}</Button>
        </DialogActions>
      </Dialog>

      <Snackbar
        sx={{
          zIndex: 1001,
          top: 72,
        }}
        open={openSnackbar}
        autoHideDuration={10000}
        onClose={closeSnackbar}
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
