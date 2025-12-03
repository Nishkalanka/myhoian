// shared/ui/OptimizedImage/OptimizedImage.tsx

import React, { useState } from 'react';
import { Box, Skeleton } from '@mui/material';

interface OptimizedImageProps {
  src?: string; // ✅ Может быть undefined
  alt: string;
  width?: number;
  height?: number;
  loading?: 'lazy' | 'eager';
  sx?: object;
}

const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src = '', // ✅ Default пустая строка
  alt,
  width = 600,
  height = 400,
  loading = 'lazy',
  sx,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(false);

  // ✅ Валидация - проверяем что src не пуст
  const getImagePath = (imageSrc: string) => {
    if (!imageSrc) return '';

    if (imageSrc.includes('/')) {
      return `/img/${imageSrc}`;
    }

    return `/img/pictures/${imageSrc}`;
  };

  const originalSrc = getImagePath(src);

  // ✅ Если нет пути - показываем ошибку
  if (!originalSrc) {
    return (
      <Box
        sx={{
          width: '100%',
          paddingBottom: `${(height / width) * 100}%`,
          bgcolor: 'gray.300',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          color: 'text.secondary',
          ...sx,
        }}
      >
        Картинка не найдена
      </Box>
    );
  }

  const webpSrc = originalSrc.replace(/\.(jpg|jpeg|png)$/i, '.webp');
  const aspectRatio = height / width;

  return (
    <Box
      sx={{
        position: 'relative',
        width: '100%',
        paddingBottom: `${aspectRatio * 100}%`,
        overflow: 'hidden',
        borderRadius: 1,
        bgcolor: 'gray.200',
        ...sx,
      }}
    >
      {isLoading && (
        <Skeleton
          variant="rectangular"
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
          }}
        />
      )}

      <picture
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
        }}
      >
        <source srcSet={webpSrc} type="image/webp" />
        <source srcSet={originalSrc} />
        <img
          src={originalSrc}
          alt={alt}
          loading={loading}
          decoding="async"
          onLoad={() => setIsLoading(false)}
          onError={() => {
            setIsLoading(false);
            setError(true);
          }}
          style={{
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: 'center',
            display: 'block',
            opacity: isLoading ? 0 : 1,
            transition: 'opacity 300ms ease-in-out',
          }}
        />
      </picture>

      {error && (
        <Box
          sx={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            bgcolor: 'gray.300',
            fontSize: 'small',
            color: 'text.secondary',
          }}
        >
          Ошибка загрузки
        </Box>
      )}
    </Box>
  );
};

export default OptimizedImage;
