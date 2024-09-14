/// <reference types="vitest" />
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  test: {
    // global: true,
    environment: "jsdom",
    setupFiles: ["./vitest.setup.ts"],
  },
  plugins: [react()],
  server: {
    watch: {
      usePolling: true,
      interval: 1000,
    },
  },
});
