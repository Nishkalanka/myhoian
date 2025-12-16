import React from 'react';
import { Box, Typography, Divider, Chip } from '@mui/material';
//import OptimizedImage from '../../shared/ui/OptimizedImage/OptimizedImage';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';

import CoffeeMakerIcon from '@mui/icons-material/CoffeeMaker';
import TheaterComedyIcon from '@mui/icons-material/TheaterComedy';
import RamenDiningIcon from '@mui/icons-material/RamenDining';
import FavoriteIcon from '@mui/icons-material/Favorite';
import RedeemIcon from '@mui/icons-material/Redeem';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import InfoIcon from '@mui/icons-material/Info';
//import RestaurantIcon from '@mui/icons-material/Restaurant'

interface Product {
  id: number;
  name: string;
  color: string;
  imageSrc: string;
  imageAlt: string;
}

interface SectionHighlightsProps {
  products: Product[];
}

const SectionHighlights: React.FC<SectionHighlightsProps> = ({ products }) => (
  <Box>
    <Box sx={{ maxWidth: 'lg', mx: 'auto', pt: 6, pb: 4 }}>
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
              fontSize: 'sm',
              textTransform: 'uppercase',
              letterSpacing: 0.5,
            }}
          >
            Описание
          </Box>
        </Box>
      </Box>

      <Timeline position="right" sx={{ p: 0 }}>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            align="right"
            variant="body2"
            color="text.secondary"
          >
            История и скрытые смыслы вещей
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
              <InfoIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, lineHeight: '18px' }}>
            <Typography variant="body2" component="div"></Typography>
            <Typography variant="caption">
              Историческая экскурсия на рынке Хойана. Показываем, что за вещь
              перед вами и какую историю и смысл она имеет во вьетнамской
              культуре.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Советы по ценам и ведению торгов
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
              <MonetizationOnIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, lineHeight: '18px' }}>
            <Typography variant="body1" component="div"></Typography>
            <Typography variant="caption">
              Проводим в проверенные места и помогаем не потеряться в выборе.
              Показываем как покупать без переплаты на вьетнамском рынке.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Персональные рекомендации
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
              <FavoriteIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, lineHeight: '18px' }}>
            <Typography variant="body1" component="div"></Typography>
            <Typography variant="caption">
              Строим маршрут покупок строго под ваши личные требования. Советуем
              и находим именно то, что нужно вам, учитывая ваши вкусы и
              пожелания.
            </Typography>
          </TimelineContent>
        </TimelineItem>
        <TimelineItem>
          <TimelineOppositeContent
            sx={{ m: 'auto 0' }}
            variant="body2"
            color="text.secondary"
          >
            Доставка ваших подарков
          </TimelineOppositeContent>
          <TimelineSeparator>
            <TimelineConnector />
            <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
              <RedeemIcon />
            </TimelineDot>
            <TimelineConnector />
          </TimelineSeparator>
          <TimelineContent sx={{ py: '12px', px: 2, lineHeight: '18px' }}>
            <Typography variant="body1" component="div"></Typography>
            <Typography variant="caption">
              Собираем покупки в аккуратную и красивую упаковку, готовую к
              поездке. Доставка посылки в любую точку мира.
            </Typography>
          </TimelineContent>
        </TimelineItem>
      </Timeline>

      {/* Блок с продуктами 
      <Grid container spacing={2} sx={{ mt: 1 }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={6} sm={6} md={6}>
            <Box sx={{ mb: 2 }}>
              <OptimizedImage
                src={product.imageSrc}
                alt={product.imageAlt}
                width={400}
                height={280}
                loading="lazy"
                sx={{
                  height: { xs: 140, lg: 180, xl: 200 },
                }}
              />

              <Typography
                variant="body1"
                sx={{ mt: 1, mb: 0.5, fontWeight: 600 }}
              >
                {product.name}
              </Typography>
              <Typography
                sx={{ lineHeight: '18px', display: 'block' }}
                variant="caption"
              >
                {product.color}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>*/}
    </Box>
  </Box>
);

export default SectionHighlights;
