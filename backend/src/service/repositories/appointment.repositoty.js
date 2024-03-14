

export class AppointmentRepository {

    constructor(dao) {
        this.dao = dao
    }

    async createAppointment(appointment) {
        return await this.dao.createAppointment(appointment)
    }

    async countAppointmentsForDate(date) {
        return await this.dao.countAppointmentsForDate(date)
    }

    async countAppointmentsForHourAndDate(hour, date) {
        return await this.dao.countAppointmentsForHourAndDate(hour, date)
    }

    async getAppointmentForDateHourFormData(date, hour, subServices, formClient) {
        return await this.dao.getAppointmentForDateHourFormData(date, hour, subServices, formClient)
        
    }

    async getAppointmentForClientAndDate(formClient, date) {
        return await this.dao.getAppointmentForClientAndDate(formClient, date)
    }

    async getAppointmentSubServices(subServices) {
        return await this.dao.getAppointmentSubServices(subServices)
    }


}