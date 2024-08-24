import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

/// <reference types="vitest" />
export default defineConfig({
  server: {
    port: 3000,
  },
  plugins: [react()],
})
