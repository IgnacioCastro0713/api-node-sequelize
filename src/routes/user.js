import { Router } from 'express';
import { createUser, destroyUser, getAllUsers, getOneUser, updateUser } from '../app/controllers/UserController';
import IsAdmin from '../app/middlewares/isAdmin';

const router = Router();

router.get('/', IsAdmin, getAllUsers);
router.post('/', IsAdmin, createUser);
router.get('/:id', IsAdmin, getOneUser);
router.put('/:id', IsAdmin, updateUser);
router.delete('/:id', IsAdmin, destroyUser);

export default router;