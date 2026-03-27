import { ProjectSetupPreferences } from '@app-types/index.js';
import { PROMPT_CONSTANTS } from '@constants/prompt.constants.js';
import { confirm } from '@inquirer/prompts';

/**
 * Prompt for setup preferences
 */
export async function promptProjectSetupPreferences(): Promise<ProjectSetupPreferences> {
    const installDeps = await confirm({ message: PROMPT_CONSTANTS.TEXT.INSTALL_DEPENDENCIES, default: true });
    
    return { installDeps };
}
