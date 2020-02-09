import {User} from '../models';
import jwt from 'jsonwebtoken';

export const login = async (req, res) => {

  const {email, password} = req.body;

  let user = await User.findOne({
	where: {
	  email
	}
  });

  if (!user) {
	return res.json({
	  message: 'Incorrect email or not Exist account'
	});
  }

  if (!User.validPassword(password, user)) {
	return res.json({
	  message: 'Incorrect password'
	});
  }

  let token = jwt.sign({user}, 'secret', { expiresIn: '2h' });

  res.json({
	user,
	token
  });

};

export const register = async (req, res) => {

  const {name, email, password} = req.body;

  try {
	let user = await User.create({
	  'name': name, 'email': email, 'password': password
	});

	return res.json({user});

  } catch (e) {
	res.status(500).json({
	  message: 'Something goes wrong',
	  user: {}
	})
  }
};

export const logout = (req, res) => {
  req.logout();
};
