import { defineConfig } from 'vite';
import tsconfigPaths from 'vite-tsconfig-paths';
import react from '@vitejs/plugin-react-swc';
import mkcert from 'vite-plugin-mkcert';

export default defineConfig({
  base: '/SUPERAPP/', // Убедитесь, что здесь указан правильный base URL для GitHub Pages
  plugins: [
    react(),
    tsconfigPaths(),
    process.env.HTTPS && mkcert(),
  ],
  publicDir: './public',
  server: {
    host: true,
  },
});
