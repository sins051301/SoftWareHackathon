import {defineConfig} from 'vite';
import react from '@vitejs/plugin-react';
import svgr from 'vite-plugin-svgr';

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
      },
    },
  },
  resolve: {
    alias: {
      '@': '/src',
      '@assets': '/src/assets',
      '@components': '/src/components',
      '@constant': '/src/constant',
      '@hooks': '/src/hooks',
      '@pages': '/src/pages',
      '@services': '/src/services',
      '@store': '/src/store',
      '@utils': '/src/utils',
      '@types': '/src/types',
    },
  },
  server: {
    proxy: {
      '/api': {
        target: 'http://3.38.176.228:8080',
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      '/ai/': {
        target: 'http://172.16.18.217:8765',
        rewrite: (path) => path.replace(/^\/ai/, ''),
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
