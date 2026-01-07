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

// Курсы валют относительно VND
const CURRENCY_RATES = {
  VND: { symbol: 'đ', rate: 1 },
  RUB: { symbol: '₽', rate: 0.0037 },
  KZT: { symbol: '₸', rate: 49.5 },
  USD: { symbol: '$', rate: 0.000039 },
  EUR: { symbol: '€', rate: 0.000038 },
};

// Цены в VND
const PRICES = {
  dayTour: 500000,
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
          <Typography component="span">Стоимость</Typography>
        </AccordionSummary>
        <AccordionDetails>
          {/* 
          <Box>
            <Divider sx={{ mt: 0, mb: 2 }}>
              <Chip label="До 25 декабря" size="medium" />
            </Divider>
          </Box>
          <Typography
            variant="h4"
            sx={{ textAlign: 'center', mb: 1, textTransform: 'uppercase' }}
          >
            Бесплатно!
          </Typography>
          <Typography variant="body1" sx={{ textAlign: 'center', mb: 2 }}>
            Присоединяйтесь к группе и после розыгрыша первым 5ти участникам
            квест-экскурсия в подарок!
          </Typography>
          <Box sx={{ display: 'flex', justifyContent: 'center', mb: 1 }}>
            <Button
              size="medium"
              variant="contained"
              component="a"
              href="https://t.me/hoianbox"
              target="_blank"
              rel="noopener noreferrer"
            >
              Присоединиться
            </Button>
          </Box>
          <Typography
            variant="caption"
            sx={{ textAlign: 'center', display: 'block', mb: 4 }}
          >
            Никакого спама и рекламы!
          </Typography>

          <Box>
            <Divider sx={{ mt: 0, mb: 3 }}>
              <Chip label="После" size="medium" />
            </Divider>
          </Box>*/}
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
            sx={{ textAlign: 'center', display: 'block', mb: 4 }}
          >
            Цена указана за одного человека<br></br> ( детям бесплатно )
          </Typography>
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
            экскурсии. Индивидуальный подход.
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
