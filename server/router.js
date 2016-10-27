const userController = require('./users/userController');
const boardTool = require('./board/BoardTools.js');
const path = require('path');
const util = require('./util.js');

module.exports = (app) => {
  app.get('/', (request, response) => {
    response.sendFile(path.resolve('client/index.html'));
  });

  app.get('/signin', (request, response) => {
    response.sendFile(path.resolve('client/index.html'));
  });

  // Restricted Server Calls
  app.get('/api/getAllUsers', util.checkAuth, userController.getAllUsers);
  app.get('/api/makeBoard', util.checkAuth, boardTool.makeBoard);

  app.post('/api/getBoard', util.checkAuth, boardTool.getBoard);
  app.post('/api/finalizeGame', util.checkAuth, boardTool.finalizeGame);
  app.post('/api/makeChallengeGame', util.checkAuth, boardTool.makeChallengeGame);

  app.post('/api/getPendingGames', util.checkAuth, userController.getPendingGames);

  // Unrestriced Server Calls
  app.post('/api/checkWord', boardTool.checkWord);
  app.post('/api/signup', userController.signup);
  app.post('/api/signin', userController.signin);
};
