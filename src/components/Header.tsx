import React from 'react';
import { AppBar, Toolbar, Typography, Container } from '@mui/material';

interface HeaderProps {
  name: string;
}

const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <AppBar>
      <Container>
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            {name}
          </Typography>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Header;
