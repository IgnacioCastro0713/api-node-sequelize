import { User } from '../models';
import jwt from 'jsonwebtoken';
import { multiCatchError } from "../../utils/helpers";
import { loginSchema, registerSchema } from '../validations/auth';

export const login = async (req, res) => {

  try {
    const { email, password } = await loginSchema.validateAsync(req.body, { abortEarly: false });
    let user = await User.findOne({ where: { email } });

    if (!user) {
      return res.json({ message: 'Incorrect email or not Exist account' });
    }

    if (!User.validPassword(password, user)) {
      return res.json({ message: 'Incorrect password' });
    }

    delete user.dataValues.createdAt;
    delete user.dataValues.updatedAt;
    delete user.dataValues.password;

    let token = await jwt.sign({ user }, process.env.JWT_KEY, { expiresIn: '2h' });

    res.json({
      user: {
        ...user.dataValues,
        token
      }
    });

  } catch (err) {
    let { code, message, errors } = await multiCatchError(err);
    res.status(code).json({ message, errors });
  }
};

export const register = async (req, res) => {

  try {
    const { name, email, password } = await registerSchema.validateAsync(req.body, { abortEarly: false });
    let [user, created] = await User.findOrCreate({ where: { email }, defaults: { name, email, password } });

    if (!created) {
      return res.json({ message: 'This user already exist', user: {} });
    }

    delete user.dataValues.password;
    return res.json({ user });
  } catch (e) {
    let { code, message, errors } = await multiCatchError(e);
    res.status(code).json({ message, errors })
  }
};

export const logout = (req, res) => {
  req.logout();
};
