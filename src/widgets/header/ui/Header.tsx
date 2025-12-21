import React, { useCallback } from 'react';
import { AppBar } from '@mui/material';
import { useNavigate } from 'react-router-dom';

// Импортируем наш хук
import { useToggle as useDrawerToggle } from '../../../shared/lib/hooks/useToggle';

// Импортируем хук для картинок
import { usePictureUrl } from '../../../shared/lib/usePictureUrl';

// Импортируем константы
import {
  TELEGRAM_LINK,
  WHATSAPP_LINK,
  EMAIL_LINK,
} from '../../../data/appConstants';

// Импортируем компоненты
import MainAppBar from './MainAppBar';
import MainMenuDrawer from './MainMenuDrawer';
import FilterDrawer from '../../../features/filter-landmarks/ui/FilterDrawer';
import WelcomeDialog from './WelcomeDialog';
import CategoryFilter from '../../../features/filter-landmarks/ui/CategoryFilter';
import logoSvg from '/src/assets/img/logo.svg';

interface HeaderProps {
  onSelectCategories: (selectedSlugs: string[]) => void;
  selectedCategorySlugs: string[];
  toggleRouteVisibility: () => void;
  isRouteVisible: boolean;
}

const Header: React.FC<HeaderProps> = ({
  onSelectCategories,
  selectedCategorySlugs,
  toggleRouteVisibility,
  isRouteVisible,
}) => {
  // Инициализируем хук для картинок
  const getImageUrl = usePictureUrl();
  // Получаем картинку дракона (fallback на пустую строку, если не найдена)
  const dialogImage = getImageUrl('dragon.png') || '';

  // 🔥 ДОБАВИЛИ useNavigate для переходов по меню
  const navigate = useNavigate();

  // Хук для приветственного диалога
  const {
    isOpen: isWelcomeDialogOpen,
    open: openWelcomeDialog,
    close: closeWelcomeDialog,
  } = useDrawerToggle(false);

  // Хук для фильтров
  const {
    isOpen: isFilterDrawerOpen,
    open: openFilterDrawer,
    close: closeFilterDrawer,
  } = useDrawerToggle(false);

  // Хук для главного меню
  const {
    isOpen: isMainMenuDrawerOpen,
    open: openMainMenuDrawer,
    close: closeMainMenuDrawer,
  } = useDrawerToggle(false);

  // Обработчик клика по логотипу
  const handleLogoClick = useCallback(() => {
    openWelcomeDialog();
  }, [openWelcomeDialog]);

  // 🔥 ФУНКЦИИ НАВИГАЦИИ ДЛЯ МЕНЮ
  const navigateToTour = useCallback(() => {
    navigate('/hoian-avtorskaya-ekskursiya');
  }, [navigate]);

  const navigateToQuest = useCallback(() => {
    navigate('/kvest-ekskursiya-hoian-v-korobke');
  }, [navigate]);

  return (
    <AppBar
      position="fixed"
      elevation={0}
      sx={{
        p: 1,
        m: 1,
        borderRadius: 2,
        flexShrink: 0,
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? theme.palette.background.default
            : theme.palette.background.paper,
        boxShadow: (theme) => theme.shadows[3],
        width: 'calc(100% - 16px)',
        boxSizing: 'border-box',
      }}
    >
      {/* Главная панель навигации */}
      <MainAppBar
        logoSrc={logoSvg}
        onLogoClick={handleLogoClick}
        onOpenMainMenu={openMainMenuDrawer}
        onOpenFilterDrawer={openFilterDrawer}
        selectedCategorySlugs={selectedCategorySlugs}
      />

      {/* Выдвижное меню (левое) */}
      <MainMenuDrawer
        open={isMainMenuDrawerOpen}
        onClose={closeMainMenuDrawer}
        navigateToTour={navigateToTour}
        navigateToQuest={navigateToQuest}
        onToggleRouteVisibility={toggleRouteVisibility}
        isRouteVisible={isRouteVisible}
      />

      {/* Выдвижное меню (правое) для фильтров */}
      <FilterDrawer
        open={isFilterDrawerOpen}
        onClose={closeFilterDrawer}
        onSelectCategories={onSelectCategories}
        selectedCategorySlugs={selectedCategorySlugs}
        CategoryFilterComponent={CategoryFilter}
      />

      <WelcomeDialog
        open={isWelcomeDialogOpen}
        onClose={closeWelcomeDialog}
        dialogImage={dialogImage}
        telegramLink={TELEGRAM_LINK}
        whatsappLink={WHATSAPP_LINK}
        emailLink={EMAIL_LINK}
      />
    </AppBar>
  );
};

export default Header;
