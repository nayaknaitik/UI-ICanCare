import { defineConfig } from 'vite'
import tailwindcss from '@tailwindcss/vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(),tailwindcss()],
  server: {
    fs: {
      allow: [
        'node_modules/slick-carousel/slick/fonts', // Allow slick fonts
        './' // Allow project root
      ],
    },
  },
})
