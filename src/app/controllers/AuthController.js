import { User } from '../models';

export const login = async (req, res) => {

};

export const register = async (req, res) => {

  const { name, email, password } = req.body;

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
