const Q = require('q');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt-nodejs');

const SALT_WORK_FACTOR = 10;
const Schema = mongoose.Schema;

mongoose.connection.on('open', () => {
  console.log('mongoose connection opened');
});

mongoose.connection.on('disconnected', () => {
  console.log('mongoose connection closed');
});

mongoose.connect('mongodb://localhost/HackerWords');


const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  salt: String,
});

// A case not to use arrow functions: since arrow functions have
// anonymous 'this' so they can carry the 'this' from outside their
// scope - we don't be able to access the user if we use it.
userSchema.methods.comparePasswords = function (candidatePassword) {
  console.log('User', this);
  const savedPassword = this.password;
  return new Q.Promise((resolve, reject) => {
    bcrypt.compare(candidatePassword, savedPassword, (err, isMatch) => {
      console.log('Error: ', err);
      console.log('isMatch: ', isMatch);
      if (err) {
        reject(err);
      } else {
        resolve(isMatch);
      }
    });
  });
};

// A case not to use arrow functions: since arrow functions have
// anonymous 'this' so they can carry the 'this' from outside their
// scope - we don't be able to access the user if we use it.
userSchema.pre('save', function (next) {
  const user = this;
  console.log('User Pre:', user);

  // only hash the password if it has been modified (or is new)
  if (!user.isModified('password')) {
    next();
    return;
  }

  // generate a salt
  bcrypt.genSalt(SALT_WORK_FACTOR, (err, salt) => {
    if (err) {
      next(err);
      return;
    }

    // hash the password along with our new salt
    bcrypt.hash(user.password, salt, null, (error, hash) => {
      if (error) {
        next(error);
        return;
      }

      // override the cleartext password with the hashed one
      user.password = hash;
      user.salt = salt;
      next();
    });
  });
});


const User = mongoose.model('User', userSchema);
module.exports = User;
