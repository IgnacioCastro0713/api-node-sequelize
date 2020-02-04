import { Router } from 'express';

const router = Router();

import { login, register } from '../app/controllers/AuthController'

router.get('/login' , login);
router.get('/register' , register);


export default router;