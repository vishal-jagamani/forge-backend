import process from 'node:process';
import { runBasicPrompt, runPromptFlow } from './prompts';
import { generateProject } from 'generator';
import { CliConfig } from '@app-types/cli-config';
import chalk from 'chalk';

/**
 * CLI Entry Point
 * Responsible for bootstrapping the CLI execution
 */
async function main() {
    try {
        console.log('========================================');
        console.log('🚀 create-backforge CLI starting...');
        console.log('========================================');

        const result = await runBasicPrompt();
        console.log('\n✅ Basic Prompt Result:');
        console.log(result);

        const projectConfig = await runPromptFlow();

        console.log('\n📦 Final Config:');
        console.log(projectConfig);

        const targetDir = await generateProject(projectConfig);

        showSuccessMessage(projectConfig, targetDir);

        // TODO: Integrate prompt system
        // TODO: Call generator
        // TODO: Handle user inputs
    } catch (error) {
        handleError(error);
    }
}

function showSuccessMessage(projectConfig: CliConfig, targetDir: string) {
    console.log('\n🎉 Project created successfully!\n');

    console.log(`📁 Location: ${targetDir}\n`);

    console.log('👉 Next steps:\n');

    console.log(`  cd ${projectConfig.projectName}`);

    if (!projectConfig.installDeps) {
        console.log(`  ${projectConfig.packageManager} install`);
    }

    console.log(`  ${projectConfig.packageManager} run dev\n`);

    console.log('✨ Happy coding!\n');
}

/**
 * Centralized error handler
 */
function handleError(error: unknown) {
    console.error('❌ CLI Error:');
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error(error);
    }
    process.exit(1);
}

main();
