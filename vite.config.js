import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tailwindcss from '@tailwindcss/vite'

// Konfigurasi modern untuk Vite v8 + Tailwind v4
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})