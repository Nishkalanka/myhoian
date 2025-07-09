import React, { useState } from 'react';
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  // Chip, // <-- УДАЛЯЕМ ИМПОРТ Chip, так как он больше не нужен здесь
  Box,
  useTheme,
} from '@mui/material';

import { useLanguage } from '../contexts/LanguageContext';

// Определяем тип для Category
interface Category {
  id: number;
  name: Record<string, string>; // Мультиязычное название
  slug: string;
}

// Определяем пропсы для компонента CategoryFilter
interface CategoryFilterProps {
  onSelectCategories: (selectedSlugs: string[]) => void;
  selectedCategorySlugs: string[]; // <-- НОВЫЙ ПРОПС: получаем выбранные категории из родителя
}

// Вспомогательная функция для получения названия категории на текущем языке (для отображения)
const getCategoryName = (category: Category, lang: string) => {
  return category.name[lang] || category.name['en'] || category.slug;
};

// --- ЖЕСТКО ЗАКОДИРОВАННЫЕ КАТЕГОРИИ ---
const hardcodedCategories: Category[] = [
  {
    id: 1,
    name: {
      en: 'Museums',
      ru: 'Музеи',
      es: 'Museos',
      fr: 'Musées',
      vn: 'Bảo tàng',
    },
    slug: 'museum',
  },
  {
    id: 2,
    name: {
      en: 'Food & Drinks',
      ru: 'Еда и Напитки',
      es: 'Comida y Bebidas',
      fr: 'Aliments et Boissons',
      vn: 'Ẩm thực & Đồ uống',
    },
    slug: 'food-drinks',
  },
  {
    id: 3,
    name: {
      en: 'Art / Galleries',
      ru: 'Искусство / Галереи',
      es: 'Arte / Galerías',
      fr: 'Art / Galeries',
      vn: 'Nghệ thuật / Phòng trưng bày',
    },
    slug: 'art-galleries',
  },
];

// -------------------------------------------------------------------------------------

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  onSelectCategories,
  selectedCategorySlugs, // <-- ПОЛУЧАЕМ ИЗ ПРОПСОВ
}) => {
  const theme = useTheme();
  const { currentLang } = useLanguage();

  const [categories] = useState<Category[]>(hardcodedCategories);
  // const [selectedCategorySlugs, setSelectedCategorySlugs] = useState<string[]>([]); // <-- УДАЛЯЕМ ЛОКАЛЬНОЕ СОСТОЯНИЕ

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const slug = event.target.name;
    const isChecked = event.target.checked;

    let newSelectedSlugs: string[];
    if (isChecked) {
      newSelectedSlugs = [...selectedCategorySlugs, slug];
    } else {
      newSelectedSlugs = selectedCategorySlugs.filter((s) => s !== slug);
    }
    // setSelectedCategorySlugs(newSelectedSlugs); // <-- УДАЛЯЕМ: не управляем локальным состоянием
    onSelectCategories(newSelectedSlugs); // <-- Отправляем новое состояние родителю
  };

  // handleDelete функция больше не нужна, так как чипы не отображаются в Drawer
  // const handleDelete = (slugToDelete: string) => (e: React.MouseEvent) => {
  //   e.stopPropagation();
  //   const newSelectedSlugs = selectedCategorySlugs.filter(
  //     (slug) => slug !== slugToDelete
  //   );
  //   setSelectedCategorySlugs(newSelectedSlugs);
  //   onSelectCategories(newSelectedSlugs);
  // };

  return (
    <Box sx={{ m: 1, width: 250 }}>
      {/* <-- УДАЛЯЕМ ВЕСЬ БЛОК ОТОБРАЖЕНИЯ ЧИПОВ ИЗ Drawer */}
      {/*
      {selectedCategorySlugs.length > 0 && (
        <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5, mb: 1 }}>
          {selectedCategorySlugs.map((slug) => {
            const category = categories.find((cat) => cat.slug === slug);
            if (category) {
              return (
                <Chip
                  key={slug}
                  label={getCategoryName(category, currentLang)}
                  onDelete={handleDelete(slug)}
                  sx={{
                    backgroundColor: theme.palette.primary.light,
                    color: theme.palette.primary.contrastText,
                    "& .MuiChip-deleteIcon": {
                      color: theme.palette.primary.contrastText,
                    },
                    "& .MuiChip-deleteIcon:hover": {
                      color: theme.palette.primary.dark,
                    },
                  }}
                />
              );
            }
            return null;
          })}
        </Box>
      )}
      */}

      <FormControl
        component="fieldset"
        variant="standard"
        sx={{ width: '100%' }}
      >
        <FormGroup>
          {categories.map((category) => (
            <FormControlLabel
              key={category.id}
              control={
                <Checkbox
                  checked={selectedCategorySlugs.includes(category.slug)} // <-- Используем пропс
                  onChange={handleCheckboxChange}
                  name={category.slug}
                />
              }
              label={getCategoryName(category, currentLang)}
            />
          ))}
        </FormGroup>
      </FormControl>
    </Box>
  );
};

export default CategoryFilter;
