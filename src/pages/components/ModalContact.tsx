// ModalContact.tsx

import React from 'react';
import { Box, Typography, Button, Modal } from '@mui/material';

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
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: 2,
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
        <Typography id="modal-modal-title" variant="h6" component="h2">
          Напишите нам в Telegram!
        </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
          Чтобы связаться с Павлом и забронировать экскурсию, пожалуйста,
          перейдите в Telegram.
        </Typography>
        <Button
          variant="contained"
          sx={{ mt: 2 }}
          href="https://t.me/yourtelegramusername" // ⬅️ Замени на реальный юзернейм
          target="_blank"
        >
          Открыть Telegram
        </Button>
      </Box>
    </Modal>
  );
};

export default ModalContact;
