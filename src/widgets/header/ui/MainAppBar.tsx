// src/components/header/MainAppBar.tsx
import React from 'react';
import { Toolbar, IconButton, Stack, Badge } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';

import LanguageSwitcher from '../../../features/language-switcher/ui/LanguageSwitcher';
import CategoryFilterButton from '../../../features/filter-landmarks/ui/CategoryFilterButton';
import LogoTitleLink from '../../../shared/ui/LogoTitleLink'; // Импортируем новый компонент

interface MainAppBarProps {
  logoSrc: string;
  onLogoClick: () => void;
  onOpenFilterDrawer: () => void;
  onOpenMainMenu: () => void;
  selectedCategorySlugs: string[];
}

const MainAppBar: React.FC<MainAppBarProps> = ({
  logoSrc,
  onLogoClick,
  onOpenFilterDrawer,
  onOpenMainMenu,
  selectedCategorySlugs,
}) => {
  return (
    <Toolbar disableGutters sx={{ minHeight: 'unset !important' }}>
      {/* Кнопка открытия главного меню */}

      <IconButton
        edge="start"
        color="inherit"
        aria-label="open main menu"
        onClick={onOpenMainMenu}
        sx={{ ml: 0, mr: 0, pl: 0 }}
      >
        <MenuIcon
          sx={{
            '@keyframes fadeInOut': {
              '0%, 100%': {
                opacity: 1,
              },
              '50%': {
                opacity: 0.2,
              },
            },
            animation: 'fadeInOut 2s ease-in-out 25',
          }}
        />
      </IconButton>

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
