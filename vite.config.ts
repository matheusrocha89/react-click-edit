import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import dts from "vite-plugin-dts";
import { resolve } from "path";

export default defineConfig({
  plugins: [
    react({
      jsxRuntime: "automatic",
      jsxImportSource: "react",
    }),
    dts({
      insertTypesEntry: true,
    }),
  ],
  css: {
    modules: {
      generateScopedName: "[name]__[local]___[hash:base64:5]",
    },
  },
  build: {
    lib: {
      entry: resolve(__dirname, "src/index.ts"),
      name: "ReactClickToEdit",
      formats: ["es", "umd"],
      fileName: (format) => `click-edit.${format}.js`,
    },
    rollupOptions: {
      external: ["react", "react-dom", "react/jsx-runtime", "classnames"],
      output: {
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
          classnames: "classNames",
        },
      },
    },
  },
});
