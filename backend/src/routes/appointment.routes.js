import {Router} from 'express';

import { AppointmentController } from '../controllers/appointment.controller.js';

const router = Router();

//localhost:8080/api/turno/register
router.post('/register', AppointmentController.registerAppointment);

export { router as appointmentRouter }