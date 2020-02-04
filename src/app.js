import express, { json } from 'express'
import morgan from 'morgan';

import ProjectRoutes from './routes/projects';
import TaskRoutes from './routes/tasks';
import HomeRoutes from './routes/home';
import AuthRoutes from './routes/auth'

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/auth', AuthRoutes);
app.use('/api/projects', ProjectRoutes);
app.use('/api/tasks', TaskRoutes);
app.use('api/', HomeRoutes);


export default app;
