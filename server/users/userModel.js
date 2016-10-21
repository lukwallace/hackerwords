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


userSchema.methods.comparePasswords = (candidatePassword) => {
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

userSchema.pre('save', (next) => {
  const user = this;

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
