// src/components/header/MainMenuDrawer.tsx
import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  List,
  MenuItem,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useTranslation } from 'react-i18next';

interface MainMenuDrawerProps {
  open: boolean;
  onClose: () => void;
  onHomeClick: () => void;
  onAboutClick: () => void;
  onServicesClick: () => void;
  onContactClick: () => void;
  // Новые пропсы для Home (маршрут)
  onToggleRouteVisibility: () => void;
  isRouteVisible: boolean;
}

const MainMenuDrawer: React.FC<MainMenuDrawerProps> = ({
  open,
  onClose,
  onHomeClick,
  onAboutClick,
  onServicesClick,
  onContactClick,
  onToggleRouteVisibility,
  isRouteVisible,
}) => {
  const { t } = useTranslation();

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{ width: 250 }}
        role="presentation"
        // onClick={onClose} // Это может быть излишним, если вы хотите закрывать только по крестику или при клике вне Drawer'а
        onKeyDown={onClose}
      >
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
          }}
        >
          <Typography variant="h6">{t('menu.title')}</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Box>
        <Divider />
        <List>
          {/* Пункт "Home" теперь также переключает видимость маршрута */}
          <MenuItem
            onClick={() => {
              onHomeClick(); // Вызов оригинальной функции Home (если нужна)
              onToggleRouteVisibility(); // Переключение видимости маршрута
              onClose(); // Закрываем Drawer после выбора пункта меню
            }}
          >
            {t('menu.home')} (
            {isRouteVisible ? t('menu.hideRoute') : t('menu.showRoute')})
          </MenuItem>
          <MenuItem
            onClick={() => {
              onAboutClick();
              onClose();
            }}
          >
            {t('menu.about')}
          </MenuItem>
          <MenuItem
            onClick={() => {
              onServicesClick();
              onClose();
            }}
          >
            {t('menu.services')}
          </MenuItem>
          <MenuItem
            onClick={() => {
              onContactClick();
              onClose();
            }}
          >
            {t('menu.contact')}
          </MenuItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default MainMenuDrawer;
