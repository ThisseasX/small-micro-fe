import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';

export default defineConfig({
  build: {
    manifest: true,
    lib: {
      entry: 'src/index.jsx',
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
  ],
});
