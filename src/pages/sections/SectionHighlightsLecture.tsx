import React from 'react';
import { Box, Typography, Grid, Divider, Chip } from '@mui/material';
import OptimizedImage from '../../shared/ui/OptimizedImage/OptimizedImage';

interface Product {
  id: number;
  name: string;
  color: string;
  imageSrc: string;
  imageAlt: string;
}

interface SectionHighlightsProps {
  products: Product[];
}

const SectionHighlights: React.FC<SectionHighlightsProps> = ({ products }) => (
  <Box>
    <Box sx={{ maxWidth: 'lg', mx: 'auto', pt: 6, pb: 2 }}>
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
              fontSize: 'sm',
              textTransform: 'uppercase',
              letterSpacing: 0.5,
            }}
          >
            Главные темы лекции
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={6} sm={6} md={6}>
            <Box
              sx={{
                mb: 1,
                backgroundColor: '#E7782B',
                borderRadius: '8px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
                border: '1px solid rgba(255, 255, 255, 0.12)',
              }}
            >
              <OptimizedImage
                src={product.imageSrc}
                alt={product.imageAlt}
                width={400}
                height={280}
                loading="lazy"
                sx={{
                  height: {
                    xs: 140,
                    lg: 180,
                    xl: 200,
                    borderRadius: '8px 8px 0 0',
                  },
                }}
              />

              <Typography
                variant="body2"
                sx={{ mt: 2, mb: 1, pl: 1.5, fontWeight: 600 }}
              >
                {product.name}
              </Typography>
              <Typography
                sx={{ pl: 1.5, pr: 1, pb: 2, display: 'block' }}
                variant="caption"
              >
                {product.color}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Box>
      <Divider sx={{ mt: 2, mb: 8 }}>
        <Chip
          sx={{ backgroundColor: '#252525', color: '#fff' }}
          label="и это еще далеко не все"
          size="medium"
        />
      </Divider>
    </Box>
  </Box>
);

export default SectionHighlights;
