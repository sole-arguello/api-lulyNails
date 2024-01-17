import mongoose from 'mongoose';
import { configEnv } from './configEnv.js';

export class ConnectDB {
    static #instance;

    static #getConection() {
        console.log('>>> DB connection');
        return mongoose.connect(configEnv.db.mongoUrl)
    }

    static getInstance() {
        if (!this.#instance) {
            console.log('>>> DB instance');
            return this.#instance 
        }else{
            this.#instance = this.#getConection();
            return this.#instance
        }
    }
}