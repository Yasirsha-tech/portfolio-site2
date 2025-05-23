import { defineConfig } from "vite"; // Import defineConfig
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  root: path.resolve(__dirname, "client"),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "client", "src"),
    },
  },
  build: {
    outDir: "../dist",
    emptyOutDir: true,
  },
  preview: {
    host: "0.0.0.0",
    port: 4173,
    allowedHosts: [
      "healthcheck.railway.app", // Allow Railway's health check host
      "portfolio-site-production-3809.up.railway.app", // Allow your deployed app's domain
    ],
  },
});