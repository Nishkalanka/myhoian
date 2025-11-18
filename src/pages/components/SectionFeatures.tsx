// SectionFeatures.tsx

import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu'; // Используем этот импорт

// Определяем типы для данных
interface Feature {
  name: string;
  description: string;
  icon: typeof MenuIcon;
}

// Интерфейс для пропсов (принимает массив features)
interface SectionFeaturesProps {
  features: Feature[];
}

const SectionFeatures: React.FC<SectionFeaturesProps> = ({ features }) => (
  <Box
    sx={{
      mt: 4,
      maxWidth: 'lg',
      mx: 'auto',
      display: 'grid',
      gridTemplateColumns: { xs: '1fr 1fr 1fr', md: '1fr 1fr 1fr' },
      gap: 2,
      textAlign: 'center',
      px: 1,
    }}
  >
    {features.map((feature) => (
      <Grid item xs={12} sm={12} key={feature.name}>
        <Box
          sx={{
            border: (theme) => `1px solid ${theme.palette.divider}`,
            borderRadius: 2,
            boxShadow: 1,
          }}
        >
          <Paper
            elevation={0}
            sx={{
              pt: 6,
              border: 'none',
              backgroundColor: 'gray.50',
              p: 1,
              borderRadius: 2,
              height: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
              overflow: 'break-word',
              gap: 1,
            }}
          >
            <Typography variant="body1" sx={{ fontWeight: 900 }}>
              {feature.name}
            </Typography>
            <Typography variant="caption">{feature.description}</Typography>
          </Paper>
        </Box>
      </Grid>
    ))}
  </Box>
);

export default SectionFeatures;
