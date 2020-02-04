import { Router } from 'express';

const router = Router();

import {getAllTask, createTask, getOneTask, updateTask,destroyTask, getTaskByProject} from '../app/controllers/TaskController';

router.get('/', getAllTask);
router.post('/', createTask);
router.get('/:id', getOneTask);
router.put('/:id', updateTask);
router.delete('/:id', destroyTask);
router.get('/project/:id', getTaskByProject);

export default router;
