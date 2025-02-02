import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    headers: {
      "X-Frame-Options": "DENY", // Bloquea la carga de iframes completamente
      "Content-Security-Policy": "frame-ancestors 'none';", // Política avanzada contra Clickjacking
    },
  },
});