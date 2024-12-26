import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vite.dev/config/
export default defineConfig({
  plugins: [svgr(), react()],
  build: {
    rollupOptions: {
      input: {
        main: "index.html",
      },
    },
  },
  resolve: {
    alias: {
      "@": "/src",
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://3.38.176.228:8080",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
      "/chat/": {
        target: "http://172.16.18.217:8765",
        changeOrigin: true,
        secure: false,
        ws: true,
      },
    },
  },
});
