import {Router} from 'express';
import {login, register, logout} from '../app/controllers/AuthController';
import passport from "../config/passport";

const router = Router();

router.post('/login', login);
router.post('/register', register);
router.post('/logout', passport.authenticate('bearer', {session: false}), logout);


export default router;
