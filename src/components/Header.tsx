import React, { useCallback } from 'react';
import { AppBar } from '@mui/material';

// Импортируем наш новый пользовательский хук
import { useDrawerToggle } from '../hooks/useToggle';

// Импортируем константы
import { TELEGRAM_LINK, WHATSAPP_LINK, EMAIL_LINK } from '../data/appConstants';

// Импортируем компоненты (уже хорошо структурированы)
import MainAppBar from './header/MainAppBar';
import MainMenuDrawer from './header/MainMenuDrawer';
import FilterDrawer from './header/FilterDrawer';
import WelcomeDialog from './header/WelcomeDialog';
import CategoryFilter from './CategoryFilter';
import logoSvg from '../assets/img/logo.svg';

interface HeaderProps {
  onSelectCategories: (selectedSlugs: string[]) => void;
  selectedCategorySlugs: string[];
  toggleRouteVisibility: () => void;
  isRouteVisible: boolean;
}

const images = import.meta.glob('../assets/img/pictures/*', {
  eager: true,
  as: 'url',
});
const getImageUrl = (name: string) => images[`../assets/img/pictures/${name}`];
const dialogImage = getImageUrl('dragon.png');

const Header: React.FC<HeaderProps> = ({
  onSelectCategories,
  selectedCategorySlugs,
  toggleRouteVisibility,
  isRouteVisible,
}) => {
  const {
    isOpen: isWelcomeDialogOpen,
    openDrawer: openWelcomeDialog,
    closeDrawer: closeWelcomeDialog,
  } = useDrawerToggle(false);

  const {
    isOpen: isFilterDrawerOpen,
    openDrawer: openFilterDrawer,
    closeDrawer: closeFilterDrawer,
  } = useDrawerToggle(false);

  const {
    isOpen: isMainMenuDrawerOpen,
    openDrawer: openMainMenuDrawer,
    closeDrawer: closeMainMenuDrawer,
  } = useDrawerToggle(false);

  // Обработчик клика по логотипу
  const handleLogoClick = useCallback(() => {
    openWelcomeDialog();
  }, [openWelcomeDialog]);

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
        onOpenMainMenu={openMainMenuDrawer} // Прямой вызов функции
        onOpenFilterDrawer={openFilterDrawer} // Прямой вызов функции
        selectedCategorySlugs={selectedCategorySlugs}
      />

      {/* Выдвижное меню (левое) */}
      <MainMenuDrawer
        open={isMainMenuDrawerOpen}
        onClose={closeMainMenuDrawer} // Прямой вызов функции
        onToggleRouteVisibility={toggleRouteVisibility}
        isRouteVisible={isRouteVisible}
        onHomeClick={() => console.log('Home clicked')}
        onAboutClick={() => console.log('About clicked')}
        onServicesClick={() => console.log('Services clicked')}
        onContactClick={() => console.log('Contact clicked')}
      />

      {/* Выдвижное меню (правое) для фильтров */}
      <FilterDrawer
        open={isFilterDrawerOpen}
        onClose={closeFilterDrawer} // Прямой вызов функции
        onSelectCategories={onSelectCategories}
        selectedCategorySlugs={selectedCategorySlugs}
        CategoryFilterComponent={CategoryFilter}
      />

      {/* Диалог приветствия */}
      <WelcomeDialog
        open={isWelcomeDialogOpen}
        onClose={closeWelcomeDialog} // Прямой вызов функции
        dialogImage={dialogImage}
        telegramLink={TELEGRAM_LINK}
        whatsappLink={WHATSAPP_LINK}
        emailLink={EMAIL_LINK}
      />
    </AppBar>
  );
};

export default Header;
