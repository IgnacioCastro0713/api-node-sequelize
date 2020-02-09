import { Router } from 'express';
import { getAllUsers, createUser, getOneUser, updateUser, destroyUser } from '../app/controllers/UserController';
import passport from '../config/passport';

const router = Router();

router.get('/', passport.authenticate('bearer', { session: false }) ,getAllUsers);
router.post('/', createUser);
router.get('/:id', getOneUser);
router.put('/:id', updateUser);
router.delete('/:id', destroyUser);

export default router;
