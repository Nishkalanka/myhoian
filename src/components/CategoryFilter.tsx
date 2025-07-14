import React, { useState } from 'react';
import {
  FormControl,
  FormGroup,
  FormControlLabel,
  Checkbox,
  Box,
  useTheme,
} from '@mui/material';

import { useLanguage } from '../contexts/LanguageContext';

// --- ИМПОРТИРУЕМ КАТЕГОРИИ ИЗ НОВОГО ФАЙЛА ---
import { ALL_CATEGORIES } from '../data/landmarks/categoryConstants'; // <-- Изменено
// ---------------------------------------------

// Определяем тип для Category (можно было бы импортировать из categoryConstants.ts)
// Но так как у вас уже есть определение, пока оставим его здесь для ясности.
// В идеале, можно импортировать интерфейс из того же файла:
// import { type Category } from "../data/landmarks/categoryConstants";
interface Category {
  id: number;
  name: Record<string, string>; // Мультиязычное название
  slug: string;
}

// Определяем пропсы для компонента CategoryFilter
interface CategoryFilterProps {
  onSelectCategories: (selectedSlugs: string[]) => void;
  selectedCategorySlugs: string[];
}

// Вспомогательная функция для получения названия категории на текущем языке (для отображения)
const getCategoryName = (category: Category, lang: string) => {
  return category.name[lang] || category.name['en'] || category.slug;
};

// -------------------------------------------------------------------------------------

const CategoryFilter: React.FC<CategoryFilterProps> = ({
  onSelectCategories,
  selectedCategorySlugs,
}) => {
  const theme = useTheme();
  const { currentLang } = useLanguage();

  // --- ИСПОЛЬЗУЕМ ИМПОРТИРОВАННЫЕ КАТЕГОРИИ ВМЕСТО hardcodedCategories ---
  const [categories] = useState<Category[]>(ALL_CATEGORIES); // <-- Изменено
  // --------------------------------------------------------------------

  const handleCheckboxChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const slug = event.target.name;
    const isChecked = event.target.checked;

    let newSelectedSlugs: string[];
    if (isChecked) {
      newSelectedSlugs = [...selectedCategorySlugs, slug];
    } else {
      newSelectedSlugs = selectedCategorySlugs.filter((s) => s !== slug);
    }
    onSelectCategories(newSelectedSlugs);
  };

  return (
    <Box sx={{ m: 1, width: 250 }}>
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
                  checked={selectedCategorySlugs.includes(category.slug)}
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
