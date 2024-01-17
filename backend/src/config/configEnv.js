import dotenv from 'dotenv';
import { Command } from 'commander';

dotenv.config();
const program = new Command()

program
    .option('--port <port>', 'Puerto en ejecución', '3000')
    .option('--mode <mode>', 'Entorno de desarrollo o producción', 'development')
    .parse()

const persistenceMode = program.opts().mode
const port = program.opts().port

export const configEnv = {
    server: {
        port: port
    },
    db: {
        mongoUrl: process.env.MONGO_URL
    },
    enviroment: {
        persistence: persistenceMode
    }
}