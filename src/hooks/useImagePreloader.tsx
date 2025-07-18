// src/hooks/useImagePreloader.ts
import { useState, useEffect } from 'react';
import { fullDescriptionImageMap } from '../utils/imagePaths';
import { type Landmark } from '../data';

// Utility to get image URL from glob import
const getImageUrl = (images: Record<string, string>) => (name: string) =>
  images[`../assets/img/pictures/${name}`];

interface UseImagePreloaderProps {
  filteredLandmarks: Landmark[];
  snackbarImages: Record<string, string>;
  allImages: Record<string, string>; // Pass the result of import.meta.glob
}

export const useImagePreloader = ({
  filteredLandmarks,
  snackbarImages,
  allImages,
}: UseImagePreloaderProps) => {
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const getLocalImageUrl = getImageUrl(allImages);

  useEffect(() => {
    const imagesToLoad = [
      snackbarImages.welcome,
      ...Object.values(fullDescriptionImageMap).filter(Boolean),
      ...filteredLandmarks
        .map((landmark) => getLocalImageUrl(landmark.imageUrl))
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
        handleImageLoad(); // Count empty URLs as loaded
      }
    });

    return () => {
      // Cleanup function if needed, though for image preloading it's often less critical
      // unless you have dynamic image sets that change frequently.
    };
  }, [filteredLandmarks, snackbarImages, getLocalImageUrl]);

  return { isContentLoaded };
};
