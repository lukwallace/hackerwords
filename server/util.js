const jwt = require('jwt-simple');
const User = require('./users/userModel.js');


exports.getUsernameFromReq = (req, res, next) => {
  // recover username
  const token = req.headers['x-access-token'];
  if (!token) {
    next(new Error('No token'));
    return null;
  }
  const username = jwt.decode(token, 'secret').username;
  return username;
};

exports.getUserFromReq = (req, res, next) => {
  const username = exports.getUsernameFromReq(req, res, next);
  return User.findOne({ username });
};

