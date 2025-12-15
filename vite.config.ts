import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      includeAssets: ['logo.svg', 'vite.svg'],
      manifest: {
        name: 'My Hoi An',
        short_name: 'MyHoiAn',
        description: 'Interactive map of Hoi An',
        theme_color: '#ffffff',
        display: 'standalone',
        icons: [
          {
            src: 'pwa-192x192.png',
            sizes: '192x192',
            type: 'image/png',
          },
          {
            src: 'pwa-512x512.png',
            sizes: '512x512',
            type: 'image/png',
          },
        ],
      },
      workbox: {
        maximumFileSizeToCacheInBytes: 3000000,
        globPatterns: ['**/*.{js,css,html,ico,png,svg,woff2}'],
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/api\.mapbox\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'mapbox-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30, // 30 Days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /^https:\/\/events\.mapbox\.com\/.*/i,
            handler: 'NetworkOnly',
          },
        ],
      },
    }),
  ],
  base: '/',
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          mapbox: ['mapbox-gl'],
          ui: [
            '@mui/material',
            '@mui/icons-material',
            '@mui/system',
            '@emotion/react',
            '@emotion/styled',
          ],
          vendor: [
            'react',
            'react-dom',
            'react-router-dom',
            'i18next',
            'react-i18next',
          ],
        },
      },
    },
  },
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
