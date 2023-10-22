import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { VitePWA } from 'vite-plugin-pwa';

// https://vitejs.dev/config/
export default defineConfig({
  base: '/leo-pictograms',
  plugins: [
    react(),
    //   VitePWA({
    //     registerType: 'autoUpdate',
    //     workbox: {
    //       globPatterns: ['**/*.{js,css,html,ico,png,svg,jpg}'],
    //       maximumFileSizeToCacheInBytes: 2500000,
    //     },
    //   }),
  ],
});
