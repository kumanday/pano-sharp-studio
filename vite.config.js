import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'app/static/dist',
    emptyOutDir: true,
    sourcemap: false,
    rollupOptions: {
      input: 'frontend/splat-viewer.js',
      output: {
        entryFileNames: 'splat-viewer.js',
        chunkFileNames: 'splat-viewer-[hash].js',
        assetFileNames: 'splat-viewer-[name][extname]',
      },
    },
  },
});
