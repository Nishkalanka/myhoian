// src/components/Header.tsx

import React, { useState } from 'react';
import {
  Typography,
  Box,
  FormControl,
  Stack, // <--- Stack остаётся
  InputLabel,
  Select,
  MenuItem,
  IconButton,
  useTheme,
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Link,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useThemeContext } from '../contexts/ThemeContexts';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

interface HeaderProps {
  logo: string;
}

import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

const images = import.meta.glob('../assets/img/pictures/*', {
  eager: true,
  as: 'url',
});

const getImageUrl = (name: string) => images[`../assets/img/pictures/${name}`];

const dialogImage = getImageUrl('dragon.png'); // <--- НОВОЕ: Получаем URL для dragon.png

import logo from '../assets/img/logo.svg';

const Header: React.FC<HeaderProps> = () => {
  const { toggleColorMode, mode } = useThemeContext();
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const theme = useTheme();

  const [openWelcomeDialog, setOpenWelcomeDialog] = useState(false);

  const changeLanguage = (event: any) => {
    i18n.changeLanguage(event.target.value as string);
  };

  const handleLogoClick = () => {
    setOpenWelcomeDialog(true);
  };

  const handleCloseWelcomeDialog = () => {
    setOpenWelcomeDialog(false);
  };

  // --- ВАШИ ССЫЛКИ ЗДЕСЬ ---
  const TELEGRAM_LINK = 'https://t.me/pashanishka'; // ЗАМЕНИТЕ
  const WHATSAPP_LINK = 'https://wa.me/84357923401'; // ЗАМЕНИТЕ
  const EMAIL_LINK = 'mailto:hatifnatts@gmail.com'; // ЗАМЕНИТЕ

  return (
    <Box
      component="header"
      sx={{
        p: 1,
        m: 1,
        borderRadius: 2,
        flexShrink: 0,
        position: 'sticky',
        zIndex: 1000,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? theme.palette.background.default
            : theme.palette.background.paper,
        boxShadow: theme.shadows[3],
      }}
    >
      {/* --- ИЗМЕНЕНО ЗДЕСЬ: Stack с justifyContent="space-between" --- */}
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between" // <--- КЛЮЧЕВОЕ ИЗМЕНЕНИЕ: Распределяет пространство между элементами
        spacing={1} // spacing теперь будет применяться только между элементами внутри каждой группы
      >
        {/* --- Группа 1: Логотип и Название --- */}
        <Box
          sx={{
            display: 'flex',
            alignItems: 'center',
            cursor: 'pointer',
            '&:hover': {
              opacity: 0.8,
            },
            // Удаляем flexGrow: 1 и maxWidth: 'fit-content' отсюда,
            // т.к. justifyContent="space-between" на родительском Stack справится с позиционированием
          }}
          onClick={handleLogoClick}
        >
          <img
            src={logo}
            alt="LOGO"
            style={{
              width: 'auto',
              height: '36px',
              display: 'block',
              marginRight: theme.spacing(1),
            }}
          />

          <Typography
            variant="body2"
            component="span"
            sx={{
              fontWeight: 600,
              whiteSpace: 'nowrap', // Предотвращает перенос текста
            }}
          >
            {t('logoTitle')}
          </Typography>
        </Box>

        {/* --- Группа 2: Выбор языка и Переключатель темы --- */}
        <Stack direction="row" alignItems="center" spacing={1}>
          {' '}
          {/* <--- НОВЫЙ ВНУТРЕННИЙ Stack для группировки */}
          <FormControl variant="outlined" sx={{ minWidth: 80 }}>
            <InputLabel id="language-select-label"></InputLabel>{' '}
            <Select
              labelId="language-select-label"
              id="language-select"
              value={i18n.language}
              onChange={changeLanguage}
              size="small"
              sx={{
                '& .MuiSelect-select': {
                  display: 'flex',
                  alignItems: 'center',
                  gap: 1,
                },
              }}
            >
              <MenuItem value="en">
                <ReactCountryFlag
                  countryCode="US"
                  svg
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                    marginRight: '8px',
                  }}
                  title="US"
                />{' '}
              </MenuItem>

              <MenuItem value="fr">
                <ReactCountryFlag
                  countryCode="FR"
                  svg
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                    marginRight: '8px',
                  }}
                  title="FR"
                />{' '}
              </MenuItem>
              <MenuItem value="es">
                <ReactCountryFlag
                  countryCode="ES"
                  svg
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                    marginRight: '8px',
                  }}
                  title="ES"
                />{' '}
              </MenuItem>
              <MenuItem value="ru">
                <ReactCountryFlag
                  countryCode="RU"
                  svg
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                    marginRight: '8px',
                  }}
                  title="RU"
                />{' '}
              </MenuItem>
              <MenuItem value="vn">
                <ReactCountryFlag
                  countryCode="VN"
                  svg
                  style={{
                    width: '1.5em',
                    height: '1.5em',
                    marginRight: '8px',
                  }}
                  title="VN"
                />{' '}
              </MenuItem>
            </Select>
          </FormControl>
          <IconButton
            sx={{ ml: 1, color: '' }} // ml: 1 здесь может быть избыточным, т.к. spacing уже есть на Stack
            onClick={toggleColorMode}
            color="inherit"
          >
            {mode === 'dark' ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Stack>
      </Stack>

      {/* --- Компонент Dialog (остаётся без изменений) --- */}
      <Dialog
        open={openWelcomeDialog}
        onClose={handleCloseWelcomeDialog}
        aria-labelledby="welcome-dialog-title"
        maxWidth="xs"
        fullWidth
      >
        <DialogTitle id="welcome-dialog-title">
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Typography variant="h6">{t('welcomeDialogTitle')}</Typography>

            <IconButton
              edge="end"
              color="inherit"
              onClick={handleCloseWelcomeDialog}
              aria-label="close"
            >
              <CloseIcon />
            </IconButton>
          </Stack>
        </DialogTitle>
        <DialogContent sx={{ textAlign: 'center' }} dividers>
          <Box
            component="img"
            src={dialogImage} // Используем URL дракона
            alt="Welcome Dragon"
            sx={{
              display: 'block', // Чтобы можно было центрировать margin: 'auto'
              margin: '0 auto 16px auto', // Центрируем и добавляем отступ снизу
              maxWidth: 'auto', // Ограничиваем размер
              height: '72px',
              objectFit: 'contain',
            }}
          />

          <Typography sx={{ mb: 1 }} variant="h6">
            {t('welcomeDialogMessage')}
          </Typography>
          <Typography sx={{ mb: 1 }} variant="body1">
            {t('thankYouMessage')}
          </Typography>
          <Stack
            direction="row"
            spacing={2}
            justifyContent="center"
            sx={{ mt: 3 }}
          >
            {/* Telegram */}
            <Link
              href={TELEGRAM_LINK}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <IconButton color="primary" aria-label="Telegram">
                <TelegramIcon fontSize="large" />
              </IconButton>
            </Link>

            {/* WhatsApp */}
            <Link
              href={WHATSAPP_LINK}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <IconButton color="primary" aria-label="WhatsApp">
                <WhatsAppIcon fontSize="large" />
              </IconButton>
            </Link>

            {/* Email */}
            <Link
              href={EMAIL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              color="inherit"
            >
              <IconButton color="primary" aria-label="Email">
                <EmailIcon fontSize="large" />
              </IconButton>
            </Link>
          </Stack>
        </DialogContent>
        <DialogActions>
          <Button onClick={handleCloseWelcomeDialog} color="primary">
            {t('welcomeClose')}
          </Button>
        </DialogActions>
      </Dialog>
    </Box>
  );
};

export default Header;
