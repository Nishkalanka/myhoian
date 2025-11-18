// SectionFAQ.tsx

import React from 'react';
import { Box, Typography } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';

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
        <Typography component="span">Стоимость</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel2-content"
        id="panel2-header"
      >
        <Typography component="span">Программа</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
    <Accordion>
      <AccordionSummary
        expandIcon={<ArrowDropDownIcon />}
        aria-controls="panel3-content"
        id="panel3-header"
      >
        <Typography component="span">Чего-то еще</Typography>
      </AccordionSummary>
      <AccordionDetails>
        <Typography>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          malesuada lacus ex, sit amet blandit leo lobortis eget.
        </Typography>
      </AccordionDetails>
    </Accordion>
  </>
);

export default SectionFAQ;
