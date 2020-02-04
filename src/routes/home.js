import { Router } from 'express';

const router = Router();

import { home } from '../app/controllers/HomeController'

router.get('/' , home);

export default router;