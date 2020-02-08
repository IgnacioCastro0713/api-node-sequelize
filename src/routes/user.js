import { Router } from 'express';

const router = Router();

import { getAllUsers, createUser, getOneUser, updateUser, destroyUser } from '../app/controllers/UserController'

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getOneUser);
router.put('/:id', updateUser);
router.delete('/:id', destroyUser);

export default router;
