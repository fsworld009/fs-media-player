import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import { viteStaticCopy } from 'vite-plugin-static-copy';
import eslintPlugin from '@nabla/vite-plugin-eslint';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    tailwindcss(),
    react(),
    eslintPlugin(),
    viteStaticCopy({
      targets: [
        {
          src: 'manifest.json',
          dest: '.',
        },
      ],
    }),
  ],
  build: {
    outDir: 'dist',
    rollupOptions: {
      input: {
        index: './index.html',
        background: './src/background.ts',
      },
      output: {
        entryFileNames: (chunkInfo) => {
          // for background, we want fixed name and path for referencing in extension manifest
          if (chunkInfo.name === 'background') {
            return 'background.js';
          }
          // for index page, use default output naming scheme
          return 'assets/[name]-[hash].js';
        },
      },
    },
  },
});
