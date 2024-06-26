import { defineConfig } from "vite";
import { resolve } from "path";

/** @type {import('vite').UserConfig} */
export default defineConfig({
    build: {
        outDir: "./dist",
        rollupOptions: {
            input: resolve(__dirname, 'index.html'),
        },
    },
    server: {
        port: 3000,
        open: true
    },
});