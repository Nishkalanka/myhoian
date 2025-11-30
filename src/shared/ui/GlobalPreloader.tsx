// src/shared/ui/GlobalPreloader.tsx
import React, { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import logoSvg from '../../assets/img/logo.svg';

interface GlobalPreloaderProps {
  isLoading: boolean;
}

export const GlobalPreloader: React.FC<GlobalPreloaderProps> = ({
  isLoading,
}) => {
  const [shouldRender, setShouldRender] = useState(true);
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    if (!isLoading) {
      // Start fade-out
      setIsVisible(false);

      // Remove from DOM after animation completes
      const timer = setTimeout(() => {
        setShouldRender(false);
      }, 800); // Match transition duration

      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (!shouldRender) {
    return null;
  }

  return (
    <Box
      sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgb(46, 46, 57)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        visibility: isVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.6s ease-out, visibility 0.6s ease-out',
        pointerEvents: 'none', // Don't block clicks
      }}
    >
      <Box
        component="img"
        src={logoSvg}
        alt="Loading..."
        sx={{
          width: { xs: 64, sm: 80, md: 96 },
          height: 'auto',
          animation: isVisible ? 'pulse 2s ease-in-out infinite' : 'none',
          '@keyframes pulse': {
            '0%, 100%': {
              opacity: 1,
              transform: 'scale(1)',
            },
            '50%': {
              opacity: 0.7,
              transform: 'scale(1.05)',
            },
          },
        }}
      />
    </Box>
  );
};
