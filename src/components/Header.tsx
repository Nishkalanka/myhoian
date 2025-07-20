// src/components/Header.tsx
import React, { useState, useCallback } from 'react';
import { Box, AppBar } from '@mui/material';

// Импортируем новые компоненты
import MainAppBar from './header/MainAppBar';
import MainMenuDrawer from './header/MainMenuDrawer';
import FilterDrawer from './header/FilterDrawer';
import WelcomeDialog from './header/WelcomeDialog';

// Переиспользуем существующие компоненты
import CategoryFilter from './CategoryFilter';
import logoSvg from '../assets/img/logo.svg';

interface HeaderProps {
  onSelectCategories: (selectedSlugs: string[]) => void;
  selectedCategorySlugs: string[];
  // Добавлены новые пропсы для управления видимостью маршрута
  toggleRouteVisibility: () => void;
  isRouteVisible: boolean;
}

// Загрузка изображений для диалога приветствия
const images = import.meta.glob('../assets/img/pictures/*', {
  eager: true,
  as: 'url',
});
const getImageUrl = (name: string) => images[`../assets/img/pictures/${name}`];
const dialogImage = getImageUrl('dragon.png');

// Константы для ссылок на социальные сети (если они используются только здесь)
const TELEGRAM_LINK = 'https://t.me/pashanishka';
const WHATSAPP_LINK = 'https://wa.me/84357923401';
const EMAIL_LINK = 'mailto:hatifnatts@gmail.com';

const Header: React.FC<HeaderProps> = ({
  onSelectCategories,
  selectedCategorySlugs,
  toggleRouteVisibility,
  isRouteVisible,
}) => {
  const [openWelcomeDialog, setOpenWelcomeDialog] = useState(false);
  const [filterDrawerOpen, setFilterDrawerOpen] = useState(false);
  const [mainMenuDrawerOpen, setMainMenuDrawerOpen] = useState(false);

  const handleLogoClick = useCallback(() => {
    setOpenWelcomeDialog(true);
  }, []);

  const handleCloseWelcomeDialog = useCallback(() => {
    setOpenWelcomeDialog(false);
  }, []);

  // ИЗМЕНЕНО: toggleDrawer теперь возвращает функцию, которая просто устанавливает состояние
  const toggleFilterDrawer = useCallback(
    (open: boolean) => () => {
      setFilterDrawerOpen(open);
    },
    []
  );

  // ИЗМЕНЕНО: toggleDrawer теперь возвращает функцию, которая просто устанавливает состояние
  const toggleMainMenuDrawer = useCallback(
    (open: boolean) => () => {
      setMainMenuDrawerOpen(open);
    },
    []
  );

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
        onOpenMainMenu={toggleMainMenuDrawer(true)} // ИЗМЕНЕНО: нет лишних ()
        onOpenFilterDrawer={toggleFilterDrawer(true)} // ИЗМЕНЕНО: нет лишних ()
        selectedCategorySlugs={selectedCategorySlugs}
      />

      {/* Выдвижное меню (левое) */}
      <MainMenuDrawer
        open={mainMenuDrawerOpen}
        onClose={toggleMainMenuDrawer(false)} // ИЗМЕНЕНО: нет лишних ()
        // Передаем функции для пунктов меню
        onToggleRouteVisibility={toggleRouteVisibility}
        isRouteVisible={isRouteVisible}
        onHomeClick={() => console.log('Home clicked in Header')} // Пример, можно убрать
        onAboutClick={() => console.log('About clicked')}
        onServicesClick={() => console.log('Services clicked')}
        onContactClick={() => console.log('Contact clicked')}
      />

      {/* Выдвижное меню (правое) для фильтров */}
      <FilterDrawer
        open={filterDrawerOpen}
        onClose={toggleFilterDrawer(false)} // ИЗМЕНЕНО: нет лишних ()
        onSelectCategories={onSelectCategories}
        selectedCategorySlugs={selectedCategorySlugs}
        CategoryFilterComponent={CategoryFilter} // Передаем сам компонент фильтра
      />

      {/* Диалог приветствия */}
      <WelcomeDialog
        open={openWelcomeDialog}
        onClose={handleCloseWelcomeDialog}
        dialogImage={dialogImage}
        telegramLink={TELEGRAM_LINK}
        whatsappLink={WHATSAPP_LINK}
        emailLink={EMAIL_LINK}
      />
    </AppBar>
  );
};

export default Header;
