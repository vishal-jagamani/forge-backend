import { ProjectLanguage } from './prompt.types.js';

/**
 * CLI configuration interface
 */
export interface CliConfig {
    projectName: string;
    language: ProjectLanguage;
    architecture: string;
    packageManager: string;
    installDeps: boolean;
}
