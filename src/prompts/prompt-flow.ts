import { CliConfig } from '@app-types/cli-config';
import { promptProjectConfig, promptProjectName, promptProjectSetupPreferences } from '@prompts/index';

/**
 * Combined prompt flow
 */
export async function runPromptFlow(): Promise<CliConfig> {
    // Step 1: Project name
    const args = process.argv.slice(2);
    const defaultName = args[0];

    const projectName = await promptProjectName(defaultName);

    // Step 2: Core config
    const config = await promptProjectConfig();

    // Step 3: Preferences
    const preferences = await promptProjectSetupPreferences();

    // Final combined config
    return {
        projectName,
        ...config,
        ...preferences,
    };
}
