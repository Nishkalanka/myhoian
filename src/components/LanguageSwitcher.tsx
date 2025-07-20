// src/components/LanguageSwitcher.tsx

import React from 'react';
import { FormControl, Select, MenuItem, InputLabel } from '@mui/material';
import ReactCountryFlag from 'react-country-flag';
import { useTranslation } from 'react-i18next';
import { useLanguage } from '../contexts/LanguageContext'; // Путь остается прежним, так как LanguageSwitcher находится на том же уровне, что и contexts

export const LanguageSwitcher: React.FC = () => {
  const { i18n } = useTranslation();
  const { setLang } = useLanguage();

  const changeLanguage = (event: any) => {
    const selectedLang = event.target.value as string;
    setLang(selectedLang);
  };

  return (
    <FormControl variant="outlined" sx={{ minWidth: 80 }}>
      {/* InputLabel для Material-UI Select: обычно используется для плавающего лейбла.
          Если вам не нужен видимый лейбл, этот компонент можно удалить или сделать пустым. */}
      <InputLabel id="language-select-label"></InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={i18n.language}
        onChange={changeLanguage}
        size="small"
        sx={{
          '& .MuiSelect-select': {
            display: 'flex',
            alignItems: 'center',
            gap: 1,
          },
        }}
      >
        <MenuItem value="en">
          <ReactCountryFlag
            countryCode="US"
            svg
            style={{ width: '1.5em', height: '1.5em', marginRight: '8px' }}
            title="US"
          />{' '}
        </MenuItem>
        <MenuItem value="fr">
          <ReactCountryFlag
            countryCode="FR"
            svg
            style={{ width: '1.5em', height: '1.5em', marginRight: '8px' }}
            title="FR"
          />{' '}
        </MenuItem>
        <MenuItem value="es">
          <ReactCountryFlag
            countryCode="ES"
            svg
            style={{ width: '1.5em', height: '1.5em', marginRight: '8px' }}
            title="ES"
          />{' '}
        </MenuItem>
        <MenuItem value="ru">
          <ReactCountryFlag
            countryCode="RU"
            svg
            style={{ width: '1.5em', height: '1.5em', marginRight: '8px' }}
            title="RU"
          />{' '}
        </MenuItem>
        <MenuItem value="vn">
          <ReactCountryFlag
            countryCode="VN"
            svg
            style={{ width: '1.5em', height: '1.5em', marginRight: '8px' }}
            title="VN"
          />{' '}
        </MenuItem>
      </Select>
    </FormControl>
  );
};
