import { AppointmentDto } from "../dtos/appointment.dto.js";
import { validateSchema } from "../helpers/validate.helper.js";
import {appointmentSchema} from "../schemas/appointment/appointment.schema.js"
import { AppointmentDaoService } from "../service/index.js";
import { logger } from "../helpers/logger.helper.js";

export class AppointmentController{

    static async registerAppointment(req, res, next) {
        try {

            await validateSchema(appointmentSchema, req.body)
            
            const appointment = req.body.date
            const appointmentDto = new AppointmentDto(appointment)

            if(appointmentDto){
                await AppointmentDaoService.createAppointment(appointmentDto)
                return res.status(201).json({message: 'Turno creado', turno: {...appointment}})
            }
            logger.error('Error al Crear el turno : controller - ', appointment)
            return res.status(400).json({message: 'Error al registrar el turno'})

        } catch (error) {
            logger.error('Error al crear el turno: controller - ', error)
            console.error('Error al registrar el turno: controller - ', error)
            next(error)
        }
        
    }

    // static async getAppointment(req, res, next) {
        
    //     try {
    //         const id = req.params.id
    //         const getAppointment = await AppointmentDaoService.getAppointment(id)
    //         return res.status(200).json({turno: getAppointment})
            
    //     } catch (error) {
    //        logger.error('Error al obtener el turno: controller - ', error)
    //        console.error('Error al obtener el turno: controller - ', error)
    //        next(error)
    //     }
    // }
}