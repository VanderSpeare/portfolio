import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],

  // ── base: "/" works for Vercel/Netlify.
  //    Change to "/repo-name/" if deploying to GitHub Pages subdirectory.
  base: "/",

  server: {
    port: 5173,
    open: true,
    // Needed if you access via LAN (e.g. phone on same wifi)
    host: true,
  },

  build: {
    outDir: "dist",
    // Generate sourcemaps only in staging, not production
    sourcemap: false,
    // Keep assets readable in dist for debugging
    assetsDir: "assets",
    // Logo is ~72 kB so it will NOT be inlined (threshold is 4 kB)
    assetsInlineLimit: 4_096,
    rollupOptions: {
      output: {
        // Separate vendor bundle for better CDN caching
        manualChunks: {
          react: ["react", "react-dom"],
        },
      },
    },
  },
});
