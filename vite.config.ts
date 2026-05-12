import react from "@vitejs/plugin-react";
import tailwind from "tailwindcss";
import { defineConfig } from "vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: "./",
  build: {
    rollupOptions: {
      input: {
        main: './index.html',
        'thank-you': './thank-you.html',
        'meta-estate-planning-lp': './meta-estate-planning-lp.html'
      }
    }
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
