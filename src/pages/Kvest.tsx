// src/pages/LandingPage2/LandingPage2.tsx

import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

// Импорты секций
import ModalContact from './sections/ModalContact';
import SectionHero from './sections/SectionHeroKvest';
import SectionFeatures from './sections/SectionFeatures';
import SectionHighlights from './sections/SectionHighlightsKvest';
import SectionGuide from './sections/SectionGuides';
import SectionGuideKvest from './sections/SectionGuideKvest';
import SectionFAQ from './sections/SectionFAQKvest';

// ✅ ИМПОРТЫ ТОЛЬКО ДЛЯ SVG И METADATA
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
  label: 'Квест-экскурсия',
  title: 'Хойан в коробке',
  description:
    'Подарите родным не просто сувенир, а частичку настоящего Вьетнама!',
  buttonText: 'Напишите нам',
  titleSize: { xs: '2rem', sm: '2rem', md: '2rem' },
};

const features: Feature[] = [
  {
    name: '3 - 4 ч.',
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

// ✅ ИСПОЛЬЗУЙ STRING ПУТИ ВМЕСТО ИМПОРТОВ
const products: Product[] = [
  {
    id: 1,
    name: 'Рынок и скрытые смыслы вещей',
    color:
      'Историческая экскурсия на рынке Хойана. Показываем, что за вещь перед вами и какую историю и смысл она имеет во вьетнамской культуре. ',
    imageSrc: 'pictures/frame_hoi.webp',
    imageAlt: 'Японский мост в Хойане',
  },
  {
    id: 2,
    name: 'Советы по ценам и ведению торгов',
    color:
      'Проводим в проверенные места и помогаем не потеряться в выборе. Показываем, где цены завышены и как покупать без переплаты на вьетнамском рынке.',
    imageSrc: 'pictures/dengi.webp',
    imageAlt: 'Фуцзянский зал собраний',
  },
  {
    id: 3,
    name: 'Персональные рекомендации',
    color:
      'Строим маршрут покупок строго под ваши личные требования. Советуем и находим именно то, что нужно вам, учитывая ваши вкусы и пожелания.',
    imageSrc: 'pictures/frame_45.webp',
    imageAlt: 'Дом Тан Ки',
  },
  {
    id: 4,
    name: 'Доставка ваших подарков',
    color:
      'Собираем покупки в аккуратную и красивую упаковку, готовую к поездке. Доставка посылки в любую точку мира.',
    imageSrc: 'pictures/present.webp',
    imageAlt: 'Храм Куанг Конга',
  },
];

// ===== КОМПОНЕНТ =====

const Kvest: React.FC = () => {
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
          Квест-экскурсия "Хойан в коробке" 2025 - 2026 | Шопинг-тур с гидом
        </title>
        <meta
          name="keywords"
          content="квест хойан, шопинг хойан, сувениры вьетнам, гид по рынку хойан, подарки из вьетнама, хойан в коробке, экскурсия рынок хойан, как торговаться во вьетнаме"
        />
        <meta
          name="description"
          content="Увлекательный квест-тур по рынкам Хойана. Узнайте историю вещей, научитесь торговаться и соберите идеальный подарок из Вьетнама. Персональные рекомендации и упаковка."
        />
        <link
          rel="canonical"
          href="https://myhoian.app/kvest-ekskursiya-hoian-v-korobke"
        />
        <meta
          property="og:title"
          content="Квест-экскурсия 'Хойан в коробке' 2025 | Шопинг-тур с гидом"
        />
        <meta
          property="og:description"
          content="Увлекательный квест-тур по рынкам Хойана. Узнайте историю вещей, научитесь торговаться и соберите идеальный подарок из Вьетнама."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://myhoian.app/kvest-ekskursiya-hoian-v-korobke"
        />
        <meta property="og:image" content={`https://myhoian.app${ogImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Квест-экскурсия Хойан в коробке"
        />
        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Квест-экскурсия 'Хойан в коробке' 2025"
        />
        <meta
          name="twitter:description"
          content="Увлекательный квест-тур по рынкам Хойана. Соберите идеальный подарок из Вьетнама!"
        />
        <meta name="twitter:image" content={`https://myhoian.app${ogImage}`} />
        <meta name="author" content="Павел, автор лекций по Вьетнаму и гид" />
        <meta name="contact" content="https://t.me/pashanishka" />
        <meta name="robots" content="index, follow, max-image-preview:large" />
        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'LocalBusiness',
            name: 'Квест-экскурсия "Хойан в коробке"',
            description:
              'Увлекательный квест-тур по рынкам Хойана. Узнайте историю вещей, научитесь торговаться и соберите идеальный подарок из Вьетнама.',
            url: 'https://myhoian.app/kvest-ekskursiya-hoian-v-korobke',
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
          backgroundColor: '#19202A',
          pb: 8,

          // ✅ WebP с fallback через @supports
          backgroundImage: `url(/img/tours/bg3.webp)`,
          backgroundPosition: 'center 180px',
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',

          // ✅ Fallback для старых браузеров
          '@supports not (background-image: url(/img/tours/bg3.webp))': {
            backgroundImage: `url(/img/tours/bg3.png)`,
          },
        }}
      >
        <Box sx={{ textAlign: 'center', pt: 2 }}>
          <img src={logoSvg} width={32} alt="Логотип" className="logo" />
        </Box>

        <SectionHero content={heroContent} handleOpen={handleOpen} />
        <SectionFeatures features={features} />
        <SectionHighlights products={products} />
        {/* ✅ STRING путь для profilePicture */}

        <SectionGuide
          profilePicture="tours/profile.png"
          handleOpen={handleOpen}
        />

        <SectionFAQ />
        <SectionGuideKvest />
      </Container>

      <ModalContact open={open} handleClose={handleClose} />
    </>
  );
};

export default Kvest;
