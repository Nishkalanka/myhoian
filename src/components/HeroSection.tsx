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
import React, { useState, useRef, useEffect, useCallback } from 'react';
import Header from './Header';
import { alpha } from '@mui/material/styles';
import MyLocationIcon from '@mui/icons-material/MyLocation';

// --- Импорт компонента Preloader
import Preloader from './Preloader';

const images = import.meta.glob('../assets/img/pictures/*', {
  eager: true,
  as: 'url',
});

const getImageUrl = (name: string) => images[`../assets/img/pictures/${name}`];

const snackbarImages = {
  welcome: getImageUrl('dragon.png'),
  error: getImageUrl('dragon.png'),
};

import { fullDescriptionImageMap } from '../utils/imagePaths';

import { useThemeContext } from '../contexts/ThemeContexts';
import { MapComponent } from './MapComponent';

import { hoiAnLandmarks, type Landmark, type LandmarkContent } from '../data';

import { Swiper, SwiperSlide } from 'swiper/react';

// @ts-expect-error Swiper types missing
import 'swiper/css';
// @ts-expect-error Swiper types missing
import 'swiper/css/pagination';

type SnackbarType = 'welcome' | 'error' | 'info' | 'success' | 'warning' | null;

function HeroSection() {
  const { t, i18n } = useTranslation();
  const theme = useTheme();

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

  const [hasInteractedWithMarkers, setHasInteractedWithMarkers] =
    useState(false);

  // --- Состояние для отслеживания загрузки контента
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  // --- Состояние для управления видимостью прелоадера с задержкой
  const [showPreloader, setShowPreloader] = useState(true);

  // --- НОВОЕ СОСТОЯНИЕ: для отслеживания загруженных изображений в модальном окне
  // Используем Set для эффективного добавления/проверки URL'ов
  const [loadedModalImages, setLoadedModalImages] = useState<Set<string>>(
    new Set()
  );

  // --- useEffect для отслеживания загрузки всех изображений
  useEffect(() => {
    const imagesToLoad = [
      snackbarImages.welcome,
      ...Object.values(fullDescriptionImageMap),
      ...hoiAnLandmarks
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
      const img = new Image();
      img.src = url;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad;
    });

    return () => {
      if (snackbarTimerIdRef.current) {
        clearTimeout(snackbarTimerIdRef.current);
      }
    };
  }, []);

  // --- useEffect для управления задержкой прелоадера
  useEffect(() => {
    if (isContentLoaded) {
      const timer = setTimeout(() => {
        setShowPreloader(false);
      }, 500);

      return () => clearTimeout(timer);
    }
  }, [isContentLoaded]);

  useEffect(() => {
    if (activeIndex !== null && !hasInteractedWithMarkers) {
      setHasInteractedWithMarkers(true);
    }
    if (
      swiperRef.current &&
      activeIndex !== null &&
      swiperRef.current.activeIndex !== activeIndex
    ) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex, hasInteractedWithMarkers]);

  // --- Новый useEffect для обработки изображений внутри DialogContent
  useEffect(() => {
    if (openModal && dialogContentRef.current) {
      dialogContentRef.current.scrollTop = 0;

      const imgElements = dialogContentRef.current.querySelectorAll(
        '.landmark-details-content .landmark__img-wrapper img'
      );

      imgElements.forEach((img) => {
        const imageElement = img as HTMLImageElement; // Приводим к HTMLImageElement
        if (imageElement.complete) {
          // Если изображение уже загружено (из кеша), сразу добавляем класс 'loaded'
          imageElement.classList.add('loaded');
        } else {
          // Иначе, добавляем слушатели для загрузки
          const handleLoad = () => {
            imageElement.classList.add('loaded');
            imageElement.removeEventListener('load', handleLoad);
            imageElement.removeEventListener('error', handleError);
          };
          const handleError = () => {
            // Также добавляем loaded на случай ошибки, чтобы не застревать в opacity: 0
            imageElement.classList.add('loaded');
            imageElement.removeEventListener('load', handleLoad);
            imageElement.removeEventListener('error', handleError);
          };

          imageElement.addEventListener('load', handleLoad);
          imageElement.addEventListener('error', handleError);
        }
      });
    }
  }, [openModal, selectedLandmarkForModal]); // Срабатывает при открытии модалки или смене контента

  // Этот useEffect относится к верхнему Snackbar
  useEffect(() => {
    if (!showPreloader) {
      if (snackbarTimerIdRef.current) {
        clearTimeout(snackbarTimerIdRef.current);
      }
      snackbarTimerIdRef.current = setTimeout(() => {
        setSnackbarMessage(t('welcomeMessage'));
        setSnackbarType('welcome');
        setOpenSnackbar(true);
      }, 500);

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
    }, 200);
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
    // При открытии модалки сбрасываем состояние загруженных изображений
    // Это важно, чтобы анимация срабатывала каждый раз
    setLoadedModalImages(new Set());
  }, []);

  const handleCloseModal = useCallback(() => {
    setOpenModal(false);
    setSelectedLandmarkForModal(null);
    setLoadedModalImages(new Set()); // Сбрасываем состояние при закрытии
  }, []);

  const footerBorderColor =
    mode === 'dark' ? theme.palette.grey[800] : theme.palette.grey[300];

  const getLocalizedContent = useCallback(
    (landmark: Landmark): LandmarkContent => {
      switch (i18n.language) {
        case 'ru':
          return landmark.ru;
        case 'es':
          return landmark.es || landmark.en;
        case 'fr':
          return landmark.fr || landmark.en;
        case 'vn':
          return landmark.vn || landmark.en;
        case 'en':
        default:
          return landmark.en;
      }
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
        internalImageNames.forEach((imageName) => {
          const imageUrl = fullDescriptionImageMap[imageName];

          if (imageUrl) {
            const placeholderInHtml = `IMAGE_PLACEHOLDER_${imageName}`;
            const regex = new RegExp(`src="${placeholderInHtml}"`, 'g');
            processedHtml = processedHtml.replace(regex, `src="${imageUrl}"`);
          } else {
            // console.warn(`Warning: Image ${imageName} not found in fullDescriptionImageMap.`);
          }
        });
      }

      // Оборачиваем <img> теги в <div class="landmark__img-wrapper">
      // и добавляем класс 'image-fade-in' для CSS-анимации
      processedHtml = processedHtml.replace(
        /<img([^>]+?)\/?>/g,
        '<div class="landmark__img-wrapper"><img class="image-fade-in"$1/></div>' // <-- ИЗМЕНЕНО ЗДЕСЬ: добавили класс
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

  const handleMarkerClick = useCallback(
    (index: number, event: React.MouseEvent) => {
      setActiveIndex(index);
      setOpenSnackbar(false);
      setSnackbarMessage('');
      setSnackbarType(null);
      if (snackbarTimerIdRef.current) {
        clearTimeout(snackbarTimerIdRef.current);
        snackbarTimerIdRef.current = null;
      }
      setHasInteractedWithMarkers(true);
    },
    []
  );

  useEffect(() => {
    if (activeIndex !== null && centerMapFn) {
      const landmark = hoiAnLandmarks[activeIndex];
      if (landmark) {
        centerMapFn([landmark.coordinates[1], landmark.coordinates[0]], 18);
      }
    }
  }, [activeIndex, centerMapFn]);

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
            <Header logo={t('logoTitle')} />
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
                landmarks={hoiAnLandmarks}
                activeIndex={activeIndex}
                onMarkerClick={handleMarkerClick}
                onMapClick={handleMapClick}
                setCenterMapFn={setCenterMapFn}
              />
              <IconButton
                onClick={centerMapOnUserLocation}
                sx={{
                  position: 'absolute',
                  opacity: 0.6,
                  bottom: 200,
                  right: 16,
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
              <IconButton
                onClick={centerMapOnUserLocation}
                sx={{
                  position: 'absolute',
                  opacity: 0.6,
                  bottom: 200,
                  right: 32,
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

            <Box
              sx={{
                width: '100%',
                height: { xs: 'auto', md: 'auto' },
                flexShrink: 0,
                p: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'fixed',
                bottom: 0,
                zIndex: 1000,
              }}
            >
              <Swiper
                spaceBetween={20}
                breakpoints={{
                  0: {
                    slidesPerView: 1,
                    spaceBetween: 18,
                  },
                  600: {
                    slidesPerView: 2,
                    spaceBetween: 18,
                  },
                  900: {
                    slidesPerView: 3,
                    spaceBetween: 18,
                  },
                  1200: {
                    slidesPerView: 4,
                    spaceBetween: 18,
                  },
                }}
                centeredSlides={true}
                pagination={{ clickable: true }}
                style={{ width: '100%', height: '100%' }}
                onSwiper={(swiper) => (swiperRef.current = swiper)}
                initialSlide={activeIndex !== null ? activeIndex : 0}
                onSlideChange={(swiper) => {
                  if (activeIndex !== swiper.activeIndex) {
                    setActiveIndex(swiper.activeIndex);
                  }
                  if (!hasInteractedWithMarkers) {
                    setHasInteractedWithMarkers(true);
                  }
                }}
              >
                {/* Приветственный слайд */}
                {!hasInteractedWithMarkers && (
                  <SwiperSlide
                    style={{
                      display: 'flex',
                      flexDirection: 'column',
                      justifyContent: 'center',
                      alignItems: 'center',
                      padding: '8px',
                      boxSizing: 'border-box',
                      cursor: 'pointer',
                      backgroundColor: theme.palette.background.paper,
                      borderRadius: '8px',
                      textAlign: 'center',
                      height: '184px',
                      opacity: isContentLoaded ? 1 : 0,
                      transform: isContentLoaded
                        ? 'translateY(0)'
                        : 'translateY(100px)',
                      transition:
                        'opacity 1s ease-out, transform 1s cubic-bezier(0.25, 1, 0.5, 1)',
                    }}
                  >
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        justifyContent: 'center',
                        width: '100%',
                        height: '100%',
                      }}
                    >
                      <Box
                        component="img"
                        src={snackbarImages.welcome}
                        alt="Welcome"
                        sx={{
                          width: { xs: 72 },
                          height: { xs: 'auto' },
                          objectFit: 'contain',
                          mb: 1,
                          mt: 1,
                        }}
                      />
                      <Typography variant="h6" component="h3" sx={{ mb: 0 }}>
                        {t('swiperWelcomeTitle')}
                      </Typography>
                      <Typography
                        variant="body2"
                        color="text.secondary"
                        sx={{ mb: 1 }}
                      >
                        {t('swiperWelcomeSubtitle')}
                      </Typography>
                    </Box>
                  </SwiperSlide>
                )}

                {/* Слайды достопримечательностей */}
                {hoiAnLandmarks.map((landmark: Landmark, index: number) => {
                  const content = getLocalizedContent(landmark);
                  return (
                    <SwiperSlide
                      key={landmark.id}
                      style={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        alignItems: 'flex-start',
                        padding: '8px',
                        boxSizing: 'border-box',
                        cursor: 'pointer',
                        backgroundColor:
                          activeIndex === index
                            ? theme.palette.background.paper
                            : alpha(theme.palette.background.paper, 0.9),
                        borderRadius: '8px',
                      }}
                      onClick={() => {
                        setActiveIndex(index); // Устанавливаем активный слайд
                        handleOpenModal(landmark); // Открываем модальное окно с деталями этой достопримечательности
                      }}
                    >
                      <Box
                        sx={{
                          display: 'flex',
                          gap: 1,
                          flexDirection: { xs: 'row', md: 'row' },
                        }}
                      >
                        {landmark.imageUrl && (
                          <Box
                            sx={{
                              flexShrink: 0,
                              width: { xs: '96px', md: '96px' },
                              height: '100%',
                              borderRadius: '8px',
                              overflow: 'hidden',
                              display: 'flex',
                              alignItems: 'center',
                              aspectRatio: '4/7',
                              justifyContent: 'center',
                            }}
                          >
                            <Box
                              component="img"
                              src={getImageUrl(landmark.imageUrl)}
                              alt={content.title}
                              sx={{
                                width: '100%',
                                height: '100%',
                                objectFit: 'cover',
                              }}
                            />
                          </Box>
                        )}
                        <Box
                          sx={{
                            flexGrow: 1,
                            display: 'flex',
                            flexDirection: 'column',
                            justifyContent: 'center',
                            alignItems: 'flex-start',
                            minWidth: 0,
                          }}
                        >
                          <Typography
                            variant="body1"
                            component="h3"
                            sx={{
                              mb: 1,
                              mt: 0.5,
                              textAlign: 'left',
                              width: '100%',
                            }}
                          >
                            {content.title}
                          </Typography>
                          <Typography
                            variant="body2"
                            color="text.secondary"
                            sx={{ mb: 2 }}
                          >
                            {content.description}
                          </Typography>

                          <Button
                            variant="outlined"
                            size="small"
                            onClick={(e) => {
                              e.stopPropagation();
                              handleOpenModal(landmark);
                            }}
                            sx={{ mt: 'auto' }}
                          >
                            {t('moreDetails')}
                          </Button>
                        </Box>
                      </Box>
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </Box>
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
                  // --- ИЗМЕНЕНИЯ ЗДЕСЬ: Основная картинка модалки
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
