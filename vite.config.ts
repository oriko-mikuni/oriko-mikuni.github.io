import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
// import cssModules from "vite-plugin-css-modules"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    chunkSizeWarningLimit: 1500,
    target: 'esnext',
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules')) {
            return 'vendor'
          }
          if (id.includes('locales')) {
            return 'locale'
          }
        }
      }
    }
  }
})
