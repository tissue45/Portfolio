import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig(({ mode }) => ({
  // GitHub Pages(project site)에서 정적 리소스 404를 방지하기 위한 base 경로
  base: mode === 'production' ? '/Portfolio/' : '/',
  plugins: [react()],
  build: {
    target: 'es2015',
    minify: 'terser',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-ga4'],
          animations: ['framer-motion', 'gsap'],
          ui: ['lucide-react', 'react-type-animation']
        }
      }
    }
  },
  optimizeDeps: {
    include: ['react', 'react-dom', 'framer-motion', 'lucide-react']
  },
  server: {
    host: true,
    port: 5173
  }
}))
