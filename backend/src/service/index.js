import { UserRepository } from "./repositories/user.repository.js";
import { AppointmentRepository } from "./repositories/appointment.repositoty.js";
import { userDao } from '../dao/factory.js'
import { appointmentDao } from '../dao/factory.js'

export const userDaoService = new UserRepository(userDao)
export const AppointmentDaoService = new AppointmentRepository(appointmentDao)