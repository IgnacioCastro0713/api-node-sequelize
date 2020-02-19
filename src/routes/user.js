import {Router} from 'express';
import {getAllUsers, createUser, getOneUser, updateUser, destroyUser} from '../app/controllers/UserController';

const router = Router();

router.get('/', getAllUsers);
router.post('/', createUser);
router.get('/:id', getOneUser);
router.put('/:id', updateUser);
router.delete('/:id', destroyUser);

export default router;
