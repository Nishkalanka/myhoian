// src/components/header/WelcomeDialog.tsx
import React from 'react';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  Stack,
  Typography,
  IconButton,
  Box,
  Link,
  useTheme, // Может потребоваться для boxShadow или других стилей
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import TelegramIcon from '@mui/icons-material/Telegram';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import EmailIcon from '@mui/icons-material/Email';
import { useTranslation } from 'react-i18next';

interface WelcomeDialogProps {
  open: boolean;
  onClose: () => void;
  dialogImage: string;
  telegramLink: string;
  whatsappLink: string;
  emailLink: string;
}

const WelcomeDialog: React.FC<WelcomeDialogProps> = ({
  open,
  onClose,
  dialogImage,
  telegramLink,
  whatsappLink,
  emailLink,
}) => {
  const { t } = useTranslation();
  const theme = useTheme();

  return (
    <Dialog
      open={open}
      onClose={onClose}
      aria-labelledby="welcome-dialog-title"
      maxWidth="xs"
      fullWidth
    >
      <DialogTitle id="welcome-dialog-title">
        <Stack
          direction="row"
          justifyContent="space-between"
          alignItems="center"
        >
          <Typography variant="h6">{t('welcomeDialogTitle')}</Typography>
          <IconButton
            edge="end"
            color="inherit"
            onClick={onClose}
            aria-label="close"
          >
            <CloseIcon />
          </IconButton>
        </Stack>
      </DialogTitle>
      <DialogContent sx={{ textAlign: 'center' }} dividers>
        <Box
          component="img"
          src={dialogImage}
          alt="Welcome Dragon"
          sx={{
            display: 'block',
            margin: '0 auto 16px auto',
            maxWidth: 'auto',
            height: '72px',
            objectFit: 'contain',
          }}
        />

        <Typography sx={{ mb: 1 }} variant="h6">
          {t('welcomeDialogMessage')}
        </Typography>
        <Typography sx={{ mb: 1 }} variant="body1">
          {t('thankYouMessage')}
        </Typography>
        <Stack
          direction="row"
          spacing={2}
          justifyContent="center"
          sx={{ mt: 3 }}
        >
          {/* Telegram */}
          <Link
            href={telegramLink}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <IconButton color="primary" aria-label="Telegram">
              <TelegramIcon fontSize="large" />
            </IconButton>
          </Link>

          {/* WhatsApp */}
          <Link
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <IconButton color="primary" aria-label="WhatsApp">
              <WhatsAppIcon fontSize="large" />
            </IconButton>
          </Link>

          {/* Email */}
          <Link
            href={emailLink}
            target="_blank"
            rel="noopener noreferrer"
            color="inherit"
          >
            <IconButton color="primary" aria-label="Email">
              <EmailIcon fontSize="large" />
            </IconButton>
          </Link>
        </Stack>
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          {t('welcomeClose')}
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default WelcomeDialog;
