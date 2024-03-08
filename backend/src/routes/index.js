import { Router } from 'express';
import { userRouter } from './user.routes.js';
import { appointmentRouter } from './appointment.routes.js';

const router = Router();

router.use('/api/user', userRouter);
router.use('/api/turno', appointmentRouter);

export { router  as routerApp}