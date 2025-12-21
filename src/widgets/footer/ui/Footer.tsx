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
} from '@mui/material';
import MapIcon from '@mui/icons-material/Map';
import ExploreIcon from '@mui/icons-material/Explore';
import ChatIcon from '@mui/icons-material/Chat';
import { useTranslation } from 'react-i18next';

interface SubMenuItem {
  primary: string;
  secondary: string;
  href?: string;
}

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const theme = useTheme();
  const [value, setValue] = useState(0);
  const [showExploreMenu, setShowExploreMenu] = useState(false);
  const [showSocialMenu, setShowSocialMenu] = useState(false); // Новое состояние

  const exploreItems: SubMenuItem[] = [
    {
      primary: 'Авторская экскурсия-лекция по Хойану',
      secondary:
        'Жемчужина Юго-Восточной Азии. Старинный торговый порт, бережно хранящий наследие веков.',
      href: '/hoian-avtorskaya-ekskursiya',
    },
    {
      primary: 'Квест-экскурсия по Хойану',
      secondary:
        'Подарите родным не просто сувенир, а частичку настоящего Вьетнама!',
      href: '/kvest-ekskursiya-hoian-v-korobke',
    },
  ];

  const socialItems: SubMenuItem[] = [
    {
      primary: 'Telegram',
      secondary: 'Подписывайтесь на наш канал',
      href: 'https://t.me/myhoian',
    },
    {
      primary: 'Instagram',
      secondary: 'Фото и сторис',
      href: 'https://instagram.com/myhoian.app',
    },
    {
      primary: 'WhatsApp',
      secondary: 'Быстрые вопросы',
      href: 'https://wa.me/84357923401',
    },
  ];

  const handleExploreClick = () => {
    setShowExploreMenu(!showExploreMenu);
    setShowSocialMenu(false); // Закрываем другое меню
    setValue(showExploreMenu ? 0 : 1);
  };

  const handleSocialClick = () => {
    setShowSocialMenu(!showSocialMenu);
    setShowExploreMenu(false); // Закрываем другое меню
    setValue(showSocialMenu ? 0 : 2);
  };

  const handleNavigationChange = (
    _event: React.SyntheticEvent,
    newValue: number
  ) => {
    // Закрываем оба меню при выборе других пунктов
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
          boxShadow: `0 4px 20px ${alpha(theme.palette.common.black, 0.1)}`,
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

      {/* Подменю Explore */}
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
              pt: 1,
              boxShadow: `0 -8px 32px ${alpha(theme.palette.common.black, 0.2)}`,
            }}
          >
            <List sx={{ py: 0, px: 2 }}>
              {exploreItems.map((item, index) => (
                <ListItemButton
                  key={index}
                  {...(item.href && {
                    component: 'a' as const,
                    href: item.href,
                  })}
                  onClick={() => handleItemClick(item.href)}
                  sx={{
                    py: 1,
                    mx: -1,
                    borderRadius: '8px',
                    mb: 1,
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.12),
                    },
                    '&:last-child': {
                      mb: 0,
                    },
                  }}
                >
                  <ListItemText
                    primary={item.primary}
                    secondary={item.secondary}
                    primaryTypographyProps={{
                      fontSize: '1.05rem',
                      fontWeight: 400,
                      color: 'text.primary',
                    }}
                    secondaryTypographyProps={{
                      fontSize: '0.875rem',
                      color: 'text.secondary',
                      mt: 0.5,
                    }}
                  />
                </ListItemButton>
              ))}
            </List>
          </Paper>
        </Box>
      </Slide>

      {/* Подменю Social (Quest) */}
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
              pt: 1,
              boxShadow: `0 -8px 32px ${alpha(theme.palette.common.black, 0.2)}`,
            }}
          >
            <List sx={{ py: 0, px: 2 }}>
              {socialItems.map((item, index) => (
                <ListItemButton
                  key={index}
                  {...(item.href && {
                    component: 'a' as const,
                    href: item.href,
                  })}
                  onClick={() => handleItemClick(item.href)}
                  sx={{
                    py: 1,
                    mx: -1,
                    borderRadius: '8px',
                    mb: 1,
                    '&:hover': {
                      backgroundColor: alpha(theme.palette.primary.main, 0.12),
                    },
                    '&:last-child': {
                      mb: 0,
                    },
                  }}
                >
                  <ListItemText
                    primary={item.primary}
                    secondary={item.secondary}
                    primaryTypographyProps={{
                      fontSize: '1.05rem',
                      fontWeight: 400,
                      color: 'text.primary',
                    }}
                    secondaryTypographyProps={{
                      fontSize: '0.875rem',
                      color: 'text.secondary',
                      mt: 0.5,
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
