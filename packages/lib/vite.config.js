import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  build: {
    target: 'esnext',
    cssCodeSplit: false,
  },
  plugins: [
    federation({
      name: 'my-lib',
      filename: 'remoteEntry.js',
      exposes: {
        './Button': './src/Button',
      },
      shared: ['react'],
    }),
  ],
});
