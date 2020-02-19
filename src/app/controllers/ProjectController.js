import {Project, User} from '../models/';
import {multiCatchError} from "../../utils/helpers";

export const getAllProjects = async (req, res) => {

  try {
    const projects = await Project.findAll();

    return res.json({projects})

  } catch (e) {
    let {code, message, errors} = await multiCatchError(e);
    res.status(code).json({message, errors})
  }

};

export const createProject = async (req, res) => {

  const {name, priority, description, delivery_date, user_id} = req.body;

  try {
    let project = await Project.create({
      'name': name,
      'priority': priority,
      'description': description,
      'delivery_date': delivery_date,
      'user_id': user_id
    });

    return res.json({project})

  } catch (e) {
    let {code, message, errors} = await multiCatchError(e);
    res.status(code).json({message, errors})
  }

};

export const getOneProject = async (req, res) => {

  const {id} = req.params;

  try {
    let project = await Project.findOne({
      where: {id},
      include: [
        {model: User, attributes: ['name']}
      ]
    });

    return res.json({project});

  } catch (e) {
    let {code, message, errors} = await multiCatchError(e);
    res.status(code).json({message, errors})
  }

};

export const updateProject = async (req, res) => {

  const {id} = req.params;
  const {name, priority, description, delivery_date} = req.body;

  let project = await Project.findOne({
    where: {id}
  });

  if (!project) {
    return res.json({
      message: 'This project does not exist',
      project: {}
    })
  }

  try {
    await Project.update({
      'name': name,
      'priority': priority,
      'description': description,
      'delivery_date': delivery_date
    }, {
      where: {
        id
      }
    });

    return res.json({message: 'Project Updated Successfully', project})
  } catch (e) {
    let {code, message, errors} = await multiCatchError(e);
    res.status(code).json({message, errors})
  }


};

export const destroyProject = async (req, res) => {

  const {id} = req.params;

  try {
    let rowCount = await Project.destroy({
      where: {id}
    });

    return res.json({
      message: 'Project Deleted Successfully',
      count: rowCount
    })
  } catch (e) {
    let {code, message, errors} = await multiCatchError(e);
    res.status(code).json({message, errors})
  }
};

