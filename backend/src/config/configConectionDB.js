import mongoose from 'mongoose';
import { configEnv } from './configEnv.js';
import { logger } from '../helpers/logger.helper.js';

export class ConnectDB {
    static #instance;

    static #getConection() {
        logger.info('>>> DB connection');
        return mongoose.connect(configEnv.db.mongoUrl)
    }

    static getInstance() {
        if (this.#instance) {
            logger.info('>>> DB instance');
            return this.#instance 
        }else{
            this.#instance = this.#getConection();
            return
        }
    }
}