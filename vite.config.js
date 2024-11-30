import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    chunkSizeWarningLimit: 100000000
  },
  base: "/3d-react-portfolio",
  css: {
    postcss: {
      plugins: [
        require('postcss-preset-env')({
          stage: 1, // Ajusta según lo que necesites
        }),
      ],
    },
  },
});
