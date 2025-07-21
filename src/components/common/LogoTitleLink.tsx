// src/components/common/LogoTitleLink.tsx
import React, { useCallback } from 'react';
import { Box, Typography, useTheme } from '@mui/material';
import { useTranslation } from 'react-i18next';

interface LogoTitleLinkProps {
  logoSrc: string;
  onClick: () => void;
}

const LogoTitleLink: React.FC<LogoTitleLinkProps> = ({ logoSrc, onClick }) => {
  const { t } = useTranslation();
  const theme = useTheme();
  const handleClick = useCallback(() => {
    onClick();
  }, [onClick]);

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        cursor: 'pointer',
        '&:hover': {
          opacity: 0.8,
        },
        flexShrink: 0,
        mr: 'auto',
      }}
      onClick={handleClick}
    >
      <img
        src={logoSrc}
        alt={t('logoAltText')} // Добавим alt-текст для доступности
        style={{
          width: 'auto',
          height: '36px',
          display: 'block',
          marginRight: theme.spacing(1),
        }}
      />
      <Typography
        variant="body2"
        component="span"
        sx={{
          fontWeight: 600,
          whiteSpace: 'nowrap',
        }}
      >
        {t('logoTitle')}
      </Typography>
    </Box>
  );
};

export default LogoTitleLink;
