import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@pages": "/src/ui/pages",
      "@providers": "/src/providers",
      "@organisms": "/src/ui/organisms",
    },
  },
});
