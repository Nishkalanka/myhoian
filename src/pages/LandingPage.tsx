import React from 'react';
import {
  Box,
  Typography,
  Button,
  Container,
  Link,
  Avatar,
  Grid,
  Paper,
} from '@mui/material';
// Импортируем Helmet
import { Helmet } from 'react-helmet-async';
import { useNavigate } from 'react-router-dom';
import logoSvg from '../assets/img/logo.svg';

import MenuIcon from '@mui/icons-material/Menu';

const products = [
  {
    id: 1,
    name: 'Японский мост',
    color: 'Главный символ Хойана. Построен в 1593 году.',
    imageSrc: 'https://images.unsplash.com/photo-1505740420928-5e560c06d30e',
    imageAlt: 'Leather-bound daily planner with gold embossing.',
  },
  {
    id: 2,
    name: 'Фуцзянский зал собраний',
    color: 'Очень хороший зал',
    imageSrc: 'https://images.unsplash.com/photo-1529978567524-3dfb744b7769',
    imageAlt: 'Smart notebook with digital pen and app connectivity.',
  },
  {
    id: 3,
    name: 'Дом Тан Ки',
    color: 'Один из самых ярких образцов традиционной архитектуры.',

    imageSrc:
      'https://plus.unsplash.com/premium_photo-1685134731588-783ca7471b65',
    imageAlt: 'Recycled paper weekly planner with plant-based ink.',
  },
  {
    id: 4,
    name: 'Музей',
    color: 'Очень хороший музей с интересными экспонатами.',
    imageSrc: 'https://images.unsplash.com/photo-1633360821222-7e8df83639fb',
    imageAlt: 'Rose gold fountain pen set with ink cartridges.',
  },
] as const;

const features = [
  {
    name: '5',
    description: 'Время',
    icon: MenuIcon,
  },
  {
    name: '2',
    description: 'Размер',
    icon: MenuIcon,
  },
  {
    name: '3',
    description: 'Формат ',
    icon: MenuIcon,
  },
];

