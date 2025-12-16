import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface HeroContent {
  label: string;
  title: string;
  description: string;
  buttonText: string;
  titleSize?: { xs: string; sm: string; md: string };
}

interface SectionHeroProps {
  content: HeroContent;
  handleOpen: () => void;
}

const SectionHero: React.FC<SectionHeroProps> = ({ content, handleOpen }) => {
  const defaultTitleSize = { xs: '2xl', sm: '5xl', md: '6xl' };
  const titleSize = content.titleSize || defaultTitleSize;

  return (
    <Box
      sx={{
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
        gap: 1,
        mt: 1,
        height: '400px',
        textAlign: 'center',
      }}
    >
      <Box
        sx={{
          fontWeight: 600,
          fontSize: 'sm',
          textTransform: 'uppercase',
          letterSpacing: 0.5,
        }}
      >
        {content.label}
      </Box>

      <Typography
        component="h1"
        sx={{
          fontSize: {
            xs: titleSize.xs,
            sm: titleSize.sm,
            md: titleSize.md,
          },
          fontWeight: 900,
          textTransform: 'uppercase',
          letterSpacing: 1,
          margin: 0,
          lineHeight: 1.2,
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

      <Button onClick={handleOpen} size="small" variant="outlined">
        {content.buttonText}
      </Button>
    </Box>
  );
};

export default SectionHero;
