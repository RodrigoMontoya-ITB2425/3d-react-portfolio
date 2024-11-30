import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/Portfolio/', // Adjust based on your project path
  plugins: [react()],
  server: {
    port: 3000,
  },
})
