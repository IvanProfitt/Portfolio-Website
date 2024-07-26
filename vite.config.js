import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  plugins: [
    { enforce: 'pre', ...mdx({
      remarkPlugins: [],
      rehypePlugins: [],
    }), },
    react({ include: /\.(jsx|js|mdx|md|tsx|ts)$/ })
  ],
  optimizeDeps: {
    include: ["react/jsx-runtime"],
  },
  base: '/'
});
