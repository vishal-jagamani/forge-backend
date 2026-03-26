import { CliConfig } from '@app-types/cli-config.js';
import { ProjectPackageManager } from '@app-types/prompt.types.js';
import fs from 'node:fs';
import path from 'node:path';
import { copyTemplate } from './copy-template.js';
import { installDependencies } from './install-deps.js';
import { replacePlaceholders } from './replace-placeholders.js';
import { resolveTemplatePath } from './resolve-template.js';

/**
 * Main generator function
 */
export async function generateProject(config: CliConfig) {
    const { projectName, installDeps, packageManager } = config;

    console.log('\n📦 Generating project...\n');

    // Step 1: Target directory
    const targetDir = path.resolve(process.cwd(), projectName);

    if (fs.existsSync(targetDir)) {
        throw new Error(`Directory "${projectName}" already exists. Please choose a different name.`);
    }

    fs.mkdirSync(targetDir, { recursive: true });
    console.log(`📁 Created directory: ${targetDir}`);

    // Step 2: Resolve template
    const templateDir = resolveTemplatePath(config);
    console.log(`📂 Using template: ${templateDir}`);

    // Step 3: Copy files
    console.log('📄 Copying template files...');
    copyTemplate(templateDir, targetDir);

    // Step 4: Replace placeholders
    console.log('✨ Replacing placeholders...');
    replacePlaceholders(targetDir, {
        projectName,
    });

    // Step 5: Install dependencies (NEW)
    if (installDeps) {
        const success = await installDependencies(targetDir, packageManager as ProjectPackageManager);

        if (!success) {
            console.log('⚠️ Continuing without dependencies installed...\n');
        }
    } else {
        console.log('\n⏭️ Skipping dependency installation\n');
    }

    return targetDir;
}
