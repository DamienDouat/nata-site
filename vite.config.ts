import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// base = sous-chemin GitHub Pages (page de projet "nata-site"). Quand on branche
// un domaine custom (servi à la racine), repasser base à "/" et rebuild.
export default defineConfig({
  base: "/nata-site/",
  plugins: [react()],
  server: { port: 8801 },
});
