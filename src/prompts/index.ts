import { input } from '@inquirer/prompts';

export async function runBasicPrompt(): Promise<{ name: string }> {
    const name = await input({ message: 'Enter your name:' });
    return { name };
}

export * from './project-name.prompt.js';
export * from './config.prompt.js';
export * from './preferences.prompt.js';
export * from './prompt-flow.js';
