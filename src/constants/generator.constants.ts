export const GENERATOR_CONSTANTS = {
    IGNORED_DIRS: ['node_modules', '.git', 'dist'],
    IGNORED_FILES: ['.DS_Store'],
    ALLOWED_EXTENSIONS: ['.ts', '.js', '.json', '.md', '.env', '.txt', '.yml', '.yaml', '.html', '.css'],
} as const;
