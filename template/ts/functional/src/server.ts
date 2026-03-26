import { createApp } from './app';
import { env } from './config/env';

async function startServer() {
    const app = createApp();

    app.listen(env.PORT, () => {
        console.log(`🚀 Server running on http://localhost:${env.PORT} [${env.NODE_ENV}]`);
    });
}

startServer();
