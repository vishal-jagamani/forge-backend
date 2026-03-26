import { ProjectSetupPreferences } from '@app-types/index';
import { PROMPT_CONSTANTS } from '@constants/prompt.constants';
import { confirm } from '@inquirer/prompts';

/**
 * Prompt for setup preferences
 */
export async function promptProjectSetupPreferences(): Promise<ProjectSetupPreferences> {
    const installDeps = await confirm({ message: PROMPT_CONSTANTS.TEXT.INSTALL_DEPENDENCIES, default: true });

    const gitInit = await confirm({ message: PROMPT_CONSTANTS.TEXT.INITIALIZE_GIT, default: true });

    return { installDeps, gitInit };
}
