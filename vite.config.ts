import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist',
    assetsDir: './',
    rollupOptions: {
      input: 'src/main.tsx', // adjust the entry file as per your project structure
    },
  },
  server: {
    proxy: {
      '/': {
        target: 'https://todo-server-393f0ac60da7.herokuapp.com',
        changeOrigin: true,
      },
    },
    fs: {
      strict: false,
    },
  },
});
