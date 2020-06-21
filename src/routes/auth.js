import { Router } from 'express';
import { login, logout, register } from '../app/controllers/AuthController';
import passport from "../app/middlewares/passportHttp";

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', passport.authenticate('bearer', { session: false }), logout);


export default router;
