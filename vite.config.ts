import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import legacy from "@vitejs/plugin-legacy";
import { resolve } from "path";
import svgr from "vite-plugin-svgr";

export default defineConfig({
  plugins: [
    svgr(
      {
        exportAsDefault: true,
        include: "**/*.svg"
      }
    ),
    react(),
    legacy({
      targets: ["defaults"]
    })
  ],
  resolve: {
    alias: {
      "~": resolve(__dirname, "src")
    }
  },
  server: {
    proxy: {
      "/api": {
        target: "http://dev.carrtell.co/api",
        changeOrigin: true,
        rewrite: path => path.replace(/^\/api/, "")
      }
    }
  }
});