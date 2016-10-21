var jwt = require('jwt-simple');
var User = require('./users/userModel.js');


exports.getUsernameFromReq = function(req, next) {
  //recover username
  var token = req.headers['x-access-token'];
  if (!token) {
    next(new Error('No token'));
    return null;
  }
  var username = jwt.decode(token, 'secret').username;
  return username;
};

exports.getUserFromReq = function (req, next) {
  var username = exports.getUsernameFromReq(req, next);
  return User.findOne({username: username});
}