import dotenv from 'dotenv';

// Load environment variables
dotenv.config();

export const env = {
    PORT: Number(process.env.PORT) || 3000,
    NODE_ENV: process.env.NODE_ENV || 'development',
};
