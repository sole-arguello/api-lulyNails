import joi from 'joi';
import { JoiMsgError } from '../joi.messageError.js';

export const registerSchema = joi.object({
    first_name: joi
        .string()
        .required()
        .min(3)
        .max(30)
        .pattern(/^[a-zA-Z\s]*$/)
        .messages({ ...JoiMsgError.errorMsgUser, ...JoiMsgError.errorMessage }),

    last_name: joi
        .string()
        .optional()
        .min(3)
        .max(30)
        .pattern(/^[a-zA-Z\s]*$/)
        .messages({ ...JoiMsgError.errorMsgUser, ...JoiMsgError.errorMessage }),

    age: joi
        .number()
        .integer()
        .min(18)
        .optional()
        .messages(JoiMsgError.errorMessage ),

    email: joi
        .string()
        .required()
        .email()
        .messages(JoiMsgError.errorMessage),

    password: joi
        .string()
        .required()
        .pattern(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()_+|~=`{}:";'<>?,.\/]).{8,}$/)
        .messages({ ...JoiMsgError.errorMsgPassword, ...JoiMsgError.errorMessage }),
})