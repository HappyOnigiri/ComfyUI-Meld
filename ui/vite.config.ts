import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    // Output JS file so ComfyUI can load it
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MeldFlowGallery',
      formats: ['es'],
      fileName: 'gallery_extension'
    },
    outDir: '../web/js',
    emptyOutDir: false, // Avoid deleting existing files (due to viewer.js, etc.)
    rollupOptions: {
      // Must match "../../../scripts/app.js" used in the code
      // Adjusted to be interpreted as relative path from built file (web/js/gallery_extension.js)
      external: ["../../../scripts/app.js", "../../../scripts/api.js"],
      output: {
        // Fixed output filename
        entryFileNames: 'gallery_extension.js',
        chunkFileNames: '[name].js',
        assetFileNames: '[name].[ext]'
      }
    }
  },
  resolve: {
    alias: {
      '@': resolve(__dirname, './src')
    }
  }
});
