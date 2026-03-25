import express from 'express';
import routes from './routes';

export function createApp() {
    const app = express();

    // Middlewares
    app.use(express.json());

    // Routes
    app.use('/api', routes);

    return app;
}
