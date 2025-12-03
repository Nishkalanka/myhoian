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
            Ключевые места в фокусе
          </Box>
        </Box>
      </Box>

      <Grid container spacing={2} sx={{ mt: 1 }}>
        {products.map((product) => (
          <Grid item key={product.id} xs={6} sm={6} md={6}>
            <Box sx={{ mb: 1 }}>
              <OptimizedImage
                src={product.imageSrc}
                alt={product.imageAlt}
                width={400}
                height={280}
                loading="lazy"
                sx={{
                  height: { xs: 140, lg: 180, xl: 200 },
                }}
              />

              <Typography variant="body1" sx={{ mt: 1 }}>
                {product.name}
              </Typography>
              <Typography sx={{ lineHeight: 1.6 }} variant="caption">
                {product.color}
              </Typography>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>

    <Box>
      <Divider sx={{ mt: 2, mb: 8 }}>
        <Chip label="и это еще далеко не все" size="medium" />
      </Divider>
    </Box>
  </Box>
);

export default SectionHighlights;
