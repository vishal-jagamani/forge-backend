import fs from 'node:fs';
import path from 'node:path';

/**
 * Recursively copy template files
 */
export function copyTemplate(srcDir: string, destDir: string) {
    const entries = fs.readdirSync(srcDir, { withFileTypes: true });

    for (const entry of entries) {
        const srcPath = path.join(srcDir, entry.name);
        const destPath = path.join(destDir, entry.name);

        if (entry.name === 'node_modules') continue;

        if (entry.isDirectory()) {
            // Create directory
            fs.mkdirSync(destPath, { recursive: true });
            // Recursively copy
            copyTemplate(srcPath, destPath);
        } else {
            // Copy file
            fs.copyFileSync(srcPath, destPath);
        }
    }
}
