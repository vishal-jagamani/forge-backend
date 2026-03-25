import { Router } from 'express';
import sampleRoutes from '../modules/sample/sample.routes';

const router = Router();

/**
 * Health check route
 */
router.get('/health', (_req, res) => {
    res.json({
        status: 'ok',
        message: 'Server is running 🚀',
    });
});

/**
 * Sample module route
 */
router.use('/sample', sampleRoutes);

export default router;
