// SectionFAQ.tsx

import React from 'react';
import { Box, Typography, Divider, Chip } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import HotelIcon from '@mui/icons-material/Hotel';
import RepeatIcon from '@mui/icons-material/Repeat';

// Компонент не принимает пропсов
const SectionFAQ: React.FC = () => (
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
      Остались вопросы ?
    </Box>

    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel1-content"
        id="panel1-header"
      >
        <Typography component="span">Программа и стоимость</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Divider sx={{ mt: 0, mb: 2 }}>
            <Chip label="Дневной Хойан ( 8:00 - 13:00 )" size="medium" />
          </Divider>
        </Box>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          1.000.000 vnd
        </Typography>
        <Typography
          variant="caption"
          sx={{ textAlign: 'center', display: 'block' }}
        >
          Билеты и питание входят в стоимость
        </Typography>

        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              8:00 - 9:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                <FastfoodIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="body1" component="div">
                Кофе / Чай
              </Typography>
              <Typography variant="caption">Старинная кофейня.</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              10:15 - 11:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="body1" component="div">
                Театр
              </Typography>
              <Typography variant="caption">
                Живое выступление вьетнамских артистов.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              11:00 - 13:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="body1" component="div">
                Хойан
              </Typography>
              <Typography variant="caption">
                Посещаем все основные и секретные места в городе
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              13:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="body1" component="div">
                Обед
              </Typography>
              <Typography variant="caption">Едим в правильном месте</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>

        <Typography variant="body1" sx={{ textAlign: 'center', mt: 2, mb: 4 }}>
          Каждому гостю в конце экскурсии подарок. Закажете дневную и вечернюю
          экскурсию - получите общую скидку 10%
        </Typography>

        <Box>
          <Divider sx={{ mt: 0, mb: 2 }}>
            <Chip label="Вечерний Хойан (16:00 - 20:00)" size="medium" />
          </Divider>
        </Box>

        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          1.500.000 vnd
        </Typography>
        <Typography
          variant="caption"
          sx={{ textAlign: 'center', display: 'block' }}
        >
          Билеты и питание входят в стоимость
        </Typography>

        <Timeline position="alternate">
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              align="right"
              variant="body2"
              color="text.secondary"
            >
              16:00 - 16:30
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                <FastfoodIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="body1" component="div">
                Кофе / Чай
              </Typography>
              <Typography variant="caption">Старинная кофейня.</Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              16:30 - 18:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="body1" component="div">
                Театр
              </Typography>
              <Typography variant="caption">
                Живое выступление вьетнамских артистов.
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              11:00 - 13:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="body1" component="div">
                Вечерний Хойан
              </Typography>
              <Typography variant="caption">
                Посещаем все основные и секретные места в городе
              </Typography>
            </TimelineContent>
          </TimelineItem>
          <TimelineItem>
            <TimelineOppositeContent
              sx={{ m: 'auto 0' }}
              variant="body2"
              color="text.secondary"
            >
              20:00
            </TimelineOppositeContent>
            <TimelineSeparator>
              <TimelineConnector />
              <TimelineDot sx={{ backgroundColor: '#FFBF00' }}>
                <LaptopMacIcon />
              </TimelineDot>
              <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent sx={{ py: '12px', px: 2 }}>
              <Typography variant="body1" component="div">
                Обед
              </Typography>
              <Typography variant="caption">Едим в правильном месте</Typography>
            </TimelineContent>
          </TimelineItem>
        </Timeline>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography component="span">Индивидуальное предложение</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Divider sx={{ mt: 0, mb: 2 }}>
            <Chip label="Ваш личный гид" size="medium" />
          </Divider>
        </Box>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          400.000 vnd
        </Typography>
        <Typography
          variant="caption"
          sx={{ textAlign: 'center', display: 'block', mb: 2 }}
        >
          Стоимость в час
        </Typography>
        <Typography variant="h6" sx={{ mb: 1, textAlign: 'left' }}>
          Преимущества
        </Typography>
        <Typography variant="body2" sx={{ mb: 1, textAlign: 'left' }}>
          Передвижение на скутере в любую локацию! Комбинированные виды
          экскурсии. Индивидуальный подход. Экспертная помощь в выборе сувениров
          (поверьте это имеет смысл)
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        <Typography component="span">Трансфер</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Box>
          <Divider sx={{ mt: 0, mb: 2 }}>
            <Chip label="Из Дананга" size="medium" />
          </Divider>
        </Box>
        <Typography variant="h4" sx={{ textAlign: 'center' }}>
          400.000 vnd
        </Typography>
        <Typography
          variant="caption"
          sx={{ textAlign: 'center', display: 'block', mb: 2 }}
        >
          Туда-обратно
        </Typography>
      </AccordionDetails>
    </Accordion>
  </>
);

export default SectionFAQ;
