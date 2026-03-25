import { CliConfig } from '@app-types/cli-config';
import fs from 'node:fs';
import path from 'node:path';

/**
 * Resolve template directory path
 */
export function resolveTemplatePath(config: CliConfig) {
    const { language, architecture } = config;

    // Construct relative template path
    const templatePath = path.resolve(process.cwd(), 'template', language, architecture);

    // Validate existence
    if (!fs.existsSync(templatePath)) {
        throw new Error(`Template not found for ${language}/${architecture}. Expected at: ${templatePath}`);
    }

    return templatePath;
}
