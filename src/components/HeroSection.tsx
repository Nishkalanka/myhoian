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
import { fullDescriptionImageMap } from '../utils/imagePaths';
import { useThemeContext } from '../contexts/ThemeContexts';
import { MapComponent } from './MapComponent';

import {
  hoiAnLandmarks,
  type Landmark,
  type CategorySlug,
  type LandmarkContent,
} from '../data';

const images = import.meta.glob('../assets/img/pictures/*', {
  eager: true,
  as: 'url',
});

const getImageUrl = (name: string) => images[`../assets/img/pictures/${name}`];

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
  const { toggleColorMode, mode } = useThemeContext();

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

  const dialogContentRef = useRef<HTMLDivElement>(null);

  const [hasInteractedWithMarkers, setHasUserInteracted] = useState(false);
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  const [loadedModalImages, setLoadedModalImages] = useState<Set<string>>(
    new Set()
  );

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
      ...Object.values(fullDescriptionImageMap).filter(Boolean),
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
      // Проверяем, что URL существует, прежде чем пытаться загрузить изображение
      if (url) {
        const img = new Image();
        img.src = url;
        img.onload = handleImageLoad;
        img.onerror = handleImageLoad;
      } else {
        // Если URL пустой, все равно считаем его загруженным, чтобы не блокировать прелоадер
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
    if (openModal && dialogContentRef.current) {
      dialogContentRef.current.scrollTop = 0;

      const imgElements = dialogContentRef.current.querySelectorAll(
        '.landmark-details-content .landmark__img-wrapper img'
      );

      imgElements.forEach((img) => {
        const imageElement = img as HTMLImageElement;

        if (imageElement.complete) {
          imageElement.classList.add('loaded');
        } else {
          const handleLoad = () => {
            imageElement.classList.add('loaded');
            imageElement.removeEventListener('load', handleLoad);
            imageElement.removeEventListener('error', handleError);
          };

          const handleError = () => {
            imageElement.classList.add('loaded'); // Класс добавляется даже при ошибке, чтобы элемент не завис в невидимом состоянии
            imageElement.removeEventListener('load', handleLoad);
            imageElement.removeEventListener('error', handleError);
          };

          imageElement.addEventListener('load', handleLoad);
          imageElement.addEventListener('error', handleError);
        }
      });
    }
  }, [openModal, selectedLandmarkForModal]);

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
    setLoadedModalImages(new Set());
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setSelectedLandmarkForModal(null);
    setLoadedModalImages(new Set());
  }, []);

  const footerBorderColor =
    mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[300];

  const getLocalizedContent = useCallback(
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

  const getProcessedFullDescription = useCallback(
    (landmark: Landmark) => {
      const content = getLocalizedContent(landmark);
      const descriptionHtml = content.fullDescription;
      const internalImageNames = content.internalImageNames;

      if (!descriptionHtml) {
        return '';
      }

      let processedHtml = descriptionHtml;

      if (internalImageNames && internalImageNames.length > 0) {
        internalImageNames.forEach((imageName: string) => {
          const realImageUrl = fullDescriptionImageMap[imageName];
          if (realImageUrl) {
            // Теперь полагаемся на то, что src="" в HTML уже содержит имя файла (например, "26.jpg")
            processedHtml = processedHtml.replace(
              new RegExp(`src="${imageName}"`, 'g'),
              `src="${realImageUrl}"`
            );
          } else {
            console.warn(
              `Warning: Image ${imageName} specified in internalImageNames but not found in fullDescriptionImageMap.`,
              `Attempted to replace src="${imageName}"`
            );
          }
        });
      } else {
        console.warn(
          `Warning: internalImageNames is empty or missing for landmark ${landmark.id}. Images in fullDescription might not load correctly.`
        );
      }

      processedHtml = processedHtml.replace(
        /<img([^>]+?)\/?>/g,
        '<div class="landmark__img-wrapper"><img class="image-fade-in"$1/></div>'
      );
      return processedHtml;
    },
    [getLocalizedContent]
  );

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
        // ИСПРАВЛЕНО: Меняем местами, так как данные [широта, долгота]
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
        // ИСПРАВЛЕНО: Меняем местами, так как данные [широта, долгота]
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
                  className={`image-fade-in ${loadedModalImages.has(getImageUrl(selectedLandmarkForModal.imageUrl)) ? 'loaded' : ''}`}
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
