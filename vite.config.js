import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "webapp",
    emptyOutDir: true,
    rollupOptions: {
      output: {
        manualChunks: {
          three: ["three"],
        },
      },
    },
  },
  server: {
    port: 5173,
    open: true,
  },
});
