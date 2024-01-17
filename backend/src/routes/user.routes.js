import { Router } from 'express';

import { UserController } from '../controllers/user.controller.js';

const router = Router();

//localhost:8080/api/user/register
router.post('/register', UserController.registerUser);

export { router as userRouter }