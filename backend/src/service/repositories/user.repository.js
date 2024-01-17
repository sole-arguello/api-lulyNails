
export class UserRepository {

    constructor(dao){
        this.dao = dao
    }

    async createUser(user){
        return await this.dao.createUser(user)
    }
}