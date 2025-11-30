// LandingPage2.tsx (ФИНАЛЬНАЯ ВЕРСИЯ)

import React, { useState } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { Helmet } from 'react-helmet-async';

// ⬅️ ИМПОРТЫ СЕКЦИЙ
import ModalContact from './components/ModalContact';
import SectionHero from './components/SectionHero';
import SectionFeatures from './components/SectionFeatures';
import SectionHighlights from './components/SectionHighlights';
import SectionGuide from './components/SectionGuide';
import SectionFAQ from './components/SectionFAQ';
import Preloader from '../components/Preloader';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

// ⬅️ ИМПОРТЫ РЕСУРСОВ
import logoSvg from '../assets/img/logo.svg';
import heroBg from '../assets/img/tours/bg.png';
import heroBg2 from '../assets/img/tours/bg2.png';
import profilePicture from '../assets/img/tours/profile.png';
import JapanBr from '../assets/img/pictures/2.jpg';
import Canton from '../assets/img/pictures/14.jpg';
import Tanky from '../assets/img/pictures/9.jpg';
import Quan from '../assets/img/pictures/15.jpg';
import Quan2 from '../assets/img/pictures/16.jpg';
import Quan3 from '../assets/img/pictures/62.jpg';

// 🚨 НОВЫЙ ИМПОРТ ДЛЯ OG-IMAGE
import ogImage from '../assets/img/og-image.png';

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
    imageAlt: 'Японский мост в Хойане',
  },
  {
    id: 2,
    name: 'Фуцзянский зал собраний',
    color: 'Китайское наследство',
    imageSrc: Canton,
    imageAlt: 'Фуцзянский зал собраний',
  },
  {
    id: 3,
    name: 'Дом Тан Ки',
    color: 'Один из самых ярких образцов традиционной архитектуры в Хойане',
    imageSrc: Tanky,
    imageAlt: 'Дом Тан Ки',
  },
  {
    id: 4,
    name: 'Храм Куанг Конга',
    color: 'Наиболее значимое святилище построенное в 1653 году',
    imageSrc: Quan,
    imageAlt: 'Храм Куанг Конга',
  },
  {
    id: 5,
    name: 'Музеи',
    color: 'Посещение нескольких музеев Хойана',
    imageSrc: Quan2,
    imageAlt: 'Музеи',
  },
  {
    id: 6,
    name: 'Театр',
    color: 'Традиционное выступление вьетнамских артистов.',
    imageSrc: Quan3,
    imageAlt: 'Театр',
  },
];

