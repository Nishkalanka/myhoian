// src/components/Footer.tsx
import React from 'react';
import { Box, Typography } from '@mui/material';

interface FooterProps {
  name: string;
}

const Footer: React.FC<FooterProps> = ({ name }) => {
  return (
    <Box
      component="footer"
      sx={{
        mt: 'auto', // Прижимает футер к низу, если контента мало
        py: 2, // padding-top и padding-bottom
        backgroundColor: (theme) => theme.palette.primary.main, // Цвет из нашей темы
        color: 'white',
        textAlign: 'center',
      }}
    >
      <Typography variant="body2">
        © {new Date().getFullYear()} {name}. Все права защищены.
      </Typography>
    </Box>
  );
};

export default Footer;
