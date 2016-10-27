const jwt = require('jwt-simple');
const User = require('./users/userModel.js');

exports.getUserIDFromUsername = (username, callback) => {
  User.findOne({ username }, (err, result) => {
    callback(result._id);
  });
};

exports.getUsernameFromReq = (req, next) => {
  // recover username
  console.log('HEADERS = ', req.headers);
  const token = req.headers['x-access-token'];
  if (!token) {
    next(new Error('No token'));
    return null;
  }
  const username = jwt.decode(token, 'secret').username;
  return username;
};

exports.getUserFromReq = (req, next) => {
  const username = exports.getUsernameFromReq(req, next);
  return User.findOne({ username });
};


// A middleware function to check authentication
exports.checkAuth = (req, res, next) => {
  const token = req.headers['x-access-token'];
  if (!token) {
    next(new Error('No token in util.checkAuth'));
    return null;
  }
  try {
    const username = jwt.decode(token, 'secret').username;
    next();
    return true;
  } catch (e) {
    next(new Error('Invalid Token!'));
    return null;
  }
};

exports.checkIsRealUser = (username, callback) => {
  User.find({}, (err, result) => {
    const allUsers = result.map(userEntry => (userEntry.username));

    if (allUsers.indexOf(username) < 0) {
      callback(err, false);
    } else {
      callback(err, true);
    }
  });
};
