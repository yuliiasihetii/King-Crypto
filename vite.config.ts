import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import svgr from "vite-plugin-svgr";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    svgr({
      include: "**/*.svg",
    }),
  ],
  root: "./",
  publicDir: "./public",
  resolve: {
    alias: {
      "@/": "./src",
      "@/assets": "/src/assets/",
      "@/app": "/src/app/",
      "@/hooks": "/src/hooks/",
      "@/pages": "/src/pages/",
      "@/styles": "/src/styles/",
      "@/store": "/src/store/",
    },
  },
});
