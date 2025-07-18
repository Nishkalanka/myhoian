// src/hooks/useFilteredLandmarks.ts
import { useMemo } from 'react';
import { hoiAnLandmarks, type CategorySlug } from '../data'; // Зависимость от данных и типов

interface UseFilteredLandmarksProps {
  selectedCategorySlugs: string[];
}

export const useFilteredLandmarks = ({
  selectedCategorySlugs,
}: UseFilteredLandmarksProps) => {
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
  }, [selectedCategorySlugs]);

  return { filteredLandmarks };
};
