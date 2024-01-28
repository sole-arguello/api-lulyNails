import { userModel } from "../managers/models/user.model.js";
import { logger } from "../../helpers/logger.helper.js";

export class UserManager {

    constructor() {
        this.model = userModel
    }

    //creo a los usuarios
    async createUser(user) {
        try {
            const createdUser = await this.model.create(user)
            return createdUser
        } catch (error) {
            logger.error('Error al crear usuario: manager -', error)
            throw new Error(error)
        }
    }
}