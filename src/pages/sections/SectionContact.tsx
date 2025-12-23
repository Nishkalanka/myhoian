import { Box, Stack, IconButton } from '@mui/material';
import WhatsAppIcon from '@mui/icons-material/WhatsApp';
import InstagramIcon from '@mui/icons-material/Instagram';
import TelegramIcon from '@mui/icons-material/Telegram';

const SectionContact: React.FC = () => {
  return (
    <Box sx={{ textAlign: 'center', pt: 6 }}>
      <Stack direction="row" sx={{ justifyContent: 'center' }} spacing={2}>
        <IconButton
          component="a"
          href="https://wa.me/84357923401"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'inherit' }}
        >
          <WhatsAppIcon />
        </IconButton>
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
          href="https://t.me/natalya_olegovna"
          target="_blank"
          rel="noopener noreferrer"
          sx={{ color: 'inherit' }}
        >
          <TelegramIcon />
        </IconButton>
      </Stack>
    </Box>
  );
};
export default SectionContact;
