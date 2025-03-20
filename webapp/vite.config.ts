import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react'; // Если вы используете React

export default defineConfig({
  plugins: [react()], // Укажите плагины, которые вы используете
  build: {
    outDir: 'dist', // Убедитесь, что outDir указан как 'dist'
  },
});