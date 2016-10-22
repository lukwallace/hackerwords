const userController = require('./users/userController');
const boardTool = require('./board/BoardTools.js');
const path = require('path');

module.exports = (app) => {
  app.get('/', (request, response) => {
    response.sendFile(path.resolve('client/index.html'));
  });

  app.get('/api/makeBoard', boardTool.makeBoard);
  app.post('/api/checkWord', boardTool.checkWord);
  app.post('/api/signup', userController.signup);
  app.post('/api/signin', userController.signin);
};
