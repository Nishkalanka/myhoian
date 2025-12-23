import React, { useState } from 'react';
import {
  Box,
  Typography,
  Divider,
  Chip,
  TextField,
  MenuItem,
  Button,
} from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
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
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SailingIcon from '@mui/icons-material/Sailing';

// Курсы валют относительно VND
const CURRENCY_RATES = {
  VND: { symbol: 'đ', rate: 1 },
  RUB: { symbol: '₽', rate: 0.0037 },
  USD: { symbol: '$', rate: 0.000039 },
  EUR: { symbol: '€', rate: 0.000038 },
  GBP: { symbol: '£', rate: 0.000031 },
  JPY: { symbol: '¥', rate: 0.0065 },
  CNY: { symbol: '¥', rate: 0.00028 },
};

// Цены в VND
const PRICES = {
  dayTour: 1000000,
  eveningTour: 1500000,
  personalGuide: 500000,
  transfer: 400000,
};

const SectionFAQ: React.FC = () => {
  const [selectedCurrency, setSelectedCurrency] = useState<string>('VND');

  const convertPrice = (priceInVnd: number): string => {
    const rate =
      CURRENCY_RATES[selectedCurrency as keyof typeof CURRENCY_RATES];
    if (!rate) return priceInVnd.toLocaleString('vi-VN');

    const converted = priceInVnd * rate.rate;

    // Форматирование в зависимости от валюты
    if (selectedCurrency === 'VND') {
      return converted.toLocaleString('vi-VN');
    } else if (selectedCurrency === 'JPY') {
      return Math.round(converted).toLocaleString('en-US');
    } else {
      return converted.toFixed(2);
    }
  };

  const getPriceDisplay = (priceInVnd: number): string => {
    const symbol =
      CURRENCY_RATES[selectedCurrency as keyof typeof CURRENCY_RATES].symbol;
    return `${symbol} ${convertPrice(priceInVnd)}`;
  };

  return (
    <>
      <Box
        sx={{
          fontWeight: 600,
          fontSize: 'sx',
          textTransform: 'uppercase',
          letterSpacing: 0.5,
          textAlign: 'center',
          mb: 2,
        }}
      >
        Остались вопросы ?
      </Box>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel1-content"
          id="panel1-header"
        >
          <Typography component="span">Программа и стоимость</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box
            sx={{ border: '1px solid #FFBF00', borderRadius: 2, p: 3, mb: 4 }}
          >
            <Divider sx={{ mt: 0, mb: 2 }}>
              <Chip
                sx={{ backgroundColor: '#FFBF00', color: '#040c19' }}
                label="НОВОГОДНЕЕ ПРЕДЛОЖЕНИЕ"
                size="medium"
              />
            </Divider>

            <Typography
              variant="h4"
              sx={{ textAlign: 'center', mb: 1, textTransform: 'uppercase' }}
            >
              100.000 VND
            </Typography>
            <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>
              <b>27 декабря в 8:30</b>
              <br></br> Мы проводим открытую предновогоднюю прогулку по Хойану в
              камерном формате без спешки и туристической суеты.
            </Typography>
            <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
              <Button
                size="medium"
                variant="contained"
                component="a"
                href="https://t.me/natalya_olegovna"
                target="_blank"
                rel="noopener noreferrer"
              >
                Присоединиться
              </Button>
            </Box>
            <Typography
              variant="caption"
              sx={{ textAlign: 'center', display: 'block', mb: 0 }}
            >
              В стоимость не входит обед и вход в музеи!
            </Typography>
          </Box>

          <Box>
            <Divider sx={{ mt: 0, mb: 4 }}>
              <Chip label="Дневной Хойан ( 8:00 - 13:00 )" size="medium" />
            </Divider>
          </Box>
          {/* Селектор валюты */}
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 3 }}>
            <TextField
              select
              label="Выберите валюту"
              value={selectedCurrency}
              onChange={(e) => setSelectedCurrency(e.target.value)}
              size="medium"
              sx={{ width: '100%' }}
            >
              {Object.entries(CURRENCY_RATES).map(([code, data]) => (
                <MenuItem key={code} value={code}>
                  {code} ({data.symbol})
                </MenuItem>
              ))}
            </TextField>
          </Box>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            {getPriceDisplay(PRICES.dayTour)}
          </Typography>
          <Typography
            variant="caption"
            sx={{ textAlign: 'center', display: 'block' }}
          >
            Билеты в музеи и питание входят в стоимость
          </Typography>

          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                8:00 - 9:00
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                  <CoffeeMakerIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="body1" component="div">
                  Кофе / Чай
                </Typography>
                <Typography variant="caption">Старинная кофейня.</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                10:15 - 11:00
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                  <TheaterComedyIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="body1" component="div">
                  Театр
                </Typography>
                <Typography variant="caption">
                  Живое выступление вьетнамских артистов.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                11:00 - 13:00
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                  <FavoriteIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="body1" component="div">
                  Хойан
                </Typography>
                <Typography variant="caption">
                  Посещаем все основные места в городе
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                13:00
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                  <RamenDiningIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="body1" component="div">
                  Обед
                </Typography>
                <Typography variant="caption">
                  Едим в правильном месте
                </Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>

          <Typography
            variant="body1"
            sx={{ textAlign: 'center', mt: 2, mb: 4 }}
          >
            Каждому гостю в конце экскурсии подарок. Закажете дневную и вечернюю
            экскурсию - получите общую скидку 10%
          </Typography>

          <Box>
            <Divider sx={{ mt: 0, mb: 2 }}>
              <Chip label="Вечерний Хойан (16:00 - 20:00)" size="medium" />
            </Divider>
          </Box>

          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            {getPriceDisplay(PRICES.eveningTour)}
          </Typography>
          <Typography
            variant="caption"
            sx={{ textAlign: 'center', display: 'block' }}
          >
            Билеты и питание входят в стоимость
          </Typography>

          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                16:00 - 16:30
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                  <CoffeeMakerIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="body1" component="div">
                  Кофе / Чай
                </Typography>
                <Typography variant="caption">Только лучшие места.</Typography>
              </TimelineContent>
            </TimelineItem>

            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                16:30 - 19:00
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                  <FavoriteIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="body1" component="div">
                  Вечерний Хойан
                </Typography>
                <Typography variant="caption">
                  Посещаем все основные в городе.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                19:00 - 19:30
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                  <SailingIcon />
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="body1" component="div">
                  Уходим в плавание
                </Typography>
                <Typography variant="caption">
                  Вечернее катание на лодках.
                </Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                20:00
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                  <RestaurantIcon />
                </TimelineDot>
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="body1" component="div">
                  Ужин
                </Typography>
                <Typography variant="caption">Только лучшие места!</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel2-content"
          id="panel2-header"
        >
          <Typography component="span">Индивидуальное предложение</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Divider sx={{ mt: 0, mb: 2 }}>
              <Chip label="Ваш личный гид" size="medium" />
            </Divider>
          </Box>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            {getPriceDisplay(PRICES.personalGuide)}
          </Typography>
          <Typography
            variant="caption"
            sx={{ textAlign: 'center', display: 'block', mb: 2 }}
          >
            Стоимость в час
          </Typography>
          <Typography variant="h6" sx={{ mb: 1, textAlign: 'left' }}>
            Преимущества
          </Typography>
          <Typography variant="body2" sx={{ mb: 1, textAlign: 'left' }}>
            Передвижение на скутере в любую локацию! Комбинированные виды
            экскурсии. Индивидуальный подход. Экспертная помощь в выборе
            сувениров (поверьте это имеет смысл)
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Accordion>
        <AccordionSummary
          expandIcon={<ArrowDropDownIcon />}
          aria-controls="panel3-content"
          id="panel3-header"
        >
          <Typography component="span">Трансфер</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Box>
            <Divider sx={{ mt: 0, mb: 2 }}>
              <Chip label="Из Дананга" size="medium" />
            </Divider>
          </Box>
          <Typography variant="h4" sx={{ textAlign: 'center' }}>
            {getPriceDisplay(PRICES.transfer)}
          </Typography>
          <Typography
            variant="caption"
            sx={{ textAlign: 'center', display: 'block', mb: 2 }}
          >
            Туда-обратно
          </Typography>
        </AccordionDetails>
      </Accordion>
    </>
  );
};

export default SectionFAQ;
