import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  base: '/bike-shop-spa/', // <- necessario per GitHub Pages
  plugins: [react()],
})