export const error404 = (req, res, next) => res.status(404).json({
  message: "Not found",
  status: 404
});

export const errorHandler = (error, req, res, next) => res.status(error.status || 500).json({
  error: {
    status: error.status || 500,
    message: error.message || 'Internal Server Error',
  },
});
