import { Router } from 'express';
import { userRouter } from './user.routes.js';

const router = Router();

router.use('/api/user', userRouter);

export { router  as routerApp}