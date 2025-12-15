// src/pages/sections/SectionGuide.tsx

import React from 'react';
import {
  Box,
  Typography,
  Button,
  Paper,
  Divider,
  Chip,
  Stack,
} from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';
import IconButton from '@mui/material/IconButton';

// Интерфейс для пропсов
interface SectionGuideProps {
  profilePicture: string;
  handleOpen: () => void;
}

const SectionGuide: React.FC<SectionGuideProps> = ({ handleOpen }) => (
  <>
    <Box>
      <Divider sx={{ mt: 8, mb: 2 }}>
        <Chip label="Наши другие предложения" size="medium" />
      </Divider>
    </Box>

    <Paper
      elevation={0}
      sx={{
        border: 'none',
        backgroundImage: `url(/img/tours/bg.webp)`,
        backgroundPosition: 'center 0px',
        backgroundSize: 'cover',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#040c19',
        pt: 4,
        borderRadius: 2,
        height: '420px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        justifyContent: 'flex-start',
        overflow: 'break-word',
        gap: 1,
        mb: 2,
      }}
    >
      <Typography
        variant="body2"
        sx={{
          textTransform: 'uppercase',
        }}
      >
        Авторская экскурсия-лекция
      </Typography>

      <Typography
        variant="h3"
        sx={{
          fontWeight: 900,
          textTransform: 'uppercase',
        }}
      >
        Хойан
      </Typography>
      <Typography variant="body2" sx={{ width: '70%', mb: 1 }}>
        Жемчужина Юго-Восточной Азии. Старинный торговый порт, бережно хранящий
        наследие веков.
      </Typography>
      <Button onClick={handleOpen} size="small" variant="contained">
        Подробнее
      </Button>
    </Paper>

    <Box>
      <Divider sx={{ mt: 8, mb: 0 }}>
        <Chip label="Подписывайтесь на нас" size="medium" />
      </Divider>
    </Box>
    <Box sx={{ textAlign: 'center', pt: 2 }}>
      <Stack direction="row" sx={{ justifyContent: 'center' }} spacing={2}>
        <IconButton
          component="a"
          href="https://www.instagram.com/myhoian.app/"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'inherit' }}
        >
          <InstagramIcon />
        </IconButton>
        <IconButton
          component="a"
          href="https://t.me/pashanishka"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'inherit' }}
        >
          <TelegramIcon />
        </IconButton>
      </Stack>
    </Box>
  </>
);

export default SectionGuide;
