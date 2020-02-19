import {Router} from 'express';
import {home} from '../app/controllers/HomeController'

const router = Router();

router.get('/', home);

export default router;
