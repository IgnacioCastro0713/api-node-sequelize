import {Router} from 'express';
import {
  getAllProjects,
  createProject,
  getOneProject,
  updateProject,
  destroyProject
} from '../app/controllers/ProjectController';

const router = Router();

router.get('/', getAllProjects);
router.post('/', createProject);
router.get('/:id', getOneProject);
router.put('/:id', updateProject);
router.delete('/:id', destroyProject);

export default router;
