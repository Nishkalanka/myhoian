// src/pages/sections/SectionGuide.tsx

import React from 'react';
import { Box, Typography, Button, Paper, Divider, Chip } from '@mui/material';

// Интерфейс для пропсов
interface SectionGuideProps {
  handleOpen: () => void;
}

const SectionGuide: React.FC<SectionGuideProps> = ({ handleOpen }) => (
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
      Автор Лекции
    </Box>
    <Paper
      elevation={0}
      sx={{
        border: 'none',
        backgroundColor: 'gray.50',
        p: 4,
        mb: 2,
        borderRadius: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        overflow: 'break-word',
        gap: 1,
      }}
    >
      {/* ✅ Простой контейнер - пусть OptimizedImage сам считает размеры */}
      <Box
        sx={{
          width: 92,
          height: 92,
          mb: 1,
          mt: 1,
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
      <Typography variant="body1" sx={{ mb: 2 }}>
        15 лет живу в Азии. Мне есть что рассказать вам про Вьетнам!
      </Typography>

      <Button onClick={handleOpen} size="medium" variant="contained">
        Записаться
      </Button>
      <Typography variant="caption">
        Скидка 50% при бронировании до 12 декабря
      </Typography>
    </Paper>

    <Box>
      <Divider sx={{ mt: 8 }}>
        <Chip
          sx={{ backgroundColor: '#A76126', color: '#fff' }}
          label="Локация"
          size="medium"
        />
      </Divider>

      <Typography variant="h6" sx={{ mb: 2, mt: 2, textAlign: 'center' }}>
        NU Arrows Cafe | Danang
      </Typography>
      <Box sx={{ borderRadius: 2, overflow: 'hidden', boxShadow: 3 }}>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3834.365627027274!2d108.2449419!3d16.0465056!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31421727174163a7%3A0x887a34cdb1d9e813!2sNU%20ARROWS!5e0!3m2!1sru!2s!4v1765106732764!5m2!1sru!2s"
          width="100%"
          height="250"
          style={{ border: 0, display: 'block' }}
          allowFullScreen
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="Google Maps Location"
        />
      </Box>
    </Box>
  </>
);

export default SectionGuide;
