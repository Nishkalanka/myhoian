// src/pages/sections/SectionFeatures.tsx

import React from 'react';
import { Box, Typography, Grid, Paper } from '@mui/material';

// Определяем типы для данных
interface Feature {
  name: string;
  description: string;
  icon: React.ElementType;
}

// Интерфейс для пропсов
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
    }}
  >
    {features.map((feature) => {
      const IconComponent = feature.icon; // ✅ Правильно: внутри callback функции

      return (
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
                backgroundColor: '#252525',
                p: 2,
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
              <IconComponent
                sx={{
                  fontSize: 24,
                  color: 'primary',
                  mb: 0,
                }}
              />
              <Typography variant="body1" sx={{ fontWeight: 900 }}>
                {feature.name}
              </Typography>
              <Typography variant="caption">{feature.description}</Typography>
            </Paper>
          </Box>
        </Grid>
      );
    })}
  </Box>
);

export default SectionFeatures;
