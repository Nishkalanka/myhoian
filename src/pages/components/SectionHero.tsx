// SectionHero.tsx

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

// Интерфейс для пропсов (нужен только обработчик открытия модала)
interface SectionHeroProps {
  handleOpen: () => void;
}

const SectionHero: React.FC<SectionHeroProps> = ({ handleOpen }) => (
  <Box
    sx={{
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      flexDirection: 'column',
      gap: 1,
      mt: 1,
      height: '55vh',
      textAlign: 'center',
    }}
  >
    <Box
      sx={{
        fontWeight: 600,
        fontSize: 'sx',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
      }}
    >
      Авторская экскурсия-лекция
    </Box>
    <Typography
      variant="h1"
      sx={{
        fontSize: { xs: 'xl', sm: '5xl', md: '6xl' },
        fontWeight: 900,
        textTransform: 'uppercase',
        letterSpacing: 1,
      }}
    >
      Хойан
    </Typography>
    <Typography
      variant="body2"
      sx={{
        fontSize: 'lg',
        color: 'gray.500',
        mb: 1,
      }}
    >
      Жемчужина Юго-Восточной Азии.<br></br> Cтаринный торговый порт,<br></br>{' '}
      бережно хранящий наследие веков.
    </Typography>
    <Button
      onClick={handleOpen}
      sx={{ color: '#FFBF00', borderColor: '#FFBF00' }}
      size="small"
      variant="outlined"
    >
      Напишите нам
    </Button>
  </Box>
);

export default SectionHero;
