import express from 'express';
import morgan from 'morgan';
import { routerApp } from './routes/index.js';

export const app = express();

app.use(express.json());

app.use(routerApp);//todas las rutas

app.use(morgan('dev'));