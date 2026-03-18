import process from 'node:process';

/**
 * CLI Entry Point
 * Responsible for bootstrapping the CLI execution
 */
async function main() {
    try {
        console.log('========================================');
        console.log('🚀 create-backforge CLI starting...');
        console.log('========================================');

        // TODO: Integrate prompt system
        // TODO: Call generator
        // TODO: Handle user inputs
    } catch (error) {
        handleError(error);
    }
}

/**
 * Centralized error handler
 */
function handleError(error: unknown) {
    console.error('❌ CLI Error:');
    if (error instanceof Error) {
        console.error(error.message);
    } else {
        console.error(error);
    }
    process.exit(1);
}

main();
