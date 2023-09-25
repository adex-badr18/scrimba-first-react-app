import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';

// https://vitejs.dev/config/
export default defineConfig({
  base: "/scrimba-first-react-app/",
  plugins: [react()],
});
