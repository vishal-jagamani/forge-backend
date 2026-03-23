import { ProjectArchitecture, ProjectConfig, ProjectLanguage, ProjectPackageManager } from '@app-types/prompt.types';
import { select } from '@inquirer/prompts';

/**
 * Prompt for core project configuration
 */
export async function promptProjectConfig(): Promise<ProjectConfig> {
    const language = await select<ProjectLanguage>({
        message: 'Select language:',
        choices: [
            {
                name: 'TypeScript',
                value: ProjectLanguage.TypeScript,
            },
            {
                name: 'JavaScript',
                value: ProjectLanguage.JavaScript,
            },
        ],
        default: ProjectLanguage.TypeScript,
    });

    const architecture = await select<ProjectArchitecture>({
        message: 'Select architecture style:',
        choices: [
            { name: 'Functional', value: ProjectArchitecture.FUNCTIONAL },
            { name: 'OOP (Object-Oriented)', value: ProjectArchitecture.OOP },
        ],
        default: ProjectArchitecture.FUNCTIONAL,
    });

    const packageManager = await select<ProjectPackageManager>({
        message: 'Select package manager:',
        choices: [
            { name: 'pnpm (recommended)', value: ProjectPackageManager.PNPM },
            { name: 'npm', value: ProjectPackageManager.NPM },
        ],
        default: ProjectPackageManager.PNPM,
    });

    return {
        language,
        architecture,
        packageManager,
    };
}
