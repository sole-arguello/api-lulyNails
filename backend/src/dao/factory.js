import { configEnv } from "../config/configEnv.js";
import { __dirname } from "../utils.js";
import { logger } from "../helpers/logger.helper.js";

let userDao;
let appointmentDao = null; // Asigna un valor predeterminado

const environment = configEnv.environment.persistence;

switch (environment) {
    case 'development':

        const { ConnectDB } = await import(`../config/configConectionDB.js`);
        ConnectDB.getInstance();

        logger.info('Development Environment');

        const { UserManager } = await import(`../dao/managers/userManager.js`);
        userDao = new UserManager();

        const { AppointmentManager } = await import(`../dao/managers/appointmentManager.js`);
        appointmentDao = new AppointmentManager();

        break;
}

export { userDao, appointmentDao };
