// src/pages/LandingPage2/LandingPage2.tsx

import React from 'react';
import { Helmet } from 'react-helmet-async';

// ===== КОМПОНЕНТ =====

const Slider: React.FC = () => {
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
            author: { '@type': 'Person', name: 'Павел' },
          })}
        </script>
      </Helmet>
    </>
  );
};

export default Slider;
