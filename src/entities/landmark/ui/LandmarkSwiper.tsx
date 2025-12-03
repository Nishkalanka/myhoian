// src/components/LandmarkSwiper.tsx

import React, { memo, useCallback } from 'react';
import { Box, Typography, Button, useTheme, Chip, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-expect-error Swiper types missing
import 'swiper/css';
// @ts-expect-error Swiper types missing
import 'swiper/css/pagination';

import {
  type LandmarkContent,
  type CategorySlug,
} from '../../../data/index.js';
import { getCategoryColor } from '../../../shared/lib/categoryColors.js';
import type { LocalizedLandmark } from '../model/landmarkTypes.js';
import { type Landmark } from '../model/landmarkTypes.js';

interface LandmarkSwiperProps {
  filteredLandmarks: LocalizedLandmark[];
  activeIndex: number | null;
  hasInteractedWithMarkers: boolean;
  isContentLoaded: boolean;
  snackbarImages: { welcome: string | undefined; error: string | undefined };
  getImageUrl: (name: string) => string | undefined;
  getLocalizedContent: (landmark: Landmark) => LandmarkContent;
  onSlideChange: (swiper: any) => void;
  onSlideOrButtonDetailClick: (index: number, event: React.MouseEvent) => void;
  swiperRef: React.MutableRefObject<any>;
}

// ✅ Инъектим CSS стили для картинок
const injectSwiperImageStyles = () => {
  if (document.getElementById('swiper-image-styles')) return;

  const style = document.createElement('style');
  style.id = 'swiper-image-styles';
  style.textContent = `
    .swiper-slide-image {
      opacity: 0;
      transition: opacity 300ms ease-in-out;
      display: block;
      width: 100%;
      height: 100%;
      object-fit: cover;
    }

    .swiper-slide-image.loaded {
      opacity: 1 !important;
    }

    .swiper-slide-image-wrapper {
      width: 100%;
      height: 100%;
      background: #f5f5f5;
      overflow: hidden;
    }
  `;
  document.head.appendChild(style);
};

// ✅ Оптимизированный Image компонент с WebP поддержкой
interface OptimizedImageProps {
  src: string | undefined;
  alt: string;
  onLoad?: () => void;
  className?: string;
  style?: React.CSSProperties;
}

const OptimizedImage = memo<OptimizedImageProps>(
  ({ src, alt, onLoad, className = '', style }) => {
    const [imageSrc, setImageSrc] = React.useState<string | undefined>(src);
    const [isLoaded, setIsLoaded] = React.useState(false);

    React.useEffect(() => {
      if (!src) return;

      // ✅ Пытаемся загрузить WebP версию
      const webpSrc = src.replace(/\.(jpg|jpeg|png)$/i, '.webp');

      const img = new Image();
      img.onload = () => {
        setImageSrc(webpSrc);
      };
      img.onerror = () => {
        // Fallback на оригинальный формат
        setImageSrc(src);
      };
      img.src = webpSrc;
    }, [src]);

    return (
      <Box
        component="img"
        src={imageSrc}
        alt={alt}
        className={`swiper-slide-image ${isLoaded ? 'loaded' : ''} ${className}`}
        style={style}
        onLoad={() => {
          setIsLoaded(true);
          onLoad?.();
        }}
        onError={() => {
          // Если WebP не загрузился, показываем оригинал
          setImageSrc(src);
          setIsLoaded(true);
          onLoad?.();
        }}
      />
    );
  }
);

OptimizedImage.displayName = 'OptimizedImage';

const LandmarkSwiper: React.FC<LandmarkSwiperProps> = memo(
  function LandmarkSwiper({
    filteredLandmarks,
    activeIndex,
    hasInteractedWithMarkers,
    isContentLoaded,
    snackbarImages,
    getImageUrl,
    getLocalizedContent,
    onSlideChange,
    onSlideOrButtonDetailClick,
    swiperRef,
  }) {
    const { t } = useTranslation();
    const theme = useTheme();

    // ✅ Инъектим стили один раз
    React.useEffect(() => {
      injectSwiperImageStyles();
    }, []);

    // ✅ Callback для загрузки картинки
    const handleImageLoad = useCallback(() => {
      //console.log('🖼️ [Swiper] Image loaded');
    }, []);

    return (
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
          overscrollBehaviorY: 'contain',
          overscrollBehaviorX: 'contain',
        }}
      >
        <Swiper
          spaceBetween={8}
          breakpoints={{
            0: {
              slidesPerView: 1,
              spaceBetween: 8,
            },
            600: {
              slidesPerView: 2,
              spaceBetween: 8,
            },
            900: {
              slidesPerView: 3,
              spaceBetween: 8,
            },
            1200: {
              slidesPerView: 4,
              spaceBetween: 8,
            },
          }}
          centeredSlides={true}
          pagination={{ clickable: true }}
          style={{ width: '100%', height: '100%' }}
          onSwiper={(swiper) => (swiperRef.current = swiper)}
          initialSlide={
            activeIndex !== null && filteredLandmarks.length > 0
              ? activeIndex
              : 0
          }
          onSlideChange={onSlideChange}
        >
          {/* Приветственный слайд */}
          {!hasInteractedWithMarkers && (
            <SwiperSlide
              style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'flex-end',
                padding: '8px',
                boxSizing: 'border-box',
                cursor: 'pointer',
                backgroundColor: theme.palette.background.paper,
                borderRadius: '8px',
                textAlign: 'center',
                height: '172px',
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
                  justifyContent: 'flex-end',
                  width: '100%',
                  height: '100%',
                }}
              >
                <OptimizedImage
                  src={snackbarImages.welcome}
                  alt="Welcome"
                  style={{
                    width: 72,
                    height: 'auto',
                    objectFit: 'contain',
                    marginBottom: 8,
                    marginTop: 8,
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
          {filteredLandmarks.map(
            (landmark: LocalizedLandmark, index: number) => {
              const content = getLocalizedContent(landmark as Landmark);

              const maxDescriptionLength = 120;
              let displayDescription = content.description;
              if (
                displayDescription &&
                displayDescription.length > maxDescriptionLength
              ) {
                displayDescription = displayDescription.substring(
                  0,
                  maxDescriptionLength
                );
                displayDescription = displayDescription.substring(
                  0,
                  Math.min(
                    displayDescription.length,
                    displayDescription.lastIndexOf(' ')
                  )
                );
                displayDescription += '...';
              }

              return (
                <SwiperSlide
                  key={landmark.id}
                  style={{
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'flex-end',
                    alignItems: 'flex-start',
                    padding: '8px',
                    boxSizing: 'border-box',
                    backgroundColor:
                      activeIndex === index
                        ? theme.palette.background.paper
                        : alpha(theme.palette.background.paper, 0.9),
                    borderRadius: '8px',
                  }}
                  onClick={(e) => {
                    onSlideOrButtonDetailClick(index, e);
                  }}
                >
                  <Box
                    sx={{
                      display: 'flex',
                      gap: 1,
                      flexDirection: { xs: 'row', md: 'row' },
                      width: '100%',
                    }}
                  >
                    {landmark.imageUrl && (
                      <Box
                        sx={{
                          flexShrink: 0,
                          width: { xs: '124px', md: '124px' },
                          height: '100%',
                          borderRadius: '8px',
                          overflow: 'hidden',
                          display: 'flex',
                          alignItems: 'center',
                          aspectRatio: '4/5',
                          justifyContent: 'center',
                          backgroundColor: '#f5f5f5',
                        }}
                      >
                        {/* ✅ Оптимизированная картинка с WebP поддержкой */}
                        <OptimizedImage
                          src={getImageUrl(landmark.imageUrl)}
                          alt={content.title}
                          onLoad={handleImageLoad}
                        />
                      </Box>
                    )}
                    <Box
                      sx={{
                        flexGrow: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'start',
                        alignItems: 'flex-start',
                        minWidth: 0,
                      }}
                    >
                      {landmark.category && landmark.category.length > 0 && (
                        <Stack
                          direction="row"
                          spacing={0.5}
                          sx={{ mt: 0.5, flexWrap: 'wrap' }}
                        >
                          {landmark.category.map((catSlug: CategorySlug) => {
                            const categoryColor = getCategoryColor(catSlug);
                            return (
                              <Chip
                                key={catSlug}
                                label={t(`categories.${catSlug}`)}
                                size="small"
                                variant="filled"
                                sx={{
                                  height: 18,
                                  fontSize: '0.75rem',
                                  backgroundColor: categoryColor,
                                  color:
                                    theme.palette.getContrastText(
                                      categoryColor
                                    ),
                                  '&:hover': {
                                    backgroundColor: alpha(categoryColor, 0.8),
                                  },
                                }}
                              />
                            );
                          })}
                        </Stack>
                      )}

                      <Typography
                        variant="body1"
                        component="h3"
                        sx={{
                          mb: 0.5,
                          mt: 1,
                          lineHeight: 1.4,
                          textAlign: 'left',
                          width: '100%',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {content.title}
                      </Typography>
                      <Typography
                        variant="caption"
                        color="text.secondary"
                        sx={{
                          mb: 1,
                          display: '-webkit-box',
                          WebkitLineClamp: 2,
                          WebkitBoxOrient: 'vertical',
                          overflow: 'hidden',
                          textOverflow: 'ellipsis',
                        }}
                      >
                        {displayDescription}
                      </Typography>

                      <Button
                        size="small"
                        onClick={(e) => {
                          e.stopPropagation();
                          onSlideOrButtonDetailClick(index, e);
                        }}
                        sx={{ mt: 0, p: 0 }}
                      >
                        <Typography variant="caption">
                          {t('moreDetails')}
                        </Typography>
                      </Button>
                    </Box>
                  </Box>
                </SwiperSlide>
              );
            }
          )}
        </Swiper>
      </Box>
    );
  }
);

LandmarkSwiper.displayName = 'LandmarkSwiper';

export default LandmarkSwiper;
