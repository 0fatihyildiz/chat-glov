import react from '@vitejs/plugin-react'
import { defineConfig } from 'vite'

/// <reference types="vitest" />
export default defineConfig({
	server: {
		port: 3000,
	},
	plugins: [react()],
})
