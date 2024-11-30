import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import svgr from 'vite-plugin-svgr' // Importa el plugin svgr
import postcssPresetEnv from 'postcss-preset-env' // Asegúrate de importar esto de manera explícita

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
    chunkSizeWarningLimit: 100000000,
    // Si estás construyendo para un proyecto en una subcarpeta, asegúrate de que la base esté configurada correctamente.
    // Esto afectará las rutas de los assets durante la construcción.
    outDir: 'dist', // Directorio de salida de la construcción
  },
  base: "/3d-react-portfolio/", // Esto asegura que se sirva desde una subcarpeta específica
  css: {
    postcss: {
      plugins: [
        postcssPresetEnv({
          stage: 1, // Ajusta según lo que necesites
        }),
      ],
    },
  },
});
