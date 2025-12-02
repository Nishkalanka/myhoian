// src/components/header/MainAppBar.tsx
import React from 'react';
import {
  Toolbar,
  //IconButton,
  Stack,
  // useTheme, // Больше не нужен здесь, так как LogoTitleLink его инкапсулирует
} from '@mui/material';
//import MenuIcon from '@mui/icons-material/Menu';
// import { useTranslation } from 'react-i18next'; // Больше не нужен здесь, т.к. t('logoTitle') перемещен

import LanguageSwitcher from '../../../features/language-switcher/ui/LanguageSwitcher';
import CategoryFilterButton from '../../../features/filter-landmarks/ui/CategoryFilterButton';
import LogoTitleLink from '../../../shared/ui/LogoTitleLink'; // Импортируем новый компонент

interface MainAppBarProps {
  logoSrc: string;
  onLogoClick: () => void;
  onOpenFilterDrawer: () => void;
  selectedCategorySlugs: string[];
}

const MainAppBar: React.FC<MainAppBarProps> = ({
  logoSrc,
  onLogoClick,
  onOpenFilterDrawer,
  selectedCategorySlugs,
}) => {
  // const { t } = useTranslation(); // Удалено
  // const theme = useTheme(); // Удалено

  return (
    <Toolbar disableGutters sx={{ minHeight: 'unset !important' }}>
      {/* Кнопка открытия главного меню 
      <IconButton
        edge="start"
        color="inherit"
        aria-label="open main menu"
        onClick={onOpenMainMenu}
        sx={{ ml: 0, mr: 0, pl: 0 }}
      >
        <MenuIcon />
      </IconButton>
*/}
      {/* Логотип и заголовок - теперь это отдельный компонент */}
      <LogoTitleLink logoSrc={logoSrc} onClick={onLogoClick} />

      {/* Выбор языка и кнопка фильтра */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ flexShrink: 0, ml: 'auto' }}
      >
        <LanguageSwitcher />
        <CategoryFilterButton
          onClick={onOpenFilterDrawer}
          selectedCategorySlugs={selectedCategorySlugs}
        />
      </Stack>
    </Toolbar>
  );
};

export default MainAppBar;
