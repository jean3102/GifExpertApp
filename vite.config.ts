import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react';

export default defineConfig(() => ({
	plugins: [react()],
	test: {
		globals: true,
		environment: 'jsdom', // Use jsdom for testing React components
		setupFiles: './setupTests.ts', // Path to your setup file
	},
}));
