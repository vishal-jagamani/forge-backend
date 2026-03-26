import { PROMPT_CONSTANTS } from '@constants/prompt.constants';
import { input } from '@inquirer/prompts';
import { formatProjectName, validateProjectName } from '@utils/project-name.utils';

/**
 * Prompt user for project name
 */
export async function promptProjectName(defaultName?: string) {
    const projectName = await input({
        message: PROMPT_CONSTANTS.TEXT.PROJECT_NAME,
        default: defaultName || PROMPT_CONSTANTS.TEXT.DEFAULT_PROJECT_NAME,

        validate: (value) => {
            return validateProjectName(value);
        },
    });

    return formatProjectName(projectName);
}
