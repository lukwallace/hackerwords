/**
 * @file This has all the server-side utility functions needed to check authentication, get userID, etc
 */

const jwt = require('jwt-simple');
const User = require('./users/userModel.js');

/** Given a username, find the userId from database */
/**
  * This function is used to find the userId from database given a username.
  * @method getUserIDFromUsername
  * @param {object} req request object
  * @param {object} res response object
  */
exports.getUserIDFromUsername = (username, callback) => {
  User.findOne({ username }, (err, result) => {
    callback(result._id);
  });
};

/** Get the username from the request */
exports.getUsernameFromReq = (req, next) => {

  /** Recover username */
  console.log('HEADERS = ', req.headers);
  const token = req.headers['x-access-token'];
  if (!token) {
    next(new Error('No token'));
    return null;
  }
  const username = jwt.decode(token, 'secret').username;
  return username;
};

/** Get the user from the request */
exports.getUserFromReq = (req, next) => {
  const username = exports.getUsernameFromReq(req, next);
  return User.findOne({ username });
};

/** A middleware function to check authentication */
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

/** Check if user is real */
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
