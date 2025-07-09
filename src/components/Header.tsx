// src/components/Header.tsx

import React, { useState } from 'react';
import {
  Typography,
  Box,
  FormControl,
  Stack,
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
  Drawer,
  List,
  Divider,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { useThemeContext } from '../contexts/ThemeContexts';
import { useTranslation } from 'react-i18next';
import ReactCountryFlag from 'react-country-flag';
// import Brightness4Icon from "@mui/icons-material/Brightness4"; // Закомментировано
// import Brightness7Icon from "@mui/icons-material/Brightness7"; // Закомментировано
import FilterListIcon from '@mui/icons-material/FilterList';

import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';

import { useLanguage } from '../contexts/LanguageContext';

import CategoryFilter from './CategoryFilter';

interface HeaderProps {
  logo?: string;
  onSelectCategories: (selectedSlugs: string[]) => void;
  selectedCategorySlugs: string[]; // Этот пропс теперь будет использоваться
}

const images = import.meta.glob('../assets/img/pictures/*', {
  eager: true,
  as: 'url',
});

const getImageUrl = (name: string) => images[`../assets/img/pictures/${name}`];

const dialogImage = getImageUrl('dragon.png');

import logoSvg from '../assets/img/logo.svg';

const Header: React.FC<HeaderProps> = ({
  onSelectCategories,
  selectedCategorySlugs, // Деструктурируем пропс, теперь он будет использоваться
}) => {
  //const { toggleColorMode, mode } = useThemeContext();
  const { t } = useTranslation();
  const { i18n } = useTranslation();
  const theme = useTheme();
  const { setLang } = useLanguage();

  const [openWelcomeDialog, setOpenWelcomeDialog] = useState(false);
  const [openDrawer, setOpenDrawer] = useState(false);

  const changeLanguage = (event: any) => {
    const selectedLang = event.target.value as string;
    setLang(selectedLang);
  };

  const handleLogoClick = () => {
    setOpenWelcomeDialog(true);
  };

  const handleCloseWelcomeDialog = () => {
    setOpenWelcomeDialog(false);
  };

  const toggleDrawer =
    (open: boolean) => (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }
      setOpenDrawer(open);
    };

  const TELEGRAM_LINK = 'https://t.me/pashanishka';
  const WHATSAPP_LINK = 'https://wa.me/84357923401';
  const EMAIL_LINK = 'mailto:hatifnatts@gmail.com';

  return (
    <Box
      component="header"
      sx={{
        p: 1,
        m: 1,
        borderRadius: 2,
        flexShrink: 0,
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 1000,
        backgroundColor: (theme) =>
          theme.palette.mode === 'dark'
            ? theme.palette.background.default
            : theme.palette.background.paper,
        boxShadow: theme.shadows[3],
        width: 'calc(100% - 16px)',
        boxSizing: 'border-box',
      }}
    >
      <Stack
        direction="row"
        alignItems="center"
        justifyContent="space-between"
        spacing={1}
        sx={{ flexShrink: 0 }}
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
            flexShrink: 0,
          }}
          onClick={handleLogoClick}
        >
          <img
            src={logoSvg}
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
              whiteSpace: 'nowrap',
            }}
          >
            {t('logoTitle')}
          </Typography>
        </Box>

        {/* --- Группа 2: Выбор языка, Кнопка фильтра (вместо переключателя темы) --- */}
        <Stack
          direction="row"
          alignItems="center"
          spacing={1}
          sx={{ flexShrink: 0 }}
        >
          <FormControl variant="outlined" sx={{ minWidth: 80 }}>
            <InputLabel id="language-select-label"></InputLabel>
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
          {/* Кнопка фильтра, теперь открывает Drawer */}
          <IconButton
            onClick={toggleDrawer(true)}
            color="inherit"
            sx={{ ml: 1, position: 'relative' }}
            aria-label={t('category')} // <-- ИСПРАВЛЕНО
          >
            <FilterListIcon />
            {selectedCategorySlugs.length > 0 && (
              <Box
                sx={{
                  position: 'absolute',
                  top: 0,
                  right: 0,
                  backgroundColor: '#ffbf00',
                  color: theme.palette.primary.contrastText,
                  borderRadius: '50%',
                  width: 18,
                  height: 18,
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '0.75rem',
                  fontWeight: 'bold',
                  zIndex: 1,
                }}
              >
                {selectedCategorySlugs.length}
              </Box>
            )}
          </IconButton>
          {/* Закомментированная кнопка переключения темы */}
          {/*
          <IconButton
            sx={{ ml: 1, color: "" }}
            onClick={toggleColorMode}
            color="inherit"
          >
            {mode === "dark" ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
          */}
        </Stack>
      </Stack>

      {/* --- Drawer для CategoryFilter --- */}
      <Drawer anchor="right" open={openDrawer} onClose={toggleDrawer(false)}>
        <Box sx={{ width: 280 }} role="presentation">
          <List>
            <Box
              sx={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center',
                p: 2, // <-- Изменено с 1 на 2 для лучшего отступа
              }}
            >
              <Typography variant="h6">{t('category')}</Typography>
              <IconButton onClick={toggleDrawer(false)}>
                <CloseIcon />
              </IconButton>
            </Box>
            <Divider />
            <CategoryFilter
              onSelectCategories={onSelectCategories}
              selectedCategorySlugs={selectedCategorySlugs}
            />
          </List>
        </Box>
      </Drawer>

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
            <Typography variant="h6">{t('category')}</Typography>

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
            src={dialogImage}
            alt="Welcome Dragon"
            sx={{
              display: 'block',
              margin: '0 auto 16px auto',
              maxWidth: 'auto',
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
