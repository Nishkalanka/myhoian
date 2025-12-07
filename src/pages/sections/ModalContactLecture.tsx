// ModalContact.tsx

import React from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';
import logoSvg from '../../assets/img/logo.svg';

// ⬅️ Определяем типы для пропсов
interface ModalContactProps {
  open: boolean;
  handleClose: () => void;
}

const modalStyle = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: { xs: 300, sm: 400 },
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
  textAlign: 'center',
  outline: 'none',
};

// ⬅️ Используем синтаксис React.FC для типизации компонента
const ModalContact: React.FC<ModalContactProps> = ({ open, handleClose }) => {
  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
    >
      <Box sx={modalStyle}>
        <Box
          sx={{
            textAlign: 'center',
            mb: 2,
            width: '48px',
            height: '48px',
            mx: 'auto',
          }}
        >
          <img src={logoSvg} width={48} alt="Логотип" className="logo" />
        </Box>
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Запись на лекцию!
        </Typography>
        <Typography id="modal-modal-description" variant="body2" sx={{ mt: 1 }}>
          Скидка 50% при записи<br></br> до 12 декабря!
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2, width: '100%' }}
          href="https://t.me/pashanishka" // ⬅️ Замени на реальный юзернейм
          target="_blank"
        >
          Telegram
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 2, width: '100%' }}
          href="https://wa.me/84357923401" // ⬅️ Замени на реальный юзернейм
          target="_blank"
        >
          WhatsApp
        </Button>
        <Button
          variant="contained"
          sx={{ mt: 2, width: '100%' }}
          href="https://www.instagram.com/myhoian.app/" // ⬅️ Замени на реальный юзернейм
          target="_blank"
        >
          Instagram
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalContact;
