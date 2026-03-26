export const PROMPT_CONSTANTS = {
    TEXT: {
        SELECT_LANGUAGE: 'Select language:',
        SELECT_ARCHITECTURE: 'Select architecture style:',
        SELECT_PACKAGE_MANAGER: 'Select package manager:',
        INSTALL_DEPENDENCIES: 'Install dependencies?',
        PROJECT_NAME: 'Project name:',
        DEFAULT_PROJECT_NAME: 'my-backend-app',
    },
    LANGUAGE: {
        TYPESCRIPT: 'TypeScript',
    },
    ARCHITECTURE: {
        FUNCTIONAL: 'Functional',
    },
    PACKAGE_MANAGER: {
        NPM: 'npm',
        YARN: 'yarn',
        PNPM: 'pnpm',
    },
} as const;
