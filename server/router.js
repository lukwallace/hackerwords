var userController = require('./users/userController');
var boardTool = require('./board/BoardTools.js');
var path = require('path');
module.exports = function(app, express) {

  app.get('/', function(request, response, next) {
    response.sendFile(path.resolve('client/index.html'));
  });

  app.get('/api/makeBoard', boardTool.makeBoard);
  app.post('/api/checkWord', boardTool.checkWord);
  app.post('/api/signup', userController.signup);
  app.post('/api/signin', userController.signin);
}