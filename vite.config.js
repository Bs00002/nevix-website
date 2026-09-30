import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [tailwindcss(), react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          "react-vendor": ["react", "react-dom"],
          "gsap-vendor": ["gsap", "@gsap/react"],
          "three-core": ["three"],
          "r3f-vendor": ["@react-three/fiber", "@react-three/drei"],
        },
      },
    },
  },
});
