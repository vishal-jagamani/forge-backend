import { Router } from 'express';
import { getSampleHandler } from './sample.controller';

const router = Router();

/**
 * Sample route
 */
router.get('/', getSampleHandler);

export default router;
