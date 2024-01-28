import { CustomErrorHelper } from "./error.helper.js";

export const validateSchema = async (schema, body) => {
     try {
        const value = await schema.validateAsync(body)
     } catch (error) {
        console.error(error)
        CustomErrorHelper.schemaValidationError(error.details[0]?.message)
     }
}