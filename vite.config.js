import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    outDir: 'app/static/dist',
    emptyOutDir: true,
    lib: {
      entry: 'frontend/splat-viewer.js',
      formats: ['es'],
      fileName: () => 'splat-viewer.js',
    },
    sourcemap: false,
  },
});
