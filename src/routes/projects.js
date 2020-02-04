import { Router } from 'express';
const router = Router();

import {getAllProjects, createProject, getOneProject, updateProject,destroyProject} from '../app/controllers/ProjectController'

router.get('/', getAllProjects);
router.post('/', createProject);
router.get('/:id', getOneProject);
router.put('/:id', updateProject);
router.delete('/:id', destroyProject);

export default router;
