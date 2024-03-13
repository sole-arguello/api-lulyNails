

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

    async getAppointmentForDateHourFormData(date, hour, formData) {
        return await this.dao.getAppointmentForDateHourFormData(date, hour, formData)
        
    }

    async getAppointmentForEmail(email) {
        return await this.dao.getAppointmentForEmail(email)
    }

}