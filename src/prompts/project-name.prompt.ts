import { input } from '@inquirer/prompts';
import { formatProjectName, validateProjectName } from '@utils/project-name.utils';

/**
 * Prompt user for project name
 */
export async function promptProjectName(defaultName?: string) {
    const projectName = await input({
        message: 'Project name:',
        default: defaultName || 'my-backend-app',

        validate: (value) => {
            return validateProjectName(value);
        },
    });

    return formatProjectName(projectName);
}
