import React, { useState } from 'react';
import {
  Paper,
  BottomNavigation,
  BottomNavigationAction,
  useTheme,
  alpha,
  List,
  ListItemButton,
  ListItemText,
  Slide,
  Box,
  ListItemIcon,
  Avatar,
} from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatIcon from '@mui/icons-material/Chat';
// Добавляем иконки соцсетей
import TelegramIcon from '@mui/icons-material/Telegram';
import InstagramIcon from '@mui/icons-material/Instagram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import { useTranslation } from 'react-i18next';

interface SubMenuItem {
  primary: string;
  secondary: string;
  href?: string;
  image?: string;
  icon?: React.ReactNode; // Добавлено поле для иконки
}

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showExploreMenu, setShowExploreMenu] = useState(false);
  const [showSocialMenu, setShowSocialMenu] = useState(false);

  const exploreItems: SubMenuItem[] = [
    {
      primary: 'Историческая экскурсия-лекция',
      secondary:
        'Жемчужина Юго-Восточной Азии. Старинный торговый порт, бережно хранящий наследие веков.',
      href: '/hoian-avtorskaya-ekskursiya',
      image: '/img/pictures/japanese_covered_bridge.webp',
    },
    {
      primary: 'Квест-экскурсия по Хойану',
      secondary:
        'Подарите родным не просто сувенир, а частичку настоящего Вьетнама!',
      href: '/kvest-ekskursiya-hoian-v-korobke',
      image: '/img/pictures/hoian_in_box.webp',
    },
  ];

  const socialItems: SubMenuItem[] = [
    {
      primary: 'Telegram',
      secondary: 'Подписывайтесь на наш канал!',
      href: 'https://t.me/myhoian',
      icon: <TelegramIcon sx={{ fontSize: 32 }} />, // Иконка вместо фото
    },
    {
      primary: 'Instagram',
      secondary: 'Следите за нами в инстаграмме :)',
      href: 'https://instagram.com/myhoian.app',
      icon: <InstagramIcon sx={{ fontSize: 32 }} />,
    },
    {
      primary: 'WhatsApp',
      secondary: 'Быстрые вопросы',
      href: 'https://wa.me/84357923401',
      icon: <WhatsAppIcon sx={{ fontSize: 32 }} />,
    },
  ];

  const handleExploreClick = () => {
    setShowExploreMenu(!showExploreMenu);
    setShowSocialMenu(false);
    setValue(showExploreMenu ? 0 : 1);
  };

  const handleSocialClick = () => {
    setShowSocialMenu(!showSocialMenu);
    setShowExploreMenu(false);
    setValue(showSocialMenu ? 0 : 2);
  };

  const handleNavigationChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ) => {
    if (newValue !== 1 && newValue !== 2) {
      setShowExploreMenu(false);
      setShowSocialMenu(false);
    }
    setValue(newValue);
  };

  const handleItemClick = (href?: string) => {
    if (href?.startsWith('http')) {
      setShowExploreMenu(false);
      setShowSocialMenu(false);
      window.open(href, '_blank', 'noopener,noreferrer');
    } else {
      setShowExploreMenu(false);
      setShowSocialMenu(false);
      if (href) {
        window.location.href = href;
      }
    }
  };

  return (
    <>
      {/* Футер */}
      <Paper
        sx={{
          position: 'fixed',
          bottom: 0,
          left: 0,
          right: 0,
          zIndex: 1100,
          borderRadius: '0',
          overflow: 'hidden',
          boxShadow: `0px -4px 24px ${alpha(theme.palette.common.black, 0.2)}`,
          backdropFilter: 'blur(8px)',
          background: '#2e2e39',
        }}
        elevation={3}
      >
        <BottomNavigation
          showLabels
          value={value}
          onChange={handleNavigationChange}
          sx={{
            backgroundColor: 'transparent',
            height: '56px',
            '& .MuiBottomNavigationAction-root': {
              minWidth: 'auto',
              padding: '8px 0',
              color: theme.palette.text.secondary,
              '&.Mui-selected': {
                color: theme.palette.primary.main,
              },
              '&:nth-of-type(n)': {
                '&.Mui-selected': {
                  '& .MuiBottomNavigationAction-label': {
                    fontWeight: 400,
                    fontSize: '0.75rem',
                  },
                },
              },
            },
          }}
        >
          <BottomNavigationAction
            label={t('menu.map') || 'Map'}
            icon={<MapIcon />}
          />
          <BottomNavigationAction
            label={t('menu.explore') || 'Explore'}
            icon={<ExploreIcon />}
            onClick={handleExploreClick}
          />
          <BottomNavigationAction
            label={t('menu.contacts') || 'Contacts'}
            icon={<ChatIcon />}
            onClick={handleSocialClick}
          />
        </BottomNavigation>
      </Paper>

      {/* Подменю Explore с картинками */}
      <Slide
        direction="up"
        in={showExploreMenu}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 300, exit: 200 }}
      >
        <Box
          sx={{
            position: 'fixed',
            bottom: '56px',
            left: 0,
            right: 0,
            zIndex: 1099,
          }}
        >
          <Paper
            sx={{
              background: alpha('#2e2e39', 0.98),
              backdropFilter: 'blur(16px)',
              borderTop: `1px solid ${alpha(theme.palette.divider, 0.3)}`,
              borderRadius: '8px 8px 0 0',
              maxHeight: '60vh',
              overflow: 'auto',
              pt: 0,
              pb: 0,
              boxShadow: `0 -8px 32px ${alpha(theme.palette.common.black, 0.2)}`,
            }}
          >
            <List sx={{ py: 0, px: 1 }}>
              {exploreItems.map((item, index) => (
                <ListItemButton
                  key={index}
                  {...(item.href && {
                    component: 'a' as const,
                    href: item.href,
                  })}
                  onClick={() => handleItemClick(item.href)}
                  sx={{
                    py: 2,
                    mx: -1,
                    borderRadius: '0px',
                    mb: 0,
                    borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.12),
                    },
                    '&:last-child': {
                      mb: 0,
                      borderBottom: 'none',
                    },
                  }}
                >
                  <ListItemIcon sx={{ minWidth: '80px', mr: 2 }}>
                    {item.image && (
                      <Avatar
                        src={item.image}
                        variant="square"
                        sx={{
                          width: 80,
                          height: 80,
                          borderRadius: '4px',
                          objectFit: 'cover',
                          boxShadow: `0 4px 12px ${alpha(theme.palette.common.black, 0.3)}`,
                        }}
                      />
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.primary}
                    secondary={item.secondary}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: 900,
                      color: 'text.primary',
                      lineHeight: 1.4,
                    }}
                    secondaryTypographyProps={{
                      fontSize: '0.75rem',
                      color: 'text.secondary',
                      mt: 0.5,
                      lineHeight: 1.4,
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Box>
      </Slide>

      {/* Подменю Social с иконками */}
      <Slide
        direction="up"
        in={showSocialMenu}
        mountOnEnter
        unmountOnExit
        timeout={{ enter: 300, exit: 200 }}
      >
        <Box
          sx={{
            position: 'fixed',
            bottom: '56px',
            left: 0,
            right: 0,
            zIndex: 1099,
          }}
        >
          <Paper
            sx={{
              background: alpha('#2e2e39', 0.98),
              backdropFilter: 'blur(16px)',
              borderTop: `1px solid ${alpha(theme.palette.divider, 0.3)}`,
              borderRadius: '8px 8px 0 0',
              maxHeight: '60vh',
              overflow: 'auto',
              pt: 0,
              pb: 0,
              boxShadow: `0 -8px 32px ${alpha(theme.palette.common.black, 0.2)}`,
            }}
          >
            <List sx={{ py: 0, px: 1 }}>
              {socialItems.map((item, index) => (
                <ListItemButton
                  key={index}
                  {...(item.href && {
                    component: 'a' as const,
                    href: item.href,
                  })}
                  onClick={() => handleItemClick(item.href)}
                  sx={{
                    py: 2, // Увеличиваем паддинг как в Explore
                    mx: -1,
                    borderRadius: '0px',
                    mb: 0,
                    borderBottom: `1px solid ${alpha(theme.palette.divider, 0.1)}`,
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.12),
                    },
                    '&:last-child': {
                      mb: 0,
                      borderBottom: 'none',
                    },
                  }}
                >
                  {/* Добавляем иконку в ListItemIcon */}
                  <ListItemIcon
                    sx={{ minWidth: '36px', mr: 2, justifyContent: 'center' }}
                  >
                    {item.icon && (
                      <Box
                        sx={{
                          display: 'flex',
                          alignItems: 'center',
                          justifyContent: 'center',
                        }}
                      >
                        {item.icon}
                      </Box>
                    )}
                  </ListItemIcon>
                  <ListItemText
                    primary={item.primary}
                    secondary={item.secondary}
                    primaryTypographyProps={{
                      fontSize: '0.875rem',
                      fontWeight: 900,
                      color: 'text.primary',
                      lineHeight: 1.4,
                    }}
                    secondaryTypographyProps={{
                      fontSize: '0.75rem',
                      color: 'text.secondary',
                      mt: 0.5,
                      lineHeight: 1.4,
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Box>
      </Slide>
    </>
  );
};

export default Footer;
