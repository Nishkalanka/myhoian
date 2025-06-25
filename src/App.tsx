import './index.css';
import { Box } from '@mui/material';
import HeroSection from './components/HeroSection';

function App() {
  return (
    <>
      <Box
        sx={{ minHeight: '100vh', display: 'flex', flexDirection: 'column' }}
      >
        <HeroSection />
      </Box>
    </>
  );
}

export default App;
