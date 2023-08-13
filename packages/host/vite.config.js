import { defineConfig } from 'vite';
import { viteExternalsPlugin } from 'vite-plugin-externals';

export default defineConfig({
  plugins: [
    viteExternalsPlugin({
      react: 'React',
      'react-dom': 'ReactDOM',
    }),
  ],
});
