import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  base: "/",

  // For development (local)
  server: {
    port: 5173,
    host: true,           // allows access from other devices
    allowedHosts: true,   // allows all hosts during dev
  },

  // For production preview (what Render uses with "npm run preview")
  preview: {
    port: 4173,
    host: true,
    allowedHosts: true,                     // ← This is the most important
    // allowedHosts: ['portfolio-yqyz.onrender.com'],  // or use specific domain
  },

  build: {
    outDir: "dist",
    sourcemap: false,
    assetsInlineLimit: 4096,
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
