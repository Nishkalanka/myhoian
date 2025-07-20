// src/components/header/CategoryFilterButton.tsx
import React from 'react';
import { IconButton, Box, useTheme } from '@mui/material';
import FilterListIcon from '@mui/icons-material/FilterList';
import { useTranslation } from 'react-i18next';

interface CategoryFilterButtonProps {
  onClick: () => void;
  selectedCategorySlugs: string[];
}

const CategoryFilterButton: React.FC<CategoryFilterButtonProps> = ({
  onClick,
  selectedCategorySlugs,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <IconButton
      onClick={onClick}
      color="inherit"
      sx={{ ml: 1, position: 'relative' }}
      aria-label={t('category')}
    >
      <FilterListIcon />
      {selectedCategorySlugs.length > 0 && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            right: 0,
            backgroundColor: '#ffbf00',
            color: theme.palette.primary.contrastText,
            borderRadius: '50%',
            width: 18,
            height: 18,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            fontSize: '0.75rem',
            fontWeight: 'bold',
            zIndex: 1,
          }}
        >
          {selectedCategorySlugs.length}
        </Box>
      )}
    </IconButton>
  );
};

export default CategoryFilterButton;
