// src/components/header/FilterDrawer.tsx
import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  List,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

// Типизация для CategoryFilter (если она не экспортируется из самого CategoryFilter)
interface CategoryFilterProps {
  onSelectCategories: (selectedSlugs: string[]) => void;
  selectedCategorySlugs: string[];
}

interface FilterDrawerProps {
  open: boolean;
  onClose: () => void;
  onSelectCategories: (selectedSlugs: string[]) => void;
  selectedCategorySlugs: string[];
  // Проп для передачи самого компонента CategoryFilter, чтобы избежать циклической зависимости
  CategoryFilterComponent: React.ComponentType<CategoryFilterProps>;
}

const FilterDrawer: React.FC<FilterDrawerProps> = ({
  open,
  onClose,
  onSelectCategories,
  selectedCategorySlugs,
  CategoryFilterComponent: CategoryFilter, // Переименовываем пропс для использования как компонент
}) => {
  const { t } = useTranslation();

  return (
    <Drawer anchor="right" open={open} onClose={onClose}>
      <Box sx={{ width: 280 }} role="presentation">
        <List>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'center',
              p: 1,
            }}
          >
            <Typography variant="h6">{t('category')}</Typography>
            <IconButton onClick={onClose}>
              <CloseIcon />
            </IconButton>
          </Box>
          <Divider />
          <CategoryFilter
            onSelectCategories={onSelectCategories}
            selectedCategorySlugs={selectedCategorySlugs}
          />
        </List>
      </Box>
    </Drawer>
  );
};

export default FilterDrawer;
