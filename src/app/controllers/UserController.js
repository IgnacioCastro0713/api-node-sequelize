import {User, Project} from '../models/';

import {multiCatchError} from '../../utils/helpers'

export const getAllUsers = async (req, res) => {
  try {

	let users = await User.findAll();

	return res.json({users});
  } catch (e) {
	let { code, message, errors } = await multiCatchError(e);
	res.status(code).json({message, errors})
  }
};

export const createUser = async (req, res) => {

  const {name, email, password} = req.body;

  try {
	let user = await User.create({
	  name, email, password
	});

	return res.json({user});

  } catch (e) {
	let { code, message, errors } = await multiCatchError(e);
	res.status(code).json({message, errors})
  }

};

export const getOneUser = async (req, res) => {

  const {id} = req.params;

  try {
	let user = await User.findOne({
	  where: {id},
	  include: [
		{model: Project, attributes: ['name']}
	  ]
	});

	return res.json({user});

  } catch (e) {
	let { code, message, errors } = await multiCatchError(e);
	res.status(code).json({message, errors})
  }
};

export const updateUser = async (req, res) => {

  const {id} = req.params;
  const {name, email, password} = req.body;

  let user = await User.findOne({
	where: {id}
  });

  if (!user) {
	return res.json({
	  message: 'This user does not exist',
	  user: {}
	});
  }

  try {
	await User.update({
	  name, email, password
	});

	return res.json({message: 'User Updated Successfully', user});
  } catch (e) {
	let { code, message, errors } = await multiCatchError(e);
	res.status(code).json({message, errors})
  }

};

export const destroyUser = async (req, res) => {

  const {id} = req.params;

  try {

	let rowCount = await User.destroy({
	  where: {id}
	});

	return res.json({
	  message: 'User Deleted Successfully',
	  count: rowCount
	});

  } catch (e) {
	let { code, message, errors } = await multiCatchError(e);
	res.status(code).json({message, errors})
  }
};
