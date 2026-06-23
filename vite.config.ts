import { defineConfig } from "vite";
import path from "path";
import tailwindcss from "@tailwindcss/vite";
import react from "@vitejs/plugin-react";

function figmaAssetResolver() {
  return {
    name: "figma-asset-resolver",
    resolveId(id) {
      if (id.startsWith("figma:asset/")) {
        const filename = id.replace("figma:asset/", "");
        return path.resolve(__dirname, "src/assets", filename);
      }
    },
  };
}

export default defineConfig({
  // ✅ Ensures assets load correctly on Netlify and local builds
  base: "./",

  // ✅ Defines build output folder for Netlify
  build: {
    outDir: "dist",
    emptyOutDir: true,
  },

  plugins: [figmaAssetResolver(), react(), tailwindcss()],

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },

  // ✅ Supports raw imports for SVG and CSV only
  assetsInclude: ["**/*.svg", "**/*.csv"],
});
