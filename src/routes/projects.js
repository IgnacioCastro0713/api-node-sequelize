import { Router } from 'express';
import {
  createProject,
  destroyProject,
  getAllProjects,
  getOneProject,
  updateProject
} from '../app/controllers/ProjectController';

const router = Router();

router.get('/', getAllProjects);
router.post('/', createProject);
router.get('/:id', getOneProject);
router.put('/:id', updateProject);
router.delete('/:id', destroyProject);

export default router;