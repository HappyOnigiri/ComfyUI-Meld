/// <reference types="vitest" />
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'node:path';
import fs from 'node:fs';

const pyprojectPath = resolve(__dirname, '../pyproject.toml');
let pyprojectToml = '';
try {
  if (fs.existsSync(pyprojectPath)) {
    pyprojectToml = fs.readFileSync(pyprojectPath, 'utf-8');
  }
} catch (_e) {
  pyprojectToml = '';
}
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
  },
  test: {
    globals: true,
    environment: 'jsdom',
    setupFiles: './src/test/setup.ts',
    include: ['src/**/*.{test,spec}.{ts,tsx}'],
    alias: {
      '/scripts/api.js': resolve(__dirname, './src/test/mocks/comfyApi.ts'),
      '/scripts/app.js': resolve(__dirname, './src/test/mocks/comfyApp.ts'),
    },
    coverage: {
      provider: 'v8',
      reporter: ['text', 'json', 'html'],
      exclude: ['node_modules/', 'src/test/'],
    },
  },
});
