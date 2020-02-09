import { Router } from 'express';
import { login, register, logout } from '../app/controllers/AuthController';

const router = Router();

router.post('/login', login);
router.post('/register' , register);
router.post('/logout', logout);


export default router;
