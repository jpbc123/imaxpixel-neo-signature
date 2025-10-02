import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");

  return {
    // Use root path for dev, subdirectory for production
    base: mode === 'development' ? '/' : '/imaxpixel-neo-signature/',
    server: {
      port: 8080,
    },
    plugins: [react()],
    resolve: {
      alias: {
        "@": path.resolve(__dirname, "./src"),
        "@root": path.resolve(__dirname, "./"),
      },
    },
    build: {
      outDir: 'dist',
      sourcemap: false,
      minify: "esbuild",
      // Ensure proper handling of assets
      assetsDir: "assets",
      // Generate clean URLs
      rollupOptions: {
        output: {
          manualChunks: undefined,
        }
      }
    },
  };
});