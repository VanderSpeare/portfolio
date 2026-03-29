import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    open: true,
  },
  build: {
    outDir: "dist",
    sourcemap: false,
    // Inline assets < 10 kB; logo is ~72 kB so it stays as a separate chunk
    assetsInlineLimit: 10_240,
    rollupOptions: {
      output: {
        // Keep vendor code separate for better caching
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
