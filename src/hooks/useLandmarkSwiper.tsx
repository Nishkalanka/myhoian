// src/hooks/useLandmarkSwiper.ts
import { useRef, useEffect, useCallback } from 'react';
import { type Landmark, type LandmarkContent } from '../data';
import { useSnackbarManager } from './useSnackbarManager';
// Удалены неиспользуемые импорты:
// import { useState } from "react"; // 'useState' is defined but never used
// import { getImageUrl } from "../utils/imageUtils"; // 'getImageUrl' is defined but never used
// import { getLocalizedContent as getLocalizedContentUtil } from "../utils/contentUtils"; // 'getLocalizedContent' is defined but never used

interface UseLandmarkSwiperProps {
  filteredLandmarks: Landmark[];
  activeIndex: number | null;
  setActiveIndex: React.Dispatch<React.SetStateAction<number | null>>;
  setHasUserInteracted: React.Dispatch<React.SetStateAction<boolean>>;
  hasInteractedWithMarkers: boolean;
  getImageUrl: (name: string) => string; // Хотя здесь не используется, он нужен для useLandmarkModal в HeroSection
  handleOpenModal: (landmark: Landmark) => void;
  getLocalizedContent: (landmark: Landmark) => LandmarkContent; // Это пропс, а не утилита
}

export const useLandmarkSwiper = ({
  filteredLandmarks,
  activeIndex,
  setActiveIndex,
  setHasUserInteracted,
  hasInteractedWithMarkers,
  // getImageUrl, // Если не используется здесь, можно закомментировать/удалить
  handleOpenModal,
  // getLocalizedContent, // Если не используется здесь, можно закомментировать/удалить
}: UseLandmarkSwiperProps) => {
  const swiperRef = useRef<any>(null);

  const { closeSnackbar } = useSnackbarManager();

  useEffect(() => {
    if (
      swiperRef.current &&
      activeIndex !== null &&
      swiperRef.current.activeIndex !== activeIndex
    ) {
      swiperRef.current.slideTo(activeIndex);
    }
  }, [activeIndex]);

  const onSwiperSlideChange = useCallback(
    (swiper: any) => {
      if (swiper.activeIndex !== activeIndex) {
        setActiveIndex(swiper.activeIndex);
      }
      if (!hasInteractedWithMarkers) {
        setHasUserInteracted(true);
      }
    },
    [
      activeIndex,
      setActiveIndex,
      hasInteractedWithMarkers,
      setHasUserInteracted,
    ]
  );

  const handleSlideOrButtonDetailClick = useCallback(
    (index: number, _event: React.MouseEvent) => {
      // 'event' теперь '_event'
      setActiveIndex(index);
      closeSnackbar();
      setHasUserInteracted(true);
      const landmark = filteredLandmarks[index];
      if (!landmark) {
        console.warn('Нажат слайд/кнопка с неверным индексом:', index);
        return;
      }
      handleOpenModal(landmark);
    },
    [
      handleOpenModal,
      filteredLandmarks,
      closeSnackbar,
      setActiveIndex,
      setHasUserInteracted,
    ]
  );

  return {
    swiperRef,
    onSwiperSlideChange,
    handleSlideOrButtonDetailClick,
  };
};
