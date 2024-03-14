
export class AppointmentDto {

    constructor(date, hour, subServices, formClient) {
        this.date = date;
        this.hour = hour;
        this.subServices = subServices;
        this.formClient = formClient;
    }
}