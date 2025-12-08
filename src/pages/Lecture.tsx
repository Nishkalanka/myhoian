// src/pages/Lecture.tsx

import React, { useState } from 'react';
import { Box, Container } from '@mui/material';
import { Helmet } from 'react-helmet-async';

// Импорты секций
import ModalContact from './sections/ModalContactLecture';
import SectionHero from './sections/SectionHeroLecture';
import SectionHighlights from './sections/SectionHighlightsLecture';
import SectionGuide from './sections/SectionGuideLecture';
import SectionContact from './sections/SectionContact';
import SectionFeatures from './sections/SectionFeaturesLecture';

// ✅ ИМПОРТЫ ТОЛЬКО ДЛЯ SVG И METADATA
import logoSvg from '../assets/img/logo.svg';
import ogImage from '../assets/img/og-image.png';
import AccessTimeIcon from '@mui/icons-material/AccessTime';
import LocationOn from '@mui/icons-material/LocationOn';
import Paid from '@mui/icons-material/Paid';

// ===== ТИПЫ =====
interface Product {
  id: number;
  name: string;
  color: string;
  imageSrc: string; // ✅ ВСЕГДА STRING!
  imageAlt: string;
}

interface Feature {
  name: string;
  description: string;
  icon: React.ElementType; // ✅ React компонент
}

interface HeroContent {
  time: string;
  label: string;
  title: string;
  description: string;
  buttonText: string;
  titleSize?: { xs: string; sm: string; md: string };
}

// ===== КОНСТАНSTЫ С КОНТЕНТОМ =====

const heroContent: HeroContent = {
  time: '13 декабря 19:00',
  label: 'Открытая встреча‑лекция',
  title: 'Вьетнам',
  description: 'История | Традиция | Культура',
  buttonText: 'Записаться',
  titleSize: { xs: '4rem', sm: '2rem', md: '2rem' },
};

const features: Feature[] = [
  {
    name: '1ч.',
    description: 'Время лекции',
    icon: AccessTimeIcon, // ⏱️ Часы
  },
  {
    name: 'Дананг',
    description: 'Место проведения',
    icon: LocationOn, // 👥 Люди
  },
  {
    name: '100kvnd',
    description: 'Стоимость посещения',
    icon: Paid, // 🚶 Ходьба
  },
];

// ✅ ИСПОЛЬЗУЙ STRING ПУТИ ВМЕСТО ИМПОРТОВ
const products: Product[] = [
  {
    id: 1,
    name: 'История',
    color:
      'От древних времен, через тысячелетнее китайское влияние до французской колонии и войн XX века.',
    imageSrc: 'pictures/l_1.webp',
    imageAlt: 'Японский мост в Хойане',
  },
  {
    id: 2,
    name: 'Традиции ',
    color:
      'Что для вьетнамцев значит семья, уважение к старшим и почитание традиций предков.',
    imageSrc: 'pictures/l_2.webp',
    imageAlt: 'Фуцзянский зал собраний',
  },
  {
    id: 3,
    name: 'Язык',
    color:
      'Особенности языка: почему тональные звуки имеют такое значение в общении.',
    imageSrc: 'pictures/l_3.webp',
    imageAlt: 'Дом Тан Ки',
  },
  {
    id: 4,
    name: 'Религия',
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
          Лекция о Вьетнаме в Дананге 13 декабря | История, традиции, культура
        </title>

        <meta
          name="keywords"
          content="лекция о Вьетнаме Дананг, история Вьетнама, культура Вьетнама, традиции Вьетнама, открытая лекция Дананг, мероприятия Дананг декабрь, гид Павел Вьетнам, лекция Хойан Дананг"
        />
        <meta
          name="description"
          content="Открытая лекция о Вьетнаме в Дананге 13 декабря в 19:00: история, традиции, религия и язык. 1 час живого рассказа от гида-историка Павла. Небольшая группа, уютное кафе NU Arrows, стоимость 100 000 VND. Записаться онлайн."
        />

        <link
          rel="canonical"
          href="https://myhoian.app/vietnam-lecture-in-danang"
        />

        <meta
          property="og:title"
          content="Лекция о Вьетнаме в Дананге 13 декабря | История, традиции, культура"
        />
        <meta
          property="og:description"
          content="Открытая встреча-лекция о Вьетнаме: от древней истории и китайского влияния до современной культуры, религии и языка. Дананг, NU Arrows Cafe, начало в 19:00. Забронируйте место со скидкой 50% при ранней записи."
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://myhoian.app/vietnam-lecture-in-danang"
        />
        <meta property="og:image" content={`https://myhoian.app${ogImage}`} />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta
          property="og:image:alt"
          content="Открытая лекция о Вьетнаме в Дананге с гидом Павлом"
        />

        <meta name="twitter:card" content="summary_large_image" />
        <meta
          name="twitter:title"
          content="Открытая лекция о Вьетнаме в Дананге 13 декабря"
        />
        <meta
          name="twitter:description"
          content="История, традиции, религия и язык Вьетнама простым языком. Лекция в NU Arrows Cafe, Дананг. Запись и скидка 50% при бронировании до 12 декабря."
        />
        <meta name="twitter:image" content={`https://myhoian.app${ogImage}`} />

        <meta name="author" content="Павел, гид по Вьетнаму и автор лекций" />
        <meta name="contact" content="https://t.me/pashanishka" />
        <meta name="robots" content="index, follow, max-image-preview:large" />

        <script type="application/ld+json">
          {JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'Event',
            name: 'Открытая лекция о Вьетнаме в Дананге',
            description:
              'Открытая встреча-лекция о Вьетнаме: история, традиции, религия и язык. 13 декабря, 19:00, NU Arrows Cafe, Дананг.',
            startDate: '2025-12-13T19:00:00+07:00',
            eventAttendanceMode:
              'https://schema.org/OfflineEventAttendanceMode',
            eventStatus: 'https://schema.org/EventScheduled',
            location: {
              '@type': 'Place',
              name: 'NU Arrows Cafe',
              address: 'Danang, Vietnam',
            },
            image: `https://myhoian.app${ogImage}`,
            organizer: {
              '@type': 'Person',
              name: 'Павел',
            },
            offers: {
              '@type': 'Offer',
              price: '100000',
              priceCurrency: 'VND',
              availability: 'https://schema.org/InStock',
            },
            url: 'https://myhoian.app/vietnam-lecture-in-danang',
            telephone: '+84357923401',
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
          backgroundPosition: 'center -90px, center',
          backgroundSize: 'contain, cover',
          backgroundRepeat: 'no-repeat, no-repeat',

          // ✅ Fallback для старых браузеров
          '@supports not (background-image: url(/img/tours/bg4.webp))': {
            backgroundImage: `url(/img/tours/bg4.webp)`,
          },
        }}
      >
        <Box sx={{ textAlign: 'center', pt: 2 }}>
          <a href="https://myhoian.app/">
            <img src={logoSvg} width={40} alt="Логотип" className="logo" />
          </a>
        </Box>

        <SectionHero content={heroContent} handleOpen={handleOpen} />
        <SectionFeatures features={features} />
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
