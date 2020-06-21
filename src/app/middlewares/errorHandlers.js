export function error404(req, res, next) {
  return res.status(404).json({
    message: "Not found",
    status: 404
  });
}

export function errorHandler(error, req, res, next) {
  return res.status(error.status || 500).json({
    error: {
      status: error.status || 500,
      message: error.message || 'Internal Server Error',
    },
  });
}
