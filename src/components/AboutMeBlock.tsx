// src/components/AboutMeBlock.tsx
import React, { useState, useEffect } from 'react';
import { Box, Typography, Avatar, Chip, Stack } from '@mui/material';

import { useTranslation } from 'react-i18next';
import profilePic from '../assets/img/profile.png';

function AboutMeBlock() {
  const { t } = useTranslation();
  // Получаем динамический массив rotatingTexts из переводов
  const translatedRotatingTexts = t('aboutMe.rotatingTexts', {
    returnObjects: true,
  }) as string[];
  // Убедимся, что это массив, и он не пустой, иначе может быть ошибка
  const textsToRotate =
    translatedRotatingTexts && translatedRotatingTexts.length > 0
      ? translatedRotatingTexts
      : ['Loading...', '...']; // Запасной вариант, если переводы еще не загрузились

  // 3) Стейт для индекса текущего текста из массива
  const [currentTextIndex, setCurrentTextIndex] = useState(0);

  // Эффект для обновления меняющегося текста каждые 3 секунды
  useEffect(() => {
    const textTimerId = setInterval(() => {
      setCurrentTextIndex(
        (prevIndex) => (prevIndex + 1) % textsToRotate.length // Используем textsToRotate
      );
    }, 3000);
    return () => clearInterval(textTimerId);
  }, [textsToRotate]); // <--- Добавляем textsToRotate в зависимости, чтобы эффект перезапускался, если массив поменяется

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        gap: 1,
        p: 2,
      }}
    >
      <Avatar
        alt={t('aboutMe.name')}
        src={profilePic}
        sx={{
          width: 140,
          height: 140,
          mb: 1,
          border: '3px solid',
          borderColor: 'primary.main',
          backgroundColor: 'primary.main',
          boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      />
      <Box
        sx={{
          pb: 1,
        }}
      >
        <Typography
          variant="h6"
          color="text.primary"
          sx={{ fontWeight: '700' }}
        >
          {t('aboutMe.name')}
        </Typography>
        <Typography variant="body2" color="text.secondary">
          {t('aboutMe.position')}
        </Typography>
      </Box>

      <Stack direction="row" spacing={1}>
        {/* t('aboutMe.skillsChips', { returnObjects: true }) возвращает массив строк */}
        {(t('aboutMe.skillsChips', { returnObjects: true }) as string[]).map(
          (skill, index) => (
            <Chip
              key={index}
              color="primary"
              label={skill}
              variant="outlined"
            />
          )
        )}
      </Stack>

      <Typography
        variant="body1"
        sx={{
          mt: 2,
          minHeight: '60px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          p: 1,
          color: 'text.secondary',
          border: '1px dashed',
          borderColor: 'divider',
          borderRadius: '5px',
        }}
      >
        {textsToRotate[currentTextIndex]}
      </Typography>
    </Box>
  );
}

export default AboutMeBlock;
