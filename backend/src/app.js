import express from 'express';
import morgan from 'morgan';
import { routerApp } from './routes/index.js';
import path from 'path';

const __dirname = decodeURIComponent(new URL('../', import.meta.url).pathname).replace(/^\/([a-zA-Z]:)/, '$1');

export const app = express();
app.use(express.static(path.join(__dirname, 'dist')));

app.use(express.json());

app.use(routerApp);//todas las rutas

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, 'dist', 'index.html'))
})


app.use(morgan('dev'));