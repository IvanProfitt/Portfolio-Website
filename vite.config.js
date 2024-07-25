import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    mdx(),
    react({
      include: /\.(jsx|js|mdx|md|tsx|ts)$/,
    }),
  ],
  optimizeDeps: {
    include: ['react/jsx-runtime', 'esm-dep > cjs-dep'],
  },
  base: '/',
});
