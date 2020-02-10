import { Task, Project } from '../models/';
import {multiCatchError} from "../../utils/helpers";

export const getAllTask = async (req, res) => {

  try {
	const tasks = await Task.findAll({
	  order: [
		['id', 'desc']
	  ]
	});

	return res.json({tasks})

  } catch (e) {
	let { code, message, errors } = await multiCatchError(e);
	res.status(code).json({message, errors})
  }
};

export const createTask = async (req, res) => {

  const {name, done, project_id} = req.body;

  try {

    let task = await Task.create({
	  'name': name,
	  'done': done,
	  'project_id': project_id
	});

	return res.json({task})

  }catch (e) {
	let { code, message, errors } = await multiCatchError(e);
	res.status(code).json({message, errors})
  }
};

export const getOneTask = async (req, res) => {

  const { id } = req.params;

  try {
	let task = await Task.findOne({
	  where: {id}
	});

	return res.json({task});

  } catch (e) {
	let { code, message, errors } = await multiCatchError(e);
	res.status(code).json({message, errors})
  }
};

export const updateTask = async (req, res) => {

  const { id } = req.params;
  const {name, done, project_id} = req.body;

  let task = await Task.findOne({
	where: {id}
  });

  if (!task) {
	return res.json({
	  message: 'This task does not exist',
	  task: {}
	})
  }

  try {
	await Task.update({
	  'name': name,
	  'done': done,
	  'project_id': project_id
	}, {
	  where:{
		id
	  }
	});

	return res.json({ message: 'Task Updated Successfully', Task})
  }catch (e) {
	let { code, message, errors } = await multiCatchError(e);
	res.status(code).json({message, errors})
  }
};

export const destroyTask = async (req, res) => {
  const { id } = req.params;

  try {
	let rowCount = await Task.destroy({
	  where: {id}
	});

	return res.json({
	  message: 'Task Deleted Successfully',
	  count: rowCount
	})
  } catch (e) {
	let { code, message, errors } = await multiCatchError(e);
	res.status(code).json({message, errors})
  }
};

export const getTaskByProject = async (req, res) => {

  const { id } = req.params;

  try {
    let tasks = await Task.findAll({
	  where: {
	    project_id: id
	  },
	  include: [
		{
		  model: Project, attributes: ['name']
		}
	  ]
	});

	return res.json({tasks});

  } catch (e) {
	let { code, message, errors } = await multiCatchError(e);
	res.status(code).json({message, errors})
  }

};
