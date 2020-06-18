import { Router } from 'express';
import {
  createTask,
  destroyTask,
  getAllTask,
  getOneTask,
  getTaskByProject,
  updateTask
} from '../app/controllers/TaskController';

const router = Router();

router.get('/', getAllTask);
router.post('/', createTask);
router.get('/:id', getOneTask);
router.put('/:id', updateTask);
router.delete('/:id', destroyTask);
router.get('/project/:id', getTaskByProject);

export default router;
