import { CliConfig } from '@app-types/cli-config.js';
import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const __dirname = path.dirname(fileURLToPath(import.meta.url));

/**
 * Resolve template directory path
 */
export function resolveTemplatePath(config: CliConfig) {
    const { language, architecture } = config;

    // Construct relative template path
    const templatePath = path.resolve(__dirname, '../../template', language, architecture);

    // Validate existence
    if (!fs.existsSync(templatePath)) {
        throw new Error(`Template not found for ${language}/${architecture}. Expected at: ${templatePath}`);
    }

    return templatePath;
}
