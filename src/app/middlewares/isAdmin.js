import Role from '../../helpers/role';

export default (req, res, next) => {
  const isAdmin = req.headers.admin === "true";
  if (isAdmin === Role.ADMIN) {
    next();
  } else {
    return res.status(403).json({
      status: 403,
      message: 'Sorry but you are not an admin and you do not have access'
    });
  }
}