import { Request, Response } from 'express';
import { getSampleData } from './sample.service';

/**
 * Controller layer
 */
export const getSampleHandler = (_req: Request, res: Response) => {
    const data = getSampleData();

    res.json({
        success: true,
        data,
    });
};
