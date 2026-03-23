import { input } from '@inquirer/prompts';

export async function runBasicPrompt(): Promise<{ name: string }> {
    const name = await input({ message: 'Enter your name:' });
    return { name };
}

export * from './project-name.prompt';
export * from './config.prompt';
export * from './preferences.prompt';
export * from './prompt-flow';
