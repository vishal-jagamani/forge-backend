import { ProjectPackageManager } from '@app-types/prompt.types.js';
import { spawn } from 'node:child_process';

/**
 * Install dependencies in a given project directory
 */
export async function installDependencies(projectDir: string, packageManager: ProjectPackageManager): Promise<boolean> {
    console.log('\n📦 Installing dependencies...\n');

    const { command, args } = getInstallCommand(packageManager);

    console.log(`➡️ Running: ${command} ${args.join(' ')}`);
    console.log(`📁 In directory: ${projectDir}\n`);

    try {
        await new Promise<void>((resolve, reject) => {
            const child = spawn(command, args, {
                cwd: projectDir, // 👈 IMPORTANT: run inside project folder
                stdio: ['ignore', 'pipe', 'pipe'], // 👈 show output directly in terminal
                shell: true, // 👈 cross-platform support
            });

            // ✅ Stream stdout
            child.stdout?.on('data', (data) => {
                process.stdout.write(data.toString());
            });

            // ✅ Stream stderr
            child.stderr?.on('data', (data) => {
                process.stderr.write(data.toString());
            });

            child.on('close', (code) => {
                if (code === 0) {
                    resolve();
                } else {
                    reject(new Error(`Install process exited with code ${code}`));
                }
            });

            child.on('error', (error) => {
                reject(error);
            });
        });

        console.log('\n✅ Dependencies installed successfully\n');
        return true;
    } catch (error) {
        console.error('\n⚠️ Failed to install dependencies\n');

        if (error instanceof Error) {
            console.error(error.message);
        }

        console.log('\n👉 You can install dependencies manually:');
        console.log(`   cd ${projectDir}`);
        console.log(`   ${packageManager} install\n`);

        return false;
    }
}

/**
 * Get install command based on package manager
 */
function getInstallCommand(packageManager: ProjectPackageManager) {
    switch (packageManager) {
        case ProjectPackageManager.NPM:
            return { command: ProjectPackageManager.NPM, args: ['install'] };
        case ProjectPackageManager.PNPM:
            return { command: ProjectPackageManager.PNPM, args: ['install'] };
        case ProjectPackageManager.YARN:
            return { command: ProjectPackageManager.YARN, args: ['install'] };
        default:
            throw new Error(`Unsupported package manager: ${packageManager}`);
    }
}
