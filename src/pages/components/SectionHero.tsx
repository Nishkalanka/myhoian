// SectionHero.tsx

import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface HeroContent {
  label: string;
  title: string;
  description: string;
  buttonText: string;
}

interface SectionHeroProps {
  content: HeroContent;
  handleOpen: () => void;
}

const SectionHero: React.FC<SectionHeroProps> = ({ content, handleOpen }) => (
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
      {content.label}
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
      {content.title}
    </Typography>
    <Typography
      variant="body2"
      sx={{
        fontSize: 'lg',
        color: 'gray.500',
        mb: 1,
        width: '70%',
      }}
    >
      {content.description}
    </Typography>
    <Button onClick={handleOpen} sx={{}} size="small" variant="outlined">
      {content.buttonText}
    </Button>
  </Box>
);

export default SectionHero;
