var userController = require('./users/userController');
var path = require('path');
var boardTool = require('./board/BoardTools.js');
module.exports = function(app, expess) {
  app.get('/', function(request, response, next) {
    response.sendFile(path.resolve('client/index.html'));
  });

  app.get('/api/makeBoard', boardTool.makeBoard);

  app.post('/api/signup', userController.signup);
  app.post('/api/signin', userController.signin);
}