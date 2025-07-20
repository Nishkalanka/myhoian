// src/components/header/MainAppBar.tsx
import React from 'react';
import {
  Toolbar,
  IconButton,
  Box,
  Typography,
  Stack,
  useTheme,
} from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { useTranslation } from 'react-i18next';

import LanguageSwitcher from './LanguageSwitcher'; // Новый компонент
import CategoryFilterButton from './CategoryFilterButton'; // Новый компонент

interface MainAppBarProps {
  logoSrc: string;
  onLogoClick: () => void;
  onOpenMainMenu: () => void;
  onOpenFilterDrawer: () => void;
  selectedCategorySlugs: string[];
}

const MainAppBar: React.FC<MainAppBarProps> = ({
  logoSrc,
  onLogoClick,
  onOpenMainMenu,
  onOpenFilterDrawer,
  selectedCategorySlugs,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

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
        <MenuIcon />
      </IconButton>

      {/* Логотип и заголовок */}
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          cursor: 'pointer',
          '&:hover': {
            opacity: 0.8,
          },
          flexShrink: 0,
          mr: 'auto',
        }}
        onClick={onLogoClick}
      >
        <img
          src={logoSrc}
          alt="LOGO"
          style={{
            width: 'auto',
            height: '36px',
            display: 'block',
            marginRight: theme.spacing(1),
          }}
        />
        <Typography
          variant="body2"
          component="span"
          sx={{
            fontWeight: 600,
            whiteSpace: 'nowrap',
          }}
        >
          {t('logoTitle')}
        </Typography>
      </Box>

      {/* Выбор языка и кнопка фильтра */}
      <Stack
        direction="row"
        alignItems="center"
        spacing={1}
        sx={{ flexShrink: 0, ml: 'auto' }}
      >
        <LanguageSwitcher /> {/* Использование отдельного компонента */}
        <CategoryFilterButton
          onClick={onOpenFilterDrawer}
          selectedCategorySlugs={selectedCategorySlugs}
        />{' '}
        {/* Использование отдельного компонента */}
      </Stack>
    </Toolbar>
  );
};

export default MainAppBar;
