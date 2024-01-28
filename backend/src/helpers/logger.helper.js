import winston from 'winston';
import { __dirname } from '../utils.js';
import path from 'path';
import { configEnv } from '../config/configEnv.js';
import chalk from 'chalk';

const colorizeLevel = winston.format((info) =>{

    const { level } = info;

    switch(level){
        case "info":
            info.level = chalk.blue(level);
            break;
        case "error":
            info.level = chalk.red(level);
            break;
        case "warn":
            info.level = chalk.yellow(level);
            break;
        case "debug":
            info.level = chalk.green(level);
            break;
        case "http":
            info.level = chalk.magenta(level);
            break;
        case "verbose":
            info.level = chalk.cyan(level);
            break;
    }
    return info;
})

const prodLogger = winston.createLogger({
    format: winston.format.combine(
        colorizeLevel(),
        winston.format.simple(),
    ),
    transports: [
        new winston.transports.Console({level: "debug"}),
    ]
})

const devLogger = winston.createLogger({
    format: winston.format.combine(
        colorizeLevel(),
        winston.format.simple(),
        winston.format.timestamp(),
        winston.format.printf((info) => `[${info.timestamp}] ${info.level} ${info.message}`)
    ),
    transports: [
        new winston.transports.Console({
            level: "debug",
            format: winston.format.combine(
                winston.format.simple(),
                winston.format.timestamp(),
                winston.format.printf((info) => `[${info.timestamp}] ${info.level} ${info.message}`)
            ),
        }),
        new winston.transports.File({
            filename: path.join(__dirname, '/logs/error.log'), 
            maxsize: 5120000, 
            maxFiles: 5,
            level: 'debug',
        })
    ]
})

let logger

if(configEnv.environment.persistence === 'development'){
    logger = devLogger
}else{
    logger = prodLogger
}
export { logger }