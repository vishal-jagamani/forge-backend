import { ProjectArchitecture, ProjectConfig, ProjectLanguage, ProjectPackageManager } from '@app-types/prompt.types';
import { PROMPT_CONSTANTS } from '@constants/prompt.constants';
import { select } from '@inquirer/prompts';

/**
 * Prompt for core project configuration
 */
export async function promptProjectConfig(): Promise<ProjectConfig> {
    const language = await select<ProjectLanguage>({
        message: PROMPT_CONSTANTS.TEXT.SELECT_LANGUAGE,
        choices: [
            {
                name: PROMPT_CONSTANTS.LANGUAGE.TYPESCRIPT,
                value: ProjectLanguage.TypeScript,
            },
            {
                name: PROMPT_CONSTANTS.LANGUAGE.JAVASCRIPT,
                value: ProjectLanguage.JavaScript,
            },
        ],
        default: ProjectLanguage.TypeScript,
    });

    const architecture = await select<ProjectArchitecture>({
        message: PROMPT_CONSTANTS.TEXT.SELECT_ARCHITECTURE,
        choices: [
            { name: PROMPT_CONSTANTS.ARCHITECTURE.FUNCTIONAL, value: ProjectArchitecture.FUNCTIONAL },
            { name: PROMPT_CONSTANTS.ARCHITECTURE.OOP, value: ProjectArchitecture.OOP },
        ],
        default: ProjectArchitecture.FUNCTIONAL,
    });

    const packageManager = await select<ProjectPackageManager>({
        message: PROMPT_CONSTANTS.TEXT.SELECT_PACKAGE_MANAGER,
        choices: [
            { name: PROMPT_CONSTANTS.PACKAGE_MANAGER.PNPM, value: ProjectPackageManager.PNPM },
            { name: PROMPT_CONSTANTS.PACKAGE_MANAGER.NPM, value: ProjectPackageManager.NPM },
        ],
        default: ProjectPackageManager.PNPM,
    });

    return {
        language,
        architecture,
        packageManager,
    };
}
