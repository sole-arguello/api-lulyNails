import { UserDto } from "../dtos/user.dto.js";
import { userDaoService } from "../service/index.js";

export class UserController {

    static register = async (req, res, next) => {
        try {
            const newUser = req.body
            const userDto = new UserDto(newUser)

            if(userDto){
                await userDaoService.createUser(userDto)
                res.status(201).json({message: 'Usuario creado', user: {...newUser}})
            }
            res.status(400).json({message: 'Error al registrar el usuario'})
        } catch (error) {
            console.log('error al registrar el usuario: controller',error)
            next(error)
        }
    }
}