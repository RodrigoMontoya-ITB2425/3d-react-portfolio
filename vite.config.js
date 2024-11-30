import { defineConfig } from 'vite';  // Asegúrate de importar esta función correctamente
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/Portfolio/',  // El subdirectorio para el despliegue en GitHub Pages
  plugins: [react()],
  build: {
    manifest: true, // Asegura que se genere el manifiesto
    rollupOptions: {
      input: './index.html',
    },
  },
});
