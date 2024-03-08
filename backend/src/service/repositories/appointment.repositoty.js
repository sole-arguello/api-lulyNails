

export class AppointmentRepository {

    constructor(dao) {
        this.dao = dao
    }

    async createAppointment(appointment) {
        return await this.dao.createAppointment(appointment)
    }
}