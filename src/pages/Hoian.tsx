// src/pages/LandingPage/LandingPage.tsx

import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

// Импорты секций
import ModalContact from './sections/ModalContact';
import SectionHero from './sections/SectionHero';
import SectionFeatures from './sections/SectionFeatures';
import SectionHighlights from './sections/SectionHighlights';
import SectionGuide from './sections/SectionGuide';
import SectionFAQ from './sections/SectionFAQ';
import SectionContact from './sections/SectionContact';

// ✅ ИМПОРТЫ ИКОНОК
import logoSvg from '../assets/img/logo.svg';
import ogImage from '../assets/img/og-image.png';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import GroupsIcon from '@mui/icons-material/Groups';
import DirectionsWalkIcon from '@mui/icons-material/DirectionsWalk';

// ===== ТИПЫ =====
interface Feature {
  name: string;
  description: string;
  icon: React.ElementType; // ✅ React компонент
}

interface Product {
  id: number;
  name: string;
  color: string;
  imageSrc: string;
  imageAlt: string;
}

interface HeroContent {
  label: string;
  title: string;
  description: string;
  buttonText: string;
  titleSize?: { xs: string; sm: string; md: string };
}

// ===== КОНСТАНSTЫ С КОНТЕНТОМ =====

const heroContent: HeroContent = {
  label: 'Авторская экскурсия-лекция',
  title: 'Хойан',
  description:
    'Жемчужина Юго-Восточной Азии. Старинный торговый порт, бережно хранящий наследие веков.',
  buttonText: 'Напишите нам',
  titleSize: { xs: '3rem', sm: '3rem', md: '3rem' },
};

// ✅ РАЗНЫЕ ИКОНКИ ДЛЯ КАЖДОЙ ФИЧИ
const features: Feature[] = [
  {
    name: '4 - 5 ч.',
    description: 'Время экскурсии',
    icon: AccessTimeIcon, // ⏱️ Часы
  },
  {
    name: '5 - 7 чел.',
    description: 'Размер группы',
    icon: GroupsIcon, // 👥 Люди
  },
  {
    name: 'Пеший',
    description: 'Формат экскурсии',
    icon: DirectionsWalkIcon, // 🚶 Ходьба
  },
];

const products: Product[] = [
  {
    id: 1,
    name: 'Японский мост',
    color: 'Главный символ Хойана. Построен в 1593 году.',
    imageSrc: 'pictures/2.jpg',
    imageAlt: 'Японский мост в Хойане',
  },
  {
    id: 2,
    name: 'Фуцзянский зал собраний',
    color: 'Китайское наследство',
    imageSrc: 'pictures/14.jpg',
    imageAlt: 'Фуцзянский зал собраний',
  },
  {
    id: 3,
    name: 'Дом Тан Ки',
    color: 'Один из самых ярких образцов традиционной архитектуры в Хойане',
    imageSrc: 'pictures/9.jpg',
    imageAlt: 'Дом Тан Ки',
  },
  {
    id: 4,
    name: 'Храм Куанг Конга',
    color: 'Наиболее значимое святилище построенное в 1653 году',
    imageSrc: 'pictures/15.jpg',
    imageAlt: 'Храм Куанг Конга',
  },
  {
    id: 5,
    name: 'Музеи',
    color: 'Посещение нескольких музеев Хойана',
    imageSrc: 'pictures/16.jpg',
    imageAlt: 'Музеи',
  },
  {
    id: 6,
    name: 'Театр',
    color: 'Традиционное выступление вьетнамских артистов.',
    imageSrc: 'pictures/62.jpg',
    imageAlt: 'Театр',
  },
];

// ===== КОМПОНЕНТ =====

const LandingPage: React.FC = () => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  React.useEffect(() => {
    const preloader = document.getElementById('initial-preloader');
    if (preloader) {
      document.body.classList.add('loaded');
      setTimeout(() => {
        preloader.remove();
      }, 600);
    }
  }, []);

  return (
    <>
      <Helmet>
        <title>
          Авторские экскурсии по Хойану 2026 | Туры на русском по Вьетнаму
        </title>
        <meta
          name="keywords"
          content="Экскурсии по Хойану, туры Хойан на русском, авторская экскурсия Хойан, древние храмы Хойана, фэн-шуй архитектура, достопримечательности Хойана, Хойан, бронирование туров"
        />
        <meta
          name="description"
          content="Откройте настоящий Хойан: старинный храмы, конфуцианская философия, скрытые святыни, архитектура фэн-шуй. Авторские экскурсии на русском языке с историком Павлом. Индивидуальные и групповые туры. Забронируйте прямо сейчас!"
        />
        <link
          rel="canonical"
          href="https://myhoian.app/hoian-avtorskaya-ekskursiya"
        />
        <meta
          property="og:title"
          content="Авторские экскурсии по Хойану 2026 | Туры на русском с гидом-историком"
        />
        <meta
          property="og:description"
          content="Глубокие экскурсии по Хойану: Пешие туры, лодки-корзины, кулинарные курсы, философия и история. Индивидуальные группы на русском языке. Забронируйте сейчас!"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://myhoian.app/hoian-avtorskaya-ekskursiya"
        />
        <meta property="og:image" content={`https://myhoian.app${ogImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Авторские экскурсии по Хойану с гидом Павлом"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Авторские экскурсии по Хойану 2026 на русском"
        />
        <meta
          name="twitter:description"
          content="Откройте философию, историю и архитектуру Хойана с гидом-историком Павлом"
        />
        <meta name="twitter:image" content={`https://myhoian.app${ogImage}`} />
        <meta name="author" content="Павел, автор лекций по Вьетнаму и гид" />
        <meta name="contact" content="https://t.me/pashanishka" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Авторские экскурсии по Хойану с Павлом',
            description:
              'Авторские экскурсии по Хойану на русском языке: история, философия, архитектура',
            url: 'https://myhoian.app/hoian-avtorskaya-ekskursiya',
            telephone: '+84357923401',
            priceRange: '$$',
            areaServed: 'VN',
            image: `https://myhoian.app${ogImage}`,
            author: { '@type': 'Person', name: 'Павел' },
          })}
        </script>
      </Helmet>

      <Container
        maxWidth="xs"
        sx={{
          position: 'relative',
          backgroundColor: '#040c19',
          pb: 8,
          backgroundImage: `
            url(/img/tours/bg.webp),
            url(/img/tours/bg2.webp)
          `,
          backgroundPosition: 'top center, bottom center',
          backgroundSize: 'contain, contain',
          backgroundRepeat: 'no-repeat, no-repeat',
          '@supports not (background-image: url(/img/tours/bg.webp))': {
            backgroundImage: `
              url(/img/tours/bg.png),
              url(/img/tours/bg2.png)
            `,
          },
        }}
      >
        <Box sx={{ textAlign: 'center', pt: 2 }}>
          <img src={logoSvg} width={32} alt="Логотип" className="logo" />
        </Box>

        <SectionHero content={heroContent} handleOpen={handleOpen} />
        <SectionFeatures features={features} />
        <SectionHighlights products={products} />
        <SectionGuide
          profilePicture="tours/profile.png"
          handleOpen={handleOpen}
        />
        <SectionFAQ />
        <SectionContact />
      </Container>

      <ModalContact open={open} handleClose={handleClose} />
    </>
  );
};

export default LandingPage;
