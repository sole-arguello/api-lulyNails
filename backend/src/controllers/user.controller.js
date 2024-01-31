import { UserDto } from "../dtos/user.dto.js";
import { userDaoService } from "../service/index.js";
import { validateSchema } from "./../helpers/validate.helper.js";
import { registerSchema } from "./../schemas/user/register.schema.js";
import { logger } from "../helpers/logger.helper.js";

export class UserController {

    static registerUser = async (req, res, next) => {
        try {
            await validateSchema(registerSchema, req.body)

            const newUser = req.body
            const userDto = new UserDto(newUser)

            if(userDto){
                await userDaoService.createUser(userDto)
                return res.status(201).json({message: 'Usuario creado', user: {...newUser}})
            }
            logger.error('Error al Crear el usuario : controller - ', newUser)
            return res.status(400).json({message: 'Error al registrar el usuario'})
        } catch (error) {
            logger.error('Error al registrar el usuario: controller - ', error)
            console.error('Error al registrar el usuario: controller - ', error)
            next(error)
        }
    }
}