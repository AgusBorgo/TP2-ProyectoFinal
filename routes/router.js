import { Router } from 'express';
import filmRouter from './filmRouter.js';
import userRouter from './userRouter.js';

const router = Router();

router.use('/films', filmRouter);
router.use('/users', userRouter);

export default router;
