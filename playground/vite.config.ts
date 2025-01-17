import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@nobrainers/react-click-edit": path.resolve(
        __dirname,
        "../src/index.ts"
      ),
    },
  },
  server: {
    watch: {
      ignored: ["!**/src/**"],
    },
  },
});
