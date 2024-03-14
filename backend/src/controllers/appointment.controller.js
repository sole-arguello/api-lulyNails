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

            const {date, hour, formClient, subServices} = req.body     
            
            //valido que por medio de los datos ingresados no exista un turno 
            const appointmentExist = await AppointmentDaoService.getAppointmentForDateHourFormData(date, hour, subServices, formClient)
            if(appointmentExist) {
                return res.status(201).json({message: 'Ya tiene un turno para esta fecha'})
            }

            //valido que en el dia el cliente ya tenga un turno
            const appointmentForClient = await AppointmentDaoService.getAppointmentForClientAndDate(formClient, date)
            if(appointmentForClient) {
                return res.status(201).json({message: 'Ud ya tiene un turno para esta fecha'})
            }

            //valido mismo dia hasta 3 turnos
            const appointmentForDate = await AppointmentDaoService.countAppointmentsForDate(date)
            if(appointmentForDate >= 3) {
                return res.status(201).json({message: 'Ya no hay turnos disponibles para este dia'})
            }

            //valido que el horario no este ocupado en el mismo dia
            const appointmentForHourAndDate = await AppointmentDaoService.countAppointmentsForHourAndDate(hour, date)
            if(appointmentForHourAndDate >= 1) {
                return res.status(201).json({message: 'Ya no hay turnos disponibles para esta hora'})
            } 

            //creo la instancia del dto
            const appointmentDto = new AppointmentDto(date, hour, subServices, formClient)
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