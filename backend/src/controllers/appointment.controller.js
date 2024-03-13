import { AppointmentDto } from "../dtos/appointment.dto.js";
import { validateSchema } from "../helpers/validate.helper.js";
import {appointmentSchema} from "../schemas/appointment/appointment.schema.js"
import { AppointmentDaoService } from "../service/index.js";
import { logger } from "../helpers/logger.helper.js";

export class AppointmentController{

    static async registerAppointment(req, res, next) {
        try {
            //valido el body
            
            await validateSchema(appointmentSchema, req.body)

            const {date, hour, formData} = req.body
            console.log('formData', formData.email)
            const emaiExist = await AppointmentDaoService.getAppointmentForEmail(formData.email)
            console.log('email', emaiExist)
            if(emaiExist){
                return res.status(201).json({message: 'El email ya existe'})
            }

            const appointmentExist = await AppointmentDaoService.getAppointmentForDateHourFormData(date, hour, formData)
            if(appointmentExist) {
                return res.status(201).json({message: 'El turno ya existe'})
            }
            
            //valido mismo dia hasta 3 turnos
            const appointmentForDate = await AppointmentDaoService.countAppointmentsForDate(date)

            if(appointmentForDate >= 3) {
                return res.status(201).json({message: 'Ya no hay turnos disponibles'})
            }
            //creo la instancia del dto
            const appointmentDto = new AppointmentDto(date, hour, formData)
            if(appointmentDto) {
                await AppointmentDaoService.createAppointment(appointmentDto)
                return res.status(201).json({message: 'Turno creado', appointment: {...appointmentDto}})
            }
            logger.error('Error al Crear el turno : controller - ', appointmentDto)
            return res.status(400).json({message: 'Error al registrar el turno'})

        } catch (error) {
            logger.error('Error al crear el turno: controller - ', error)
            console.error('Error al registrar el turno: controller - ', error)
            next(error)
        }
        
    }


}