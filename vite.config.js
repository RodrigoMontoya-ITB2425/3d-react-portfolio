import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' // Importa el plugin svgr

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      svgoConfig: {
        plugins: [
          {
            name: 'removeXMLNS', // Elimina las etiquetas xmlns
            params: { xmlns: false }
          }
        ]
      }
    })
  ],
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
