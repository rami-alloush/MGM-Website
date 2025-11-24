import { defineConfig } from "vite";

export default defineConfig({
  build: {
    outDir: "webapp",
    emptyOutDir: true,
  },
  server: {
    port: 5173,
    open: true,
  },
});
