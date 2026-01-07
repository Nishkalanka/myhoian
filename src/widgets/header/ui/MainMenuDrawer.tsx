// src/components/header/MainMenuDrawer.tsx
import React from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  List,
  Chip,
  MenuItem,
  Paper,
  Button,
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
        {/* предложение 
        <Divider sx={{ mt: 2 }} textAlign="center">
          <Chip
            label="Новогоднее предложение!"
            sx={{ backgroundColor: '#FFBF00', color: '#040c19' }}
            size="small"
          />
        </Divider>
        <Typography
          variant="caption"
          sx={{ mt: 2, display: 'block' }}
          textAlign="center"
        >
          Супер цена!
        </Typography>
        <Typography variant="h6" sx={{ mt: 0 }} textAlign="center">
          100 000 VND
        </Typography>
        <Box sx={{ mx: 2, position: 'relative' }}>
          <Paper
            elevation={0}
            sx={{
              border: 'none',
              backgroundImage: `url(/img/tours/bg.webp)`,
              backgroundPosition: 'center 70px',
              backgroundSize: 'cover',
              backgroundRepeat: 'no-repeat',
              backgroundColor: '#040c19',
              pt: 4,
              borderRadius: 2,
              height: '340px',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              textAlign: 'center',
              justifyContent: 'flex-start',
              overflow: 'break-word',
              gap: 1,
              mb: 0,
              mt: 1,
            }}
          >
            <Typography
              variant="body2"
              sx={{
                textTransform: 'uppercase',
              }}
            >
              27 декабря 8:30
            </Typography>

            <Typography
              variant="h3"
              sx={{
                fontWeight: 900,
                textTransform: 'uppercase',
              }}
            >
              Хойан
            </Typography>
            <Typography variant="caption" sx={{ width: '70%', mb: 1 }}>
              Историческая <br></br>экскурсия-лекция
            </Typography>
            <Button
              component="a"
              href="/hoian-avtorskaya-ekskursiya"
              size="small"
              variant="contained"
            >
              Подробнее
            </Button>
          </Paper>
        </Box>*/}
      </Box>
    </Drawer>
  );
};

export default MainMenuDrawer;
