import { Router } from 'express';

const router = Router();

import { login, register } from '../app/controllers/AuthController'

router.post('/login' , login);
router.post('/register' , register);


export default router;
