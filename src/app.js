import express, {json} from 'express'
import morgan from 'morgan';

import HomeRoutes from './routes/home';
import AuthRoutes from './routes/auth'
import UserRoutes from './routes/user'
import ProjectRoutes from './routes/projects';
import TaskRoutes from './routes/tasks';
import cors from 'cors';
import {errorNotFoundMiddleware} from './app/middlewares/errors'
import passport from './config/passport';
import {config} from 'dotenv';

const app = express();
const port = process.env.PORT || 3000;

// env config
config();

// port server
app.set('port', port);

// middleware's
app.use(cors());
app.use(morgan('dev'));
app.use(json());


// routes
app.use('/api', HomeRoutes);
app.use('/api/auth', AuthRoutes);
app.use('/api/users', passport.authenticate('bearer', {session: false}), UserRoutes);
app.use('/api/projects', passport.authenticate('bearer', {session: false}), ProjectRoutes);
app.use('/api/tasks', passport.authenticate('bearer', {session: false}), TaskRoutes);
app.use(errorNotFoundMiddleware);


export default app;
