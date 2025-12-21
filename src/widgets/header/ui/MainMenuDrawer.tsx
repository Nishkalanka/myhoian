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
  navigateToTour: () => void; // ← НОВЫЕ ПРОПСЫ
  navigateToQuest: () => void;
  onToggleRouteVisibility: () => void;
  isRouteVisible: boolean;
}

const MainMenuDrawer: React.FC<MainMenuDrawerProps> = ({
  open,
  onClose,
  navigateToTour, // ← НОВЫЕ ПРОПСЫ
  navigateToQuest,
  onToggleRouteVisibility,
  isRouteVisible,
}) => {
  const { t } = useTranslation();

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box sx={{ width: 250 }} role="presentation" onKeyDown={onClose}>
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
          {/* Главная (карта) + маршрут */}

          {/* Авторская экскурсия */}
          <MenuItem
            onClick={() => {
              navigateToTour(); // ← НОВЫЙ navigate
              onClose();
            }}
          >
            {t('menu.tour')} {/* Авторская экскурсия */}
          </MenuItem>

          {/* Квест */}
          <MenuItem
            onClick={() => {
              navigateToQuest(); // ← НОВЫЙ navigate
              onClose();
            }}
          >
            {t('menu.quest')} {/* Квест */}
          </MenuItem>
        </List>
      </Box>
    </Drawer>
  );
};

export default MainMenuDrawer;
