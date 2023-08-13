import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';
import cssInjectedByJsPlugin from 'vite-plugin-css-injected-by-js';

export default defineConfig({
  build: {
    lib: {
      entry: 'src/index.jsx',
      fileName: 'index',
      formats: ['umd'],
      name: 'Components',
    },
  },
  define: {
    'process.env.NODE_ENV': '"production"',
  },
  plugins: [
    viteExternalsPlugin({
      react: 'React',
      'react-dom': 'ReactDOM',
    }),
    cssInjectedByJsPlugin(),
  ],
});
