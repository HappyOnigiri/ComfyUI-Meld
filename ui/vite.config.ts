import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';
import fs from 'fs';

const pyprojectToml = fs.readFileSync(resolve(__dirname, '../pyproject.toml'), 'utf-8');
const versionMatch = pyprojectToml.match(/version\s*=\s*"([^"]+)"/);
const version = versionMatch ? versionMatch[1] : 'unknown';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
    '__APP_VERSION__': JSON.stringify(version),
  },
  build: {
    // Output JS file so ComfyUI can load it
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MeldGallery',
      formats: ['es'],
      fileName: 'gallery_extension'
    },
    outDir: '../web/js',
    emptyOutDir: false, // Avoid deleting existing files (due to viewer.js, etc.)
    rollupOptions: {
      // Externalize ComfyUI scripts
      external: [
        "/scripts/app.js",
        "/scripts/api.js",
        "../../../scripts/app.js",
        "../../../scripts/api.js",
      ],
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
