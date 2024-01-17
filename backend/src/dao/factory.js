import { configEnv } from "../config/configEnv.js";
import { __dirname } from "../utils.js";

let userDao

const environment = configEnv.environment.persistence

switch(environment){
    case 'production':

        const {ConnectDB} = await import (`../config/configConectionDB.js`)
        ConnectDB.getInstance()

        console.log('Production Environment');

        const { UserManager } = await import (`../dao/managers/userManager.js`)
        userDao = new UserManager();
        break;
}