import express, { json } from 'express'
import morgan from 'morgan';

import HomeRoutes from './routes/home';
import AuthRoutes from './routes/auth'
import UserRoutes from './routes/user'
import ProjectRoutes from './routes/projects';
import TaskRoutes from './routes/tasks';

import cors from 'cors';
import { config } from 'dotenv';

import passport from './app/middlewares/passportHttp';
import { error404, errorHandler } from "./app/middlewares/errorHandlers";


import swaggerUi from 'swagger-ui-express';
import swaggerDocument from '../swagger.json';


const app = express();
const port = process.env.PORT || 3000;

// env config
config();

// port server
app.set('port', port);

// middleware's
app.use(json());
app.use(cors());
app.use(morgan('dev'));

// swagger
app.use('/api/docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// routes
app.use('/api', HomeRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/users', passport.authenticate('bearer', { session: false }), UserRoutes);
app.use('/api/projects', passport.authenticate('bearer', { session: false }), ProjectRoutes);
app.use('/api/tasks', passport.authenticate('bearer', { session: false }), TaskRoutes);

// handler errors
app.use(error404);
app.use(errorHandler);

export default app;