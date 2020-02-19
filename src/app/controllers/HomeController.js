import app from '../../app';
import listEndpoints from 'express-list-endpoints';

export const home = async (req, res) => {
  return await res.json({
    author: 'Ignacio Castro',
    'git-url': 'https://github.com/IgnacioCastro0713/node-sequalize-express-mysql-postgre',
    message: 'Welcome to my Api Rest',
    routes: listEndpoints(app)
  });
};
