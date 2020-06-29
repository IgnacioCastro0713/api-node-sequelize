import Role from '../../helpers/role';

export default (req, res, next) => {

  let requestHandler = req.headers.admin;

  if (typeof requestHandler == 'boolean') {
    requestHandler = requestHandler.toString();
  }

  const isAdmin = requestHandler === "true";
  if (isAdmin === Role.ADMIN) {
    next();
  } else {
    return res.status(403).json({ status: 403, message: 'Sorry but you are not an admin and you do not have access' });
  }
}