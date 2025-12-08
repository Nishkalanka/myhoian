import React from 'react';
import { Box, Typography, Button } from '@mui/material';

interface HeroContent {
  time: string;
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
        gap: 0,
        mt: 0.5,
        height: '410px',
        textAlign: 'center',
      }}
    >
      <Typography
        variant="body1"
        sx={{ mb: 0, textTransform: 'uppercase', fontWeight: 600 }}
      >
        {content.time}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontSize: 'lg',
          color: 'gray.500',
          textTransform: 'uppercase',
          mb: 0,
          width: '100%',
        }}
      >
        {content.label}
      </Typography>

      <Typography
        component="h1"
        sx={{
          fontSize: {
            xs: titleSize.xs,
            sm: titleSize.sm,
            md: titleSize.md,
          },
          fontWeight: 600,

          textTransform: 'uppercase',
          letterSpacing: 1,
          margin: 0,
          lineHeight: 1.1,
        }}
      >
        {content.title}
      </Typography>

      <Typography
        variant="body2"
        sx={{
          fontSize: 'lg',
          color: 'gray.500',
          textTransform: 'uppercase',
          mb: 1,
          width: '100%',
        }}
      >
        {content.description}
      </Typography>

      <Button
        onClick={handleOpen}
        sx={{
          borderColor: '#252525',
          backgroundColor: '#252525',
          color: '#fff',
        }}
        size="medium"
        variant="outlined"
      >
        {content.buttonText}
      </Button>
    </Box>
  );
};

export default SectionHero;
