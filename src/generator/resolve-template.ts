import { CliConfig } from '@app-types/cli-config.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

/**
 * Find the package root directory by looking for package.json
 */
function findPackageRoot(startDir: string): string {
    let currentDir = startDir;

    while (currentDir !== path.dirname(currentDir)) {
        const packageJsonPath = path.join(currentDir, 'package.json');
        if (fs.existsSync(packageJsonPath)) {
            return currentDir;
        }
        currentDir = path.dirname(currentDir);
    }

    throw new Error('Could not find package.json to determine package root');
}

/**
 * Resolve template directory path dynamically
 */
export function resolveTemplatePath(config: CliConfig) {
    const { language, architecture } = config;

    const __filename = fileURLToPath(import.meta.url);
    const __dirname = path.dirname(__filename);

    const templatePath = path.resolve(__dirname, '../../template', language, architecture);

    // Validate existence
    if (!fs.existsSync(templatePath)) {
        throw new Error(`Template not found for ${language}/${architecture}. Expected at: ${templatePath}`);
    }

    return templatePath;
}
