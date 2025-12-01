import React from 'react';
import {
  Box,
  Select,
  MenuItem,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
} from '@mui/material';
import { useTranslation } from 'react-i18next';
import type { Landmark } from '../model/landmarkTypes';

interface LandmarkMenuProps {
  landmark: Landmark;
  selectedCategory: string;
  onCategoryChange: (category: string) => void;
  getLocalizedMenu: (landmark: Landmark) => any[];
  getMenuItems: (landmark: Landmark, categoryName: string) => any[];
}

export const LandmarkMenu: React.FC<LandmarkMenuProps> = ({
  landmark,
  selectedCategory,
  onCategoryChange,
  getLocalizedMenu,
  getMenuItems,
}) => {
  const { t } = useTranslation();
  const menu = getLocalizedMenu(landmark);

  if (!menu || menu.length === 0) {
    return null; // Не показываем меню, если его нет
  }

  // Если категория не выбрана, устанавливаем первую
  const activeCategory = selectedCategory || menu[0]?.categoryName || '';
  const items = getMenuItems(landmark, activeCategory);

  return (
    <Box sx={{ mt: 3, mb: 2 }}>
      <Select
        value={activeCategory}
        onChange={(e) => onCategoryChange(e.target.value)}
        sx={{ mb: 2, minWidth: '100%' }}
        size="small"
      >
        {menu.map((category) => (
          <MenuItem key={category.categoryName} value={category.categoryName}>
            {category.categoryName}
          </MenuItem>
        ))}
      </Select>

      <TableContainer component={Paper}>
        <Table size="small">
          <TableHead>
            <TableRow sx={{ fontSize: '0.75rem' }}>
              <TableCell sx={{ fontSize: '0.75rem' }}>{t('dish')}</TableCell>
              <TableCell sx={{ fontSize: '0.75rem' }}>
                {t('description')}
              </TableCell>
              <TableCell align="right" sx={{ fontSize: '0.75rem' }}>
                {t('price')}
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {items.map((item, idx) => (
              <TableRow key={idx}>
                <TableCell sx={{ fontSize: '0.75rem', fontWeight: 500 }}>
                  {item.name}
                </TableCell>
                <TableCell sx={{ fontSize: '0.75rem', color: '#666' }}>
                  {item.description || '-'}
                </TableCell>
                <TableCell
                  align="right"
                  sx={{ fontWeight: 600, fontSize: '0.75rem' }}
                >
                  {item.price}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};
