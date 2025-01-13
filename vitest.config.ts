import react from "@vitejs/plugin-react";
import { defineConfig, coverageConfigDefaults } from "vitest/config";

export default defineConfig({
  plugins: [react()],
  test: {
    include: ["./src/**/*.test.tsx"],
    globals: true,
    environment: "jsdom",
    setupFiles: ["./test.setup.js"],
    coverage: {
      exclude: [
        "commitlint.config.js",
        "./example/**",
        "./src/CopyText/index.ts",
        ...coverageConfigDefaults.exclude,
      ],
    },
  },
});
