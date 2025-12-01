// LandingPage.tsx

import React, { useState } from 'react';
import { Box, Container, Stack } from '@mui/material';
import { Helmet } from 'react-helmet-async';

// Импорты секций
import ModalContact from './components/ModalContact';
import SectionHero from './components/SectionHero';
import SectionFeatures from './components/SectionFeatures';
import SectionHighlights from './components/SectionHighlights';
import SectionGuide from './components/SectionGuide';
import SectionFAQ from './components/SectionFAQ';
import SectionContact from './components/SectionContact';

// Импорты ресурсов
import logoSvg from '../assets/img/logo.svg';
import heroBg from '../assets/img/tours/bg3.webp';
import heroBg2 from '../assets/img/tours/bg2.png';
import profilePicture from '../assets/img/tours/profile.png';
import JapanBr from '../assets/img/pictures/2.jpg';
import Canton from '../assets/img/pictures/14.jpg';
import Tanky from '../assets/img/pictures/9.jpg';
import Quan from '../assets/img/pictures/15.jpg';
import Quan2 from '../assets/img/pictures/16.jpg';
import Quan3 from '../assets/img/pictures/62.jpg';

import ogImage from '../assets/img/og-image.png';
import MenuIcon from '@mui/icons-material/Menu';

// ===== ТИПЫ =====
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

interface HeroContent {
  label: string;
  title: string;
  description: string;
  buttonText: string;
  titleSize?: { xs: string; sm: string; md: string };
}

// ===== КОНСТАНSTЫ С КОНТЕНТОМ =====

const heroContent: HeroContent = {
  label: 'Квест-экскурсия',
  title: 'Хойан в коробке',
  description:
    'Подарите родным не просто сувенир, а частичку настоящего Вьетнама!',
  buttonText: 'Напишите нам',
  titleSize: { xs: '2rem', sm: '2rem', md: '2rem' },
};

const features: Feature[] = [
  { name: '3 - 4 ч.', description: 'Время экскурсии', icon: MenuIcon },
  { name: '5 - 7 чел.', description: 'Размер группы', icon: MenuIcon },
  { name: 'Пеший', description: 'Формат экскурсии', icon: MenuIcon },
];

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
          Авторские экскурсии по Хойану 2025 | Туры на русском по Вьетнаму
        </title>
        <meta
          name="keywords"
          content="экскурсии по Хойану, туры Хойан на русском, авторская экскурсия Хойан, древние храмы Хойана, фэн-шуй архитектура, достопримечательности Хойана, гид Павел Хойан, бронирование туров"
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
          content="Авторские экскурсии по Хойану 2025 | Туры на русском с гидом-историком"
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
          content="Авторские экскурсии по Хойану 2025 на русском"
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
          backgroundImage: `url(${heroBg})`,
          backgroundPosition: 'center 180px',
          backgroundSize: 'contain, contain',
          backgroundRepeat: 'no-repeat, no-repeat',
          backgroundColor: '#19202A',
          pb: 8,
        }}
      >
        <Box sx={{ textAlign: 'center', pt: 2 }}>
          <img src={logoSvg} width={32} alt="Логотип" className="logo" />
        </Box>

        <SectionHero content={heroContent} handleOpen={handleOpen} />
        <SectionFeatures features={features} />
        <SectionHighlights products={products} />
        <SectionGuide profilePicture={profilePicture} handleOpen={handleOpen} />
        <SectionFAQ />
        <SectionContact />
      </Container>

      <ModalContact open={open} handleClose={handleClose} />
    </>
  );
};

export default LandingPage;
