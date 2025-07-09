// src/components/LandmarkSwiper.tsx
import React, { useCallback } from 'react';
import { Box, Typography, Button, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-expect-error Swiper types missing
import 'swiper/css';
// @ts-expect-error Swiper types missing
import 'swiper/css/pagination';

import { type Landmark, type LandmarkContent } from '../data'; // Убедитесь, что пути правильные

// Предполагаем, что getImageUrl и snackbarImages будут переданы
// или импортированы здесь, если они не глобальные.
// Пока оставим их как есть, чтобы не усложнять первый шаг.
// Позже мы их вынесем в отдельный utils или хук.

interface LandmarkSwiperProps {
  filteredLandmarks: Landmark[];
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

const LandmarkSwiper: React.FC<LandmarkSwiperProps> = ({
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
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

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
        initialSlide={
          activeIndex !== null && filteredLandmarks.length > 0 ? activeIndex : 0
        }
        onSlideChange={onSlideChange} // Используем переданный обработчик
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
              <Typography variant="body2" color="text.secondary" sx={{ mb: 1 }}>
                {t('swiperWelcomeSubtitle')}
              </Typography>
            </Box>
          </SwiperSlide>
        )}

        {/* Слайды достопримечательностей */}
        {filteredLandmarks.map((landmark: Landmark, index: number) => {
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
                onSlideOrButtonDetailClick(index, {} as React.MouseEvent);
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
                    sx={{ mb: 1, mt: 0.5, textAlign: 'left', width: '100%' }}
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
                      onSlideOrButtonDetailClick(index, e);
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
  );
};

export default React.memo(LandmarkSwiper);
