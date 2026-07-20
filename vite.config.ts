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
        'meta-estate-planning-lp': './meta-estate-planning-lp.html',
        'probate-lawyer-lp': './probate-lawyer-lp/index.html',
        'privacy-policy': './privacy-policy/index.html',
        'terms-of-service': './terms-of-service/index.html'
      }
    }
  },
  css: {
    postcss: {
      plugins: [tailwind()],
    },
  },
});
