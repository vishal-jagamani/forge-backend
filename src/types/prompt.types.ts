export enum ProjectLanguage {
    TypeScript = 'ts',
    JavaScript = 'js',
}

export enum ProjectArchitecture {
    FUNCTIONAL = 'functional',
    OOP = 'oop',
}

export enum ProjectPackageManager {
    NPM = 'npm',
    PNPM = 'pnpm',
    YARN = 'yarn',
}

export interface ProjectConfig {
    language: ProjectLanguage;
    architecture: ProjectArchitecture;
    packageManager: ProjectPackageManager;
}

/**
 * Project setup preferences
 */
export interface ProjectSetupPreferences {
    /**
     * Whether to install dependencies
     */
    installDeps: boolean;
    /**
     * Whether to initialize git repository
     */
    gitInit: boolean;
}
