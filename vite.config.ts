import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  return {
    base: env.VITE_BASE,
    plugins: [react()],
    preview: {
      port: 8080,
      open: true,
    },
    server: {
      port: 7001,
      open: true,
    },
  };
});
