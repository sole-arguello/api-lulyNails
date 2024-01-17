import { UserRepository } from "./repositories/user.repository.js";
import { userDao } from '../dao/factory.js'

export const userDaoService = new UserRepository(userDao)