import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "client"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
      "@shared": path.resolve(__dirname, "../shared"),
      "@assets": path.resolve(__dirname, "../attached_assets"),
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  preview: {
    host: "0.0.0.0", // Ensure the server is accessible externally
    port: 4173, // Default port for Vite preview
    allowedHosts: ["healthcheck.railway.app"], // Allow Railway's health check host
  },
});