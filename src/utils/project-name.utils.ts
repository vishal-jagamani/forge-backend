import validateNpmPackageName from 'validate-npm-package-name';

/**
 * Validate project name for CLI usage
 */
export function validateProjectName(name: string): true | string {
    const trimmed = name.trim();

    if (!trimmed) {
        return 'Project name is required';
    }

    const result = validateNpmPackageName(trimmed);

    if (!result.validForNewPackages) {
        return result.errors?.[0] || result.warnings?.[0] || 'Invalid project name';
    }

    return true;
}

/**
 * Normalize project name to kebab-case
 */
export function formatProjectName(name: string): string {
    return name
        .trim()
        .toLowerCase()
        .replace(/\s+/g, '-') // spaces → hyphens
        .replace(/[^a-z0-9\-]/g, '') // remove invalid chars
        .replace(/-+/g, '-'); // collapse multiple hyphens
}
