import { Project, User } from '../models/';
import { multiCatchError } from '../../utils/helpers'
import { createSchema, updateSchema } from '../validations/user';

export const getAllUsers = async (req, res) => {
  try {
    let users = await User.scope('withOutPassword').findAll();

    return res.json({ users });
  } catch (e) {
    let { code, message, errors } = await multiCatchError(e);
    res.status(code).json({ message, errors })
  }
};

export const createUser = async (req, res) => {

  try {
    const { name, email, password } = await createSchema.validateAsync(req.body, { abortEarly: false });
    let user = await User.create({ name, email, password });

    return res.json({ user });
  } catch (e) {
    let { code, message, errors } = await multiCatchError(e);
    res.status(code).json({ message, errors })
  }
};

export const getOneUser = async (req, res) => {

  try {
    const { id } = req.params;
    let user = await User.scope('withOutPassword').findOne({
      where: { id },
      include: [{ model: Project, attributes: ['name'] }]
    });

    if (!user) {
      return res.json({ message: 'This user does not exist', user: {} });
    }

    return res.json({ user });
  } catch (e) {
    let { code, message, errors } = await multiCatchError(e);
    res.status(code).json({ message, errors })
  }
};

export const updateUser = async (req, res) => {

  try {
    const { id } = req.params;
    const { name, email, password } = await updateSchema.validateAsync(req.body, { abortEarly: false });

    let user = await User.scope('withOutPassword').findOne({ where: { id } });

    if (!user) {
      return res.json({ message: 'This user does not exist', user: {} });
    }
    await User.update({ name, email, password });

    return res.json({ message: 'User Updated Successfully', user });
  } catch (e) {
    let { code, message, errors } = await multiCatchError(e);
    res.status(code).json({ message, errors })
  }
};

export const destroyUser = async (req, res) => {

  try {
    const { id } = req.params;
    let rowCount = await User.destroy({ where: { id } });

    return res.json({ message: 'User Deleted Successfully', count: rowCount });
  } catch (e) {
    let { code, message, errors } = await multiCatchError(e);
    res.status(code).json({ message, errors })
  }
};
