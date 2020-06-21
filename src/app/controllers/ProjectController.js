import { Project, Task } from '../models/';
import { multiCatchError } from "../../helpers/muticatcherror";
import { createSchema, updateSchema } from '../validations/project';

export const getAllProjects = async (req, res) => {

  try {
    const projects = await Project.findAll();

    return res.json({ projects })
  } catch (e) {
    let { code, message, errors } = await multiCatchError(e);
    res.status(code).json({ message, errors })
  }

};

export const createProject = async (req, res) => {

  try {
    const { name, priority, description, delivery_date, user_id } = await createSchema.validateAsync(req.body, { abortEarly: false });
    let project = await Project.create({ name, priority, description, delivery_date, user_id });

    return res.json({ project })
  } catch (e) {
    let { code, message, errors } = await multiCatchError(e);
    res.status(code).json({ message, errors })
  }
};

export const getOneProject = async (req, res) => {

  try {
    const { id } = req.params;

    let project = await Project.findOne({
      where: { id },
      include: [
        { model: Task, attributes: ['id', 'name', 'done'] },
      ]
    });

    return res.json({ project });

  } catch (e) {
    let { code, message, errors } = await multiCatchError(e);
    res.status(code).json({ message, errors })
  }
};

export const updateProject = async (req, res) => {

  try {

    const { id } = req.params;
    const project = await Project.findOne({ where: { id } });

    if (!project) {
      return res.json({ message: 'This project does not exist', project: {} });
    }

    const { name, priority, description, delivery_date } = await updateSchema.validateAsync(req.body, { abortEarly: false });
    await Project.update({ name, priority, description, delivery_date }, {
      where: {
        id
      }
    });

    return res.json({ message: 'Project Updated Successfully', project })
  } catch (e) {
    let { code, message, errors } = await multiCatchError(e);
    res.status(code).json({ message, errors })
  }
};

export const destroyProject = async (req, res) => {

  try {
    const { id } = req.params;
    const rowCount = await Project.destroy({ where: { id } });
    return res.json({ message: 'Project Deleted Successfully', count: rowCount })
  } catch (e) {
    let { code, message, errors } = await multiCatchError(e);
    res.status(code).json({ message, errors })
  }
};

