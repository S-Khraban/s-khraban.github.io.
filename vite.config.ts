import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',              // ✅ обов’язково для user-site (корінь домену)
  plugins: [react()],
  build: {
    outDir: 'docs',       // ✅ білд у /docs — GitHub Pages читає саме цю папку
  },
})
