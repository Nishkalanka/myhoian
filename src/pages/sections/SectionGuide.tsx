// src/pages/sections/SectionGuide.tsx

import React from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import OptimizedImage from '../../shared/ui/OptimizedImage/OptimizedImage';

// Интерфейс для пропсов
interface SectionGuideProps {
  profilePicture: string;
  handleOpen: () => void;
}

const SectionGuide: React.FC<SectionGuideProps> = ({
  profilePicture,
  handleOpen,
}) => (
  <>
    <Box
      sx={{
        fontWeight: 600,
        fontSize: 'sm',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        textAlign: 'center',
        mb: 2,
      }}
    >
      Гид-экскурсовод
    </Box>
    <Paper
      elevation={0}
      sx={{
        border: 'none',
        backgroundColor: 'gray.50',
        p: 4,
        mb: 6,
        borderRadius: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        overflow: 'break-word',
        backgroundImage:
          'linear-gradient(rgba(255, 255, 255, 0.05), rgba(255, 255, 255, 0.05))',
        gap: 1,
      }}
    >
      {/* ✅ Простой контейнер - пусть OptimizedImage сам считает размеры */}
      <Box
        sx={{
          width: 92,
          height: 92,
          mb: 1,
          borderRadius: '50%',
          overflow: 'hidden',
          border: '2px solid',
          borderColor: '#FFBF00',
          boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.3)',
          bgcolor: '#FFBF00',
          flexShrink: 0, // ✅ Не сжимается
        }}
      >
        <img
          src="/img/tours/profile.webp"
          alt="Павел"
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            borderRadius: '50%',
            display: 'block',
          }}
        />
      </Box>

      <Typography variant="h6">Павел</Typography>
      <Typography variant="body2" sx={{ color: '#FFBF00' }}>
        Гид и автор лекций по Вьетнаму
      </Typography>
      <Typography variant="caption" sx={{ mb: 2 }}>
        Более 15 лет проживаю в Азии. <br></br>Мне есть что рассказать вам про
        Вьетнам!
      </Typography>

      <Button onClick={handleOpen} size="small" variant="contained">
        Бесплатная консультация
      </Button>
    </Paper>
  </>
);

export default SectionGuide;
