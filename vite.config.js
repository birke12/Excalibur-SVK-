import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


export default defineConfig({
  assetsInclude: ["**/*.JPG", "**/*.MP4"],
  plugins: [react()],
});
