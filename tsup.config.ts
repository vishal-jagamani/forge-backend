import { defineConfig } from 'tsup';

export default defineConfig({
    entry: ['src/cli.ts'],
    format: ['cjs'],
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
