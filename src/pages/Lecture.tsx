// src/pages/LandingPage2/LandingPage2.tsx

import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

// Импорты секций
import ModalContact from './sections/ModalContactLecture';
import SectionHero from './sections/SectionHeroLecture';
import SectionHighlights from './sections/SectionHighlightsLecture';
import SectionGuide from './sections/SectionGuideLecture';
import SectionContact from './sections/SectionContact';

// ✅ ИМПОРТЫ ТОЛЬКО ДЛЯ SVG И METADATA
import logoSvg from '../assets/img/logo.svg';
import ogImage from '../assets/img/og-image.png';

// ===== ТИПЫ =====
interface Product {
  id: number;
  name: string;
  color: string;
  imageSrc: string; // ✅ ВСЕГДА STRING!
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
  label: 'лекция в дананге',
  title: 'Вьетнам',
  description: 'История | Традиция | Культура',
  buttonText: 'Записаться',
  titleSize: { xs: '4rem', sm: '2rem', md: '2rem' },
};

// ✅ ИСПОЛЬЗУЙ STRING ПУТИ ВМЕСТО ИМПОРТОВ
const products: Product[] = [
  {
    id: 1,
    name: 'История Вьетнама',
    color:
      'От древних времен, через тысячелетнее китайское влияние до французской колонии и войн XX века.',
    imageSrc: 'pictures/l_1.webp',
    imageAlt: 'Японский мост в Хойане',
  },
  {
    id: 2,
    name: 'Семейные традиции ',
    color:
      'Что для вьетнамцев значит семья, уважение к старшим и почитание традиций предков.',
    imageSrc: 'pictures/l_2.webp',
    imageAlt: 'Фуцзянский зал собраний',
  },
  {
    id: 3,
    name: 'Язык и жесты',
    color:
      'Вьетнамский язык: почему тональные звуки имеют огромное значение в общении.',
    imageSrc: 'pictures/l_3.webp',
    imageAlt: 'Дом Тан Ки',
  },
  {
    id: 4,
    name: 'Религия и культы',
    color:
      'Как буддизм, даосизм, конфуцианство и культ предков мирно сосуществуют.',
    imageSrc: 'pictures/l_4.webp',
    imageAlt: 'Храм Куанг Конга',
  },
];

// ===== КОМПОНЕНТ =====

const Lecture: React.FC = () => {
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

      {/* ✅ ИСПОЛЬЗУЙ STRING PATH И WebP С FALLBACK */}
      <Container
        maxWidth="xs"
        sx={{
          position: 'relative',
          pb: 8,
          // ✅ WebP с fallback через @supports
          backgroundImage: `url(/img/tours/bg4.webp), linear-gradient(180deg, #DD752E 0%, #DD752E 100%)`,
          backgroundPosition: 'center 0px, center',
          backgroundSize: 'contain, cover',
          backgroundRepeat: 'no-repeat, no-repeat',

          // ✅ Fallback для старых браузеров
          '@supports not (background-image: url(/img/tours/bg4.webp))': {
            backgroundImage: `url(/img/tours/bg4.webp)`,
          },
        }}
      >
        <Box sx={{ textAlign: 'center', pt: 2 }}>
          <img src={logoSvg} width={40} alt="Логотип" className="logo" />
        </Box>

        <SectionHero content={heroContent} handleOpen={handleOpen} />
        {/*<SectionFeatures features={features} />*/}
        <SectionHighlights products={products} />
        {/* ✅ STRING путь для profilePicture */}
        <SectionGuide handleOpen={handleOpen} />

        <SectionContact />
      </Container>

      <ModalContact open={open} handleClose={handleClose} />
    </>
  );
};

export default Lecture;
