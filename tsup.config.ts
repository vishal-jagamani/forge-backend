import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/cli.ts'],
    format: ['esm'],
    target: 'esnext',
    outDir: 'dist',
    clean: true,
    sourcemap: true,
    splitting: false,
    minify: true,
    external: ['node_modules'],
    banner: {
        js: '#!/usr/bin/env node',
    },
});
