import react from "@vitejs/plugin-react-swc";
import path from "path";
import { defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      pages: path.join(__dirname, "src/pages"),
      components: path.join(__dirname, "src/components"),
      utils: path.join(__dirname, "src/utils"),
      types: path.join(__dirname, "src/types"),
      partials: path.join(__dirname, "src/partials"),
    },
  },
  server: {
    proxy: {
      "/api": {
        target: "http://localhost:4000/api",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
