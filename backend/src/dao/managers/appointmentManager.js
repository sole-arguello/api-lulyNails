import { appointmentModel } from './models/appointment.model.js';
import { logger } from '../../helpers/logger.helper.js';

export class AppointmentManager {

    constructor() {
        this.model = appointmentModel
    }

    async createAppointment(appointment) {
        try {
           const createAppointment = await this.model.create(appointment)
           return createAppointment
        } catch (error) {
            logger.error('Error al crear turno: manager -', error)
            throw new Error(error)
        }
    }

    async getAppointment(id) {
        try {
            const getAppointment = await this.model.findById(id)
            return getAppointment
        } catch (error) {
            logger.error('Error al obtener turno: manager -', error)
            throw new Error(error)
        }
    }
}