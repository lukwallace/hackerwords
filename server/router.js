var userController = require('./users/userController');

module.exports = function(app, expess) {
  app.post('/api/signup', userController.signup);
  app.post('/api/signin', userController.signin);
}