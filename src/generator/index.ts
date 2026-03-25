import { CliConfig } from '@app-types/cli-config';
import fs from 'node:fs';
import path from 'node:path';
import { resolveTemplatePath } from './resolve-template';
import { copyTemplate } from './copy-template';
import { replacePlaceholders } from './replace-placeholders';

/**
 * Main generator function
 */
export async function generateProject(config: CliConfig) {
    const { projectName } = config;

    console.log('\n📦 Generating project...\n');

    const targetDir = path.resolve(process.cwd(), projectName);

    if (fs.existsSync(targetDir)) {
        throw new Error(`Directory "${targetDir}" already exists. Please choose a different name.`);
    }

    fs.mkdirSync(targetDir, { recursive: true });

    console.log(`📁 Created directory: ${targetDir}`);

    const templateDir = resolveTemplatePath(config);

    console.log(`📂 Using template: ${templateDir}`);

    console.log('📄 Copying template files...');

    // Step 3: Copy files
    copyTemplate(templateDir, targetDir);

    console.log('📄 Template files copied successfully');

    console.log('✨ Replacing placeholders...');

    // Step 4: Replace placeholders
    replacePlaceholders(targetDir, {
        projectName,
    });

    console.log('✨ Placeholders replaced');

    return targetDir;
}
