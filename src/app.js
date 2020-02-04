import express, { json } from 'express'
import morgan from 'morgan';

import ProjectRoutes from './routes/projects';
import TaskRoutes from './routes/tasks';

const app = express();

// middlewares
app.use(morgan('dev'));
app.use(json());

// routes
app.use('/api/projects', ProjectRoutes);
app.use('/api/tasks', TaskRoutes);


export default app;
