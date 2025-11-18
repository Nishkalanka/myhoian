// LandingPage.tsx (ФИНАЛЬНАЯ ВЕРСИЯ)

import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

// ⬅️ ИМПОРТЫ СЕКЦИЙ
import ModalContact from './components/ModalContact';
import SectionHero from './components/SectionHero';
import SectionFeatures from './components/SectionFeatures';
import SectionHighlights from './components/SectionHighlights';
import SectionGuide from './components/SectionGuide';
import SectionFAQ from './components/SectionFAQ';

// ⬅️ ИМПОРТЫ РЕСУРСОВ
import logoSvg from '../assets/img/logo.svg';
import heroBg from '../assets/img/tours/bg.png';
import heroBg2 from '../assets/img/tours/bg2.png';
import profilePicture from '../assets/img/tours/profile.png';
import JapanBr from '../assets/img/pictures/2.jpg';
import Canton from '../assets/img/pictures/14.jpg';
import Tanky from '../assets/img/pictures/9.jpg';
import Quan from '../assets/img/pictures/15.jpg';

import MenuIcon from '@mui/icons-material/Menu'; // Нужен для данных features

// --- ТИПЫ И ДАННЫЕ (ОСТАВЛЯЕМ ПОКА ЗДЕСЬ) ---
interface Feature {
  name: string;
  description: string;
  icon: typeof MenuIcon;
}

interface Product {
  id: number;
  name: string;
  color: string;
  imageSrc: string;
  imageAlt: string;
}

const products: Product[] = [
  {
    id: 1,
    name: 'Японский мост',
    color: 'Главный символ Хойана. Построен в 1593 году.',
    imageSrc: JapanBr,
    imageAlt: 'Leather-bound daily planner with gold embossing.',
  },
  {
    id: 2,
    name: 'Фуцзянский зал собраний',
    color: 'Очень хороший зал',
    imageSrc: Canton,
    imageAlt: 'Smart notebook with digital pen and app connectivity.',
  },
  {
    id: 3,
    name: 'Дом Тан Ки',
    color: 'Один из самых ярких образцов традиционной архитектуры.',
    imageSrc: Tanky,
    imageAlt: 'Recycled paper weekly planner with plant-based ink.',
  },
  {
    id: 4,
    name: 'Музей',
    color: 'Очень хороший музей с интересными экспонатами.',
    imageSrc: Quan,
    imageAlt: 'Rose gold fountain pen set with ink cartridges.',
  },
];

const features: Feature[] = [
  {
    name: '3 - 5 ч.',
    description: 'Время экскурсии',
    icon: MenuIcon,
  },
  {
    name: '1 - 5 чел.',
    description: 'Размер группы',
    icon: MenuIcon,
  },
  {
    name: 'Пеший',
    description: 'Формат экскурсии',
    icon: MenuIcon,
  },
];

const LandingPage: React.FC = () => {
  // ⬅️ ЛОГИКА СОСТОЯНИЯ ОСТАЕТСЯ В РОДИТЕЛЬСКОМ КОМПОНЕНТЕ
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  return (
    <>
      <Helmet>
        <title>
          Туры и Экскурсии в Хойане 2024–2025: Авторские программы, Лучшие Цены!
        </title>
        <meta
          name="description"
          content="Индивидуальные и групповые экскурсии по Хойану..."
        />
        <link rel="canonical" href="https://myhoian.app/hoian-tours" />
        {/* ... остальные мета-теги ... */}
      </Helmet>

      <Container
        maxWidth="xs"
        sx={{
          // ⬅️ 1. ПЕРЕЧИСЛЯЕМ ДВА ИЗОБРАЖЕНИЯ ЧЕРЕЗ ЗАПЯТУЮ
          backgroundImage: `url(${heroBg}), url(${heroBg2})`,

          // ⬅️ 2. ПОЗИЦИЯ ДЛЯ КАЖДОГО ИЗОБРАЖЕНИЯ ЧЕРЕЗ ЗАПЯТУЮ
          backgroundPosition: 'top center, bottom center',

          // ⬅️ 3. РАЗМЕР ДЛЯ КАЖДОГО ИЗОБРАЖЕНИЯ ЧЕРЕЗ ЗАПЯТУЮ
          backgroundSize: 'contain, contain', // 'auto' подойдет для heroBg2, если он не должен быть привязан к размеру контейнера

          // ⬅️ 4. ПОВТОР ДЛЯ КАЖДОГО ИЗОБРАЖЕНИЯ ЧЕРЕЗ ЗАПЯТУЮ
          backgroundRepeat: 'no-repeat, no-repeat',

          backgroundColor: '#040c19',
          pb: 8,
        }}
      >
        {/* Логотип */}
        <Box sx={{ textAlign: 'center', pt: 2 }}>
          <img src={logoSvg} width={32} alt="Логотип" className="logo" />
        </Box>

        {/* ⬅️ ИСПОЛЬЗОВАНИЕ ВЫНЕСЕННЫХ КОМПОНЕНТОВ */}
        <SectionHero handleOpen={handleOpen} />
        <SectionFeatures features={features} />
        <SectionHighlights products={products} />
        <SectionGuide profilePicture={profilePicture} handleOpen={handleOpen} />
        <SectionFAQ />
      </Container>

      {/* ⬅️ МОДАЛЬНОЕ ОКНО */}
      <ModalContact open={open} handleClose={handleClose} />
    </>
  );
};

export default LandingPage;
