import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": "/src/pages",
      "@providers": "/src/providers",
      "@components": "/src/components",
      "@utils": "/src/utils",
      "@constants": "/src/constants",
    },
  },
});
