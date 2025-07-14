// src/components/LandmarkSwiper.tsx
import React, { useCallback } from 'react';
import { Box, Typography, Button, useTheme, Chip, Stack } from '@mui/material';
import { alpha } from '@mui/material/styles';
import { useTranslation } from 'react-i18next';

import { Swiper, SwiperSlide } from 'swiper/react';
// @ts-expect-error Swiper types missing
import 'swiper/css';
// @ts-expect-error Swiper types missing
import 'swiper/css/pagination';

import {
  type Landmark,
  type LandmarkContent,
  type CategorySlug,
} from '../data'; // Импортируем CategorySlug
import { getCategoryColor } from '../utils/categoryColors'; // <-- ИМПОРТИРУЕМ ФУНКЦИЮ ДЛЯ ЦВЕТА КАТЕГОРИИ

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
          activeIndex !== null && filteredLandmarks.length > 0 ? activeIndex : 0
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

          // Логика обрезки текста
          const maxDescriptionLength = 120; // Примерное максимальное количество символов для 2х строк
          let displayDescription = content.description;
          if (
            displayDescription &&
            displayDescription.length > maxDescriptionLength
          ) {
            // Обрезаем текст до maxDescriptionLength, а затем до последнего пробела,
            // чтобы не обрезать слово посредине
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
              onClick={() => {
                onSlideOrButtonDetailClick(index, {} as React.MouseEvent);
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
                        // Указываем тип CategorySlug
                        const categoryColor = getCategoryColor(catSlug); // <-- ПОЛУЧАЕМ ЦВЕТ КАТЕГОРИИ
                        return (
                          <Chip
                            key={catSlug}
                            label={t(`categories.${catSlug}`)}
                            size="small"
                            variant="filled"
                            sx={{
                              height: 18,
                              fontSize: '0.75rem',
                              backgroundColor: categoryColor, // <-- УСТАНАВЛИВАЕМ ЦВЕТ ФОНА
                              color:
                                theme.palette.getContrastText(categoryColor), // <-- УСТАНАВЛИВАЕМ КОНТРАСТНЫЙ ЦВЕТ ТЕКСТА
                              '&:hover': {
                                backgroundColor: alpha(categoryColor, 0.8), // Делаем немного темнее при наведении
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
        })}
      </Swiper>
    </Box>
  );
};

export default React.memo(LandmarkSwiper);
