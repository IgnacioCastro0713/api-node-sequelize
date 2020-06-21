import Role from '../../helpers/role';

export default function isAdmin(req, res, next) {
  if (req.header('admin') === Role.ADMIN) {
    next();
  } else {
    return res.status(403).json({
      status: 403,
      message: 'Sorry but you are not an admin and you do not have access'
    });
  }
}