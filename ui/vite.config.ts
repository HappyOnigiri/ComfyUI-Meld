import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { resolve } from 'path';

export default defineConfig({
  plugins: [react()],
  define: {
    'process.env.NODE_ENV': JSON.stringify('production'),
  },
  build: {
    // ComfyUIが読み込めるようにJSファイルを出力する
    lib: {
      entry: resolve(__dirname, 'src/index.ts'),
      name: 'MeldFlowGallery',
      formats: ['es'],
      fileName: 'gallery_extension'
    },
    outDir: '../web/js',
    emptyOutDir: false, // 既存のファイルを消さないように（viewer.jsなどがあるため）
    rollupOptions: {
      // コード内で "../../../scripts/app.js" と書いているので、ここも合わせる必要があります
      // ビルド後のファイル(web/js/gallery_extension.js)から見た相対パスとして解釈されるように調整
      external: ["../../../scripts/app.js", "../../../scripts/api.js"],
      output: {
        // 出力ファイル名を固定
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
