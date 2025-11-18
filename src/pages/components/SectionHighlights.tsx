// SectionHighlights.tsx

import React from 'react';
import { Box, Typography, Grid } from '@mui/material';

// Определяем типы для данных
interface Product {
  id: number;
  name: string;
  color: string;
  imageSrc: string;
  imageAlt: string;
}

// Интерфейс для пропсов (принимает массив products)
interface SectionHighlightsProps {
  products: Product[];
}

const SectionHighlights: React.FC<SectionHighlightsProps> = ({ products }) => (
  <Box>
    <Box sx={{ maxWidth: 'lg', mx: 'auto', px: 1, py: 6 }}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}
      >
        <Box
          sx={{
            flex: 1,
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'column',
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
            Ключевые места в фокусе
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={6} sm={6} md={3}>
            <Box
              sx={{
                position: 'relative',
                '&:hover img': { opacity: 0.75 },
              }}
            >
              <Box
                sx={{
                  height: { xs: 140, lg: 180, xl: 200 },
                  width: '100%',
                  overflow: 'hidden',
                  borderRadius: 1,
                  bgcolor: 'gray.200',
                }}
              >
                <img
                  alt={product.imageAlt}
                  src={product.imageSrc}
                  style={{
                    height: '100%',
                    width: '100%',
                    objectFit: 'cover',
                    objectPosition: 'center',
                  }}
                />
              </Box>
              <Typography variant="body1" sx={{ mt: 1, color: 'gray.700' }}>
                <Box component="span" sx={{ position: 'absolute', inset: 0 }} />
                {product.name}
              </Typography>
              <Typography variant="caption" sx={{ mt: 0.5, color: 'gray.600' }}>
                {product.color}
              </Typography>
              <Typography
                sx={{ mt: 0.5, fontWeight: 'medium', color: 'gray.900' }}
              ></Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  </Box>
);

export default SectionHighlights;
