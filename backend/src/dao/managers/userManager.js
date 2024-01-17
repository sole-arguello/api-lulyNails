import { userModel } from "../models/user.model.js";

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
            console.log('Error al crear usuario: manager', error)
            throw new Error(error)
        }
    }
}