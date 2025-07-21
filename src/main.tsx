import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './i18n.ts';

import CssBaseline from '@mui/material/CssBaseline'; // Для сброса базовых стилей CSS
import { ThemeContextProvider } from './contexts/ThemeContexts';

ReactDOM.createRoot(document.getElementById('root')!).render(
  <ThemeContextProvider>
    <CssBaseline />
    <App />
  </ThemeContextProvider>
);
