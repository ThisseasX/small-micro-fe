import { defineConfig } from 'vite';
import federation from '@originjs/vite-plugin-federation';

export default defineConfig({
  build: {
    target: 'esnext',
    cssCodeSplit: false,
  },
  plugins: [
    federation({
      name: 'my-host',
      remotes: {
        'my-lib': 'http://localhost:3001/assets/remoteEntry.js',
      },
      shared: ['react'],
    }),
  ],
});
