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

    async countAppointmentsForDate(date) {
        try {
            const count = await this.model.countDocuments({date})
            return count
        } catch (error) {
            logger.error('Error al contar turnos: manager -', error)
            throw new Error(error)
        }
    }

    async countAppointmentsForHourAndDate(hour, date) {
        try {
            const count = await this.model.countDocuments({hour, date})
            return count
        } catch (error) {
            logger.error('Error al contar turnos: manager -', error)
            throw new Error(error)
        }
    }

    async getAppointmentForClientAndDate(formClient, date) {
        try {
            const getClientDate = await this.model.findOne({formClient, date})
            return getClientDate
        } catch (error) {
            logger.error('Error al obtener cliente y fecha: manager -', error)
            throw new Error(error)
        }
    }
    
    async getAppointmentForDateHourFormData(date, hour, subServices, formClient) {
        try {
            console.log('servicio', subServices)
            const getAppointment = await this.model.findOne({date, hour, subServices, formClient })
            return getAppointment
            
        } catch (error) {
            logger.error('Error al obtener turno: manager -', error)
            throw new Error(error)  
        }
    }

    async getAppointmentSubServices(subServices) {
        try {
            const getAppointment = await this.model.find(subServices)
            return getAppointment
        } catch (error) {
            logger.error('Error al obtener turno: manager -', error)
            throw new Error(error)
        }
    }
}