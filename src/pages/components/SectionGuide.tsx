// SectionGuide.tsx

import React from 'react';
import { Box, Typography, Button, Paper, Avatar } from '@mui/material';

// Интерфейс для пропсов
interface SectionGuideProps {
  profilePicture: string;
  handleOpen: () => void;
}

const SectionGuide: React.FC<SectionGuideProps> = ({
  profilePicture,
  handleOpen,
}) => (
  <>
    <Box
      sx={{
        fontWeight: 600,
        fontSize: 'sx',
        textTransform: 'uppercase',
        letterSpacing: 0.5,
        textAlign: 'center',
        mb: 2,
      }}
    >
      Опытный гид
    </Box>
    <Paper
      elevation={0}
      sx={{
        border: 'none',
        backgroundColor: 'gray.50',
        p: 4,
        mb: 6,
        borderRadius: 2,
        height: '100%',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'center',
        overflow: 'break-word',
        gap: 1,
      }}
    >
      <Avatar
        src={profilePicture}
        sx={{
          width: 92,
          height: 92,
          mb: 1,
          border: '2px solid',
          borderColor: '#FFBF00',
          backgroundColor: '#FFBF00',
          boxShadow: 'inset 2px 2px 4px rgba(0, 0, 0, 0.3)',
        }}
      />
      <Typography variant="h6" sx={{ fontWeight: 900 }}>
        Павел
      </Typography>
      <Typography variant="body2">Профессиональный гид</Typography>
      <Typography variant="caption" sx={{ mb: 2 }}>
        Лучший способ понять культурное наследие Хойана совершить пешеходную
        экскурсию с опытным гидом!
      </Typography>

      <Button
        onClick={handleOpen}
        sx={{ color: '#FFBF00', borderColor: '#FFBF00' }}
        size="small"
        variant="outlined"
      >
        Бесплатная консультация
      </Button>
    </Paper>
  </>
);

export default SectionGuide;
