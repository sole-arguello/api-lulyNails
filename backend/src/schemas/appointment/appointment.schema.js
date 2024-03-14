import joi from 'joi';
import { JoiMsgError } from '../joi.messageError.js';

export const appointmentSchema = joi.object({
    date: joi
        .date()
        .iso()
        .required()
        .messages({ ...JoiMsgError.errorMsAppointment }),

    hour: joi
        .string()
        .required()
        .messages({ ...JoiMsgError.errorMsAppointment }),

    subServices: joi
        .object({
            semipermanente: joi
                .boolean()
                .options({ convert: true })
                .messages({ ...JoiMsgError.errorMsAppointment }),
            esculpidas: joi
                .boolean()
                .options({ convert: true })
                .messages({ ...JoiMsgError.errorMsAppointment }),
            kapping: joi
                .boolean()
                .options({ convert: true })
                .messages({ ...JoiMsgError.errorMsAppointment }),
            pies: joi
                .boolean()
                .options({ convert: true })
                .messages({ ...JoiMsgError.errorMsAppointment }),
            retirado: joi
                .boolean()
                .options({ convert: true })
                .messages({ ...JoiMsgError.errorMsAppointment }),
        }),

    formClient: joi
        .object({
            name: joi
                .string()
                .required()
                .messages({ ...JoiMsgError.errorMsAppointment }),

            email: joi
                .string()
                .email()
                .required()
                .messages({ ...JoiMsgError.errorMsAppointment, ...JoiMsgError.errorMessage }),
            phone: joi
                .string()
                .required()
                .messages({ ...JoiMsgError.errorMsAppointment }),
        })
        .required(),
});
