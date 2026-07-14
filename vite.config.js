import { defineConfig } from 'vite';
import { svelte } from '@sveltejs/vite-plugin-svelte';

export default defineConfig({
  plugins: [svelte()],

  server: {
    host: '0.0.0.0',
    port: 5173,
    strictPort: true
  },

  preview: {
    host: '0.0.0.0',
    port: 4173,
    strictPort: true
  },

  build: {
    target: 'esnext',
    sourcemap: false,
    minify: 'esbuild'
  }
});
