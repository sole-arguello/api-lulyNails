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

    formData: joi
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
