// src/components/Preloader.tsx

import React from 'react';
import { Box, CircularProgress, Typography, useTheme } from '@mui/material';
import { alpha } from '@mui/material/styles';

// Удаляем import.meta.glob и getImageUrl, если логотип находится в public
// const images = import.meta.glob("../assets/img/pictures/*", {
//   eager: true,
//   as: "url",
// });
// const getImageUrl = (name: string) => images[`../assets/img/pictures/${name}`]; // или images[`../assets/img/${name}`];

interface PreloaderProps {
  isLoading: boolean;
}

const Preloader: React.FC<PreloaderProps> = ({ isLoading }) => {
  const theme = useTheme();

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100dvh',
        backgroundColor: theme.palette.background.default,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        zIndex: 9999,
        opacity: isLoading ? 1 : 0,
        visibility: isLoading ? 'visible' : 'hidden',
        transition: 'opacity 0.8s ease-out, visibility 0.8s ease-out',
        pointerEvents: isLoading ? 'auto' : 'none',
      }}
    >
      <Box
        component="img"
        src="/logo.svg" // <-- ИСПРАВЛЕНО ЗДЕСЬ: Прямой путь от корня public
        alt="My Hoian Logo"
        sx={{
          width: { xs: 56, sm: 82 },
          height: 'auto',
          objectFit: 'contain',
          boxShadow: theme.shadows[10],
          mb: 3,
        }}
      />
    </Box>
  );
};

export default Preloader;
