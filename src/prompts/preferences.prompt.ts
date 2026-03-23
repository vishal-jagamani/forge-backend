import { confirm } from '@inquirer/prompts';
import { ProjectSetupPreferences } from '@app-types/index';

/**
 * Prompt for setup preferences
 */
export async function promptProjectSetupPreferences(): Promise<ProjectSetupPreferences> {
    const installDeps = await confirm({ message: 'Install dependencies?', default: true });

    const gitInit = await confirm({ message: 'Initialize git repository?', default: true });

    return { installDeps, gitInit };
}
