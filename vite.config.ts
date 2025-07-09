import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  server: {
    host: true,
    // port: 3000, // <-- УДАЛЯЕМ ЭТУ СТРОКУ! Позволяем Vite выбрать свободный порт
    proxy: {
      '/.netlify/functions': {
        target: 'http://localhost:8888', // Порт функций остается 8888
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/\.netlify\/functions/, ''),
      },
    },
  },
});