const features: Feature[] = [
  {
    name: '3 - 4 ч.',
    description: 'Время экскурсии',
    icon: MenuIcon,
  },
  {
    name: '5 - 7 чел.',
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

  // --- ЛОГИКА ПРЕЛОАДЕРА ---
  const [isContentLoaded, setIsContentLoaded] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  React.useEffect(() => {
    const imagesToLoad = [
      heroBg,
      heroBg2,
      profilePicture,
      ...products.map((p) => p.imageSrc),
    ];

    let loadedCount = 0;
    const totalCount = imagesToLoad.length;

    if (totalCount === 0) {
      setIsContentLoaded(true);
      return;
    }

    const handleImageLoad = () => {
      loadedCount++;
      if (loadedCount === totalCount) {
        setIsContentLoaded(true);
      }
    };

    imagesToLoad.forEach((url) => {
      const img = new Image();
      img.src = url;
      img.onload = handleImageLoad;
      img.onerror = handleImageLoad;
    });

    // Safety timeout: force load after 3 seconds
    const safetyTimer = setTimeout(() => {
      if (loadedCount < totalCount) {
        console.warn('Preloader safety timeout triggered');
        setIsContentLoaded(true);
      }
    }, 3000);

    return () => clearTimeout(safetyTimer);
  }, []);

  React.useEffect(() => {
    if (isContentLoaded) {
      const timer = setTimeout(() => {
        setShowPreloader(false);

        // Remove the static preloader from index.html
        const globalPreloader = document.getElementById('global-preloader');
        if (globalPreloader) {
          globalPreloader.style.opacity = '0';
          globalPreloader.style.visibility = 'hidden';

          // Wait for transition to finish before removing
          setTimeout(() => {
            if (globalPreloader && globalPreloader.parentNode) {
              globalPreloader.parentNode.removeChild(globalPreloader);
            }
          }, 500);
        }
      }, 500);
      return () => clearTimeout(timer);
    }
  }, [isContentLoaded]);
  // --- КОНЕЦ ЛОГИКИ ПРЕЛОАДЕРА ---

  return (
    <>
      <Helmet>
        {/* ✅ Title: Оптимизирован для Google и кликов */}
        <title>
          Авторские экскурсии по Хойану 2025 | Туры на русском по Вьетнаму
        </title>

        {/* ✅ Keywords: Расширены (Яндекс любит точные фразы) */}
        <meta
          name="keywords"
          content="экскурсии по Хойану, туры Хойан на русском, авторская экскурсия Хойан, древние храмы Хойана, фэн-шуй архитектура, достопримечательности Хойана, гид Павел Хойан, бронирование туров"
        />

        {/* ✅ Description: Добавлена CTA (call-to-action) */}
        <meta
          name="description"
          content="Откройте настоящий Хойан: старинный храмы, конфуцианская философия, скрытые святыни, архитектура фэн-шуй. Авторские экскурсии на русском языке с историком Павлом. Индивидуальные и групповые туры. Забронируйте прямо сейчас!"
        />

        {/* ✅ Canonical URL */}
        <link
          rel="canonical"
          href="https://myhoian.app/hoian-avtorskaya-ekskursiya"
        />

        {/* ✅ Open Graph: Title с добавлением привлекательности */}
        <meta
          property="og:title"
          content="Авторские экскурсии по Хойану 2025 | Туры на русском с гидом-историком"
        />

        {/* ✅ Open Graph: Description с полной информацией */}
        <meta
          property="og:description"
          content="Глубокие экскурсии по Хойану: Пешие туры, лодки-корзины, кулинарные курсы, философия и история. Индивидуальные группы на русском языке. Забронируйте сейчас!"
        />

        {/* ✅ Open Graph: Type и URL */}
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://myhoian.app/hoian-avtorskaya-ekskursiya"
        />

        {/* ✅ Open Graph: Image (с подходящим размером 1200x630px) */}
        <meta property="og:image" content={`https://myhoian.app${ogImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Авторские экскурсии по Хойану с гидом Павлом"
        />

        {/* ✅ Twitter Card (для красивого отображения в Twitter/X) */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Авторские экскурсии по Хойану 2025 на русском"
        />
        <meta
          name="twitter:description"
          content="Откройте философию, историю и архитектуру Хойана с гидом-историком Павлом"
        />
        <meta name="twitter:image" content={`https://myhoian.app${ogImage}`} />

        {/* ✅ Author и контакт */}
        <meta name="author" content="Павел, автор лекций по Вьетнаму и гид" />
        <meta name="contact" content="https://t.me/pashanishka" />

        {/* ✅ Robots (для контроля индексации) */}
        <meta name="robots" content="index, follow, max-image-preview:large" />

        {/* ✅ Структурированные данные (Schema.org для Google) */}
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Авторские экскурсии по Хойану с Павлом',
            description:
              'Авторские экскурсии по Хойану на русском языке: история, философия, архитектура',
            url: 'https://myhoian.app/hoian-avtorskaya-ekskursiya',
            telephone: '+84357923401', // Замените на реальный номер
            priceRange: '$$',
            areaServed: 'VN',
            image: `https://myhoian.app${ogImage}`,
            author: {
              '@type': 'Person',
              name: 'Павел',
            },
          })}
        </script>
      </Helmet>

      {/* ⬅️ ПРЕЛОАДЕР */}
      <Preloader isLoading={showPreloader} />
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

          // 🚨 Fix FOUC: Hide content until preloader is done
          opacity: showPreloader ? 0 : 1,
          transition: 'opacity 0.8s ease-in-out',
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

        <Box sx={{ textAlign: 'center', pt: 6 }}>
          <Stack direction="row" sx={{ justifyContent: 'center' }} spacing={4}>
            <WhatsAppIcon />
            <InstagramIcon />
            <TelegramIcon />
          </Stack>
        </Box>
      </Container>

      {/* ⬅️ МОДАЛЬНОЕ ОКНО */}
      <ModalContact open={open} handleClose={handleClose} />
    </>
  );
};

export default LandingPage;
