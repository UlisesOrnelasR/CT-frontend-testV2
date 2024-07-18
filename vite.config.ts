import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base:
    process.env.NODE_ENV === "production"
      ? "https://UlisesOrnelasR.github.io/CT-frontend-testV2/"
      : "http://localhost:5173/CT-frontend-testV2/",
});
