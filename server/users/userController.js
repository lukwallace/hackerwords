const Q = require('q');
const jwt = require('jwt-simple');
const User = require('./userModel.js');


// Promisify a few mongoose methods with the `q` promise library
const findUser = Q.nbind(User.findOne, User);
const createUser = Q.nbind(User.create, User);

module.exports = {
  signin(req, res, next) {
    console.log('signin in');
    const username = req.body.username;
    const password = req.body.password;

    findUser({ username })
      .then((user) => {
        if (!user) {
          return next(new Error('User does not exist'));
        }
        console.log('User:', user);
        console.log('Password:', password);
        return user.comparePasswords(password)
          .then((foundUser) => {
            if (foundUser) {
              const token = jwt.encode(user, 'secret');
              return res.json({ token });
            }
            return next(new Error('Wrong password'));
          });
      })
      .fail((error) => {
        next(error);
      });
  },

  signup(req, res, next) {
    const username = req.body.username;
    const password = req.body.password;

    // check to see if user already exists
    findUser({ username })
      .then((user) => {
        if (user) {
          return next(new Error('User already exist!'));
        }
        // make a new user if not one
        return createUser({
          username,
          password,
        });
      })
      .then((user) => {
        // create token to send back for auth
        const token = jwt.encode(user, 'secret');
        res.json({ token });
      })
      .fail((error) => {
        next(error);
      });
  },

  checkAuth(req, res, next) {
    // checking to see if the user is authenticated
    // grab the token in the header is any
    // then decode the token, which we end up being the user object
    // check to see if that user exists in the database
    const token = req.headers['x-access-token'];
    if (!token) {
      next(new Error('No token'));
    } else {
      const user = jwt.decode(token, 'secret');
      findUser({ username: user.username })
        .then((foundUser) => {
          if (foundUser) {
            res.send(200);
          } else {
            res.send(401);
          }
        })
        .fail((error) => {
          next(error);
        });
    }
  },
};
