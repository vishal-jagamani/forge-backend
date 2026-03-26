import { GENERATOR_CONSTANTS } from '@constants/generator.constants.js';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Replace placeholders in all text files
 */
export function replacePlaceholders(dir: string, replacements: Record<string, string>) {
    const entries = fs.readdirSync(dir, { withFileTypes: true });

    for (const entry of entries) {
        const filePath = path.join(dir, entry.name);

        // Skip unwanted directories
        if (entry.isDirectory()) {
            if (GENERATOR_CONSTANTS.IGNORED_DIRS.includes(entry.name as (typeof GENERATOR_CONSTANTS.IGNORED_DIRS)[number])) continue;

            replacePlaceholders(filePath, replacements);
            continue;
        }

        if (GENERATOR_CONSTANTS.IGNORED_FILES.includes(entry.name as (typeof GENERATOR_CONSTANTS.IGNORED_FILES)[number])) continue;

        if (!isTextFile(filePath)) continue;

        const stats = fs.statSync(filePath);
        if (stats.size === 0) continue;

        try {
            let content = fs.readFileSync(filePath, 'utf-8');

            for (const [key, value] of Object.entries(replacements)) {
                const pattern = new RegExp(`{{${key}}}`, 'g');
                content = content.replace(pattern, value);
            }

            if (content.includes('{{')) {
                console.warn(`⚠️ Unresolved placeholder in: ${filePath}`);
            }

            const tempPath = filePath + '.tmp';
            fs.writeFileSync(tempPath, content);
            fs.renameSync(tempPath, filePath);
        } catch {
            console.warn(`⚠️ Skipping file: ${filePath}`);
        }
    }
}

/**
 * Basic check for text files
 */
function isTextFile(filePath: string) {
    const ext = path.extname(filePath).toLowerCase();

    const allowed = new Set(GENERATOR_CONSTANTS.ALLOWED_EXTENSIONS);

    return allowed.has(ext as (typeof GENERATOR_CONSTANTS.ALLOWED_EXTENSIONS)[number]);
}