function LandingPage() {
  return (
    <>
      {/* 1. БЛОК SEO (HEAD) - все, что нужно для Google и Яндекс (ОСТАВЛЕНО ВАШЕ СОДЕРЖИМОЕ) */}
      <Helmet>
        {/* Title (Главный SEO-тег, до 70 символов) */}
        <title>
          Туры и Экскурсии в Хойане 2024–2025: Авторские программы, Лучшие Цены!
        </title>

        {/* Description (Описывает страницу, до 160 символов, включает CTA) */}
        <meta
          name="description"
          content="Индивидуальные и групповые экскурсии по Хойану на русском языке. Лодки-корзины, кулинарные курсы, Древний город. Цены, отзывы. Бронируйте онлайн!"
        />

        {/* Keywords (Не обязателен для Google, но можно добавить для Яндекса) */}
        <meta
          name="keywords"
          content="туры Хойан, экскурсии Хойан, Хойан достопримечательности, лодка-корзина Хойан, кулинарный класс Хойан, экскурсии на русском в Хойане"
        />

        {/* Каноническая ссылка (обязательно для предотвращения дублирования контента) */}
        <link rel="canonical" href="https://myhoian.app/hoian-tours" />

        {/* Open Graph Tags (для красивого отображения в социальных сетях) */}
        <meta
          property="og:title"
          content="Туры в Хойан: Лучшие Экскурсии с MyHoiAn Tours"
        />
        <meta
          property="og:description"
          content="Индивидуальные и групповые экскурсии по Хойану..."
        />
        <meta property="og:type" content="website" />
        {/* Замените на реальный URL вашей страницы */}
        <meta property="og:url" content="https://myhoian.app/hoian-tours" />
        {/* Замените на URL изображения-превью для соцсетей */}
        <meta
          property="og:image"
          content="https://vashsite.com/images/hoian-preview.jpg"
        />
      </Helmet>
      <Box
        sx={{
          textAlign: 'center',
          mt: 2,
        }}
      >
        <img src={logoSvg} width={44} alt="Логотип компании" className="logo" />
      </Box>
      <Box
        sx={{
          flex: 1,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          gap: 2,
          mt: 2,
          textAlign: 'center',
        }}
      >
        <Box
          sx={{
            fontWeight: 600,
            fontSize: 'sx',
            textTransform: 'uppercase',
            letterSpacing: 0.5,
          }}
        >
          Авторская экскурсия-лекция
        </Box>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: '4xl', sm: '5xl', md: '6xl' },
            fontWeight: 800,
            textTransform: 'uppercase',
            letterSpacing: 1,
          }}
        >
          Хойан
        </Typography>
        <Typography
          sx={{
            fontSize: 'lg',
            color: 'gray.500',
            maxWidth: '54ch',
          }}
        >
          Жемчужина Юго-Восточной Азии.<br></br> Cтаринный торговый порт,
          <br></br> бережно хранящий наследие веков.
        </Typography>
      </Box>
      <Box
        sx={{
          bgcolor: 'background.paper',
        }}
      >
        <Container maxWidth="md">
          <Box
            sx={{
              mt: 4,
              maxWidth: 'xs',
              mx: 'auto',
              display: 'grid',
              gridTemplateColumns: { xs: '1fr 1fr 1fr', md: '1fr 1fr 1fr' },
              gap: 2,
              textAlign: 'center',
            }}
          >
            {features.map((feature) => (
              <Grid item xs={12} sm={12} key={feature.name}>
                <Box
                  sx={{
                    border: (theme) => `1px solid ${theme.palette.divider}`,
                    borderRadius: 2,
                    boxShadow: 1,
                  }}
                >
                  <Paper
                    elevation={0}
                    sx={{
                      pt: 7,
                      border: 'none',
                      backgroundColor: 'gray.50',
                      p: 1,
                      borderRadius: 2,
                      height: '100%',
                      display: 'flex',
                      flexDirection: 'column',
                      whiteSpace: 'nowrap',
                      gap: 1,
                    }}
                  >
                    {/* Icon 
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        width: 36,
                        height: 36,
                        whiteSpace: "nowrap",
                        borderRadius: 999,
                        color: "background.default",
                        bgcolor: "primary.700",
                      }}
                    >
                      <feature.icon fontSize="small" />
                    </Box>
*/}
                    <Typography
                      sx={{
                        color: 'gray.900',
                        fontWeight: 600,
                        fontSize: 'md',
                      }}
                    >
                      {feature.name}
                    </Typography>
                    <Typography
                      sx={{
                        mt: 0.5,
                        color: 'gray.600',
                        fontSize: 'md',
                        lineHeight: 1.5,
                      }}
                    >
                      {feature.description}
                    </Typography>
                  </Paper>
                </Box>
              </Grid>
            ))}
          </Box>
        </Container>
      </Box>

      <Box sx={{ bgcolor: 'background.paper' }}>
        <Box sx={{ maxWidth: 'lg', mx: 'auto', px: 2, py: 8 }}>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}
          >
            <Box
              sx={{
                flex: 1,
                display: 'flex',
                alignItems: 'center',
                flexDirection: 'column',
                textAlign: 'center',
              }}
            >
              <Box
                sx={{
                  fontWeight: 600,
                  fontSize: 'sx',
                  textTransform: 'uppercase',
                  letterSpacing: 0.5,
                }}
              >
                Ключевые места в фокусе
              </Box>
            </Box>
            {/*
            <Link
              href="#"
              sx={{
                display: { xs: "none", md: "inline-flex" },
                alignItems: "center",
                color: "primary.600",
                textDecoration: "none",
                "&:hover": { color: "primary.700" },
              }}
            >
              See more
            </Link>
            */}
          </Box>

          <Grid container spacing={2} sx={{ mt: 3 }}>
            {products.map((product) => (
              <Grid item key={product.id} xs={6} sm={6} md={3}>
                <Box
                  sx={{
                    position: 'relative',
                    '&:hover img': { opacity: 0.75 },
                  }}
                >
                  <Box
                    sx={{
                      height: { xs: 140, lg: 180, xl: 200 },
                      width: '100%',
                      overflow: 'hidden',
                      borderRadius: 1,
                      bgcolor: 'gray.200',
                    }}
                  >
                    <img
                      alt={product.imageAlt}
                      src={product.imageSrc}
                      style={{
                        height: '100%',
                        width: '100%',
                        objectFit: 'cover',
                        objectPosition: 'center',
                      }}
                    />
                  </Box>
                  <Typography variant="body1" sx={{ mt: 1, color: 'gray.700' }}>
                    <Box
                      component="span"
                      sx={{ position: 'absolute', inset: 0 }}
                    />
                    {product.name}
                  </Typography>
                  <Typography
                    variant="caption"
                    sx={{ mt: 0.5, color: 'gray.600' }}
                  >
                    {product.color}
                  </Typography>
                  <Typography
                    sx={{ mt: 0.5, fontWeight: 'medium', color: 'gray.900' }}
                  ></Typography>
                </Box>
              </Grid>
            ))}
          </Grid>
          {/* Мобильная ссылка "Shop the collection" 
          <Box sx={{ mt: 4, display: { xs: "block", md: "none" } }}>
            <Link
              href="#"
              sx={{
                display: "inline-flex",
                alignItems: "center",
                color: "blue.600",
                "&:hover": { color: "blue.700" },
              }}
            >
              Shop the collection
            </Link>
          </Box>*/}
        </Box>
      </Box>
    </>
  );
}

export default LandingPage;
