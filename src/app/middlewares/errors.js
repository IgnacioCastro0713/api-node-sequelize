import app from '../../app';
import listEndpoints from 'express-list-endpoints';

export const errorNotFoundMiddleware = (req, res) => {
  res.status(404).json({
    message: 'Url Not Found',
    url: req.url,
    routes: listEndpoints(app)
  });
};
