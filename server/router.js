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

  // RESTRICTED

  // all users
  app.get('/api/getAllUsers', util.checkAuth, userController.getAllUsers);
  // board string
  app.get('/api/makeBoard', util.checkAuth, boardTool.makeBoard);

  // get a users high score
  app.get('/api/getHighScore', userController.getUserHighScore);

  // game ID -> board string
  app.post('/api/getBoard', util.checkAuth, boardTool.getBoard);

  // game results -> game results
  app.post('/api/finalizeGame', util.checkAuth, boardTool.finalizeGame);

  // opponent's name -> game ID, opponent's name
  app.post('/api/makeChallengeGame', util.checkAuth, boardTool.makeChallengeGame);

  // username -> user's pending games
  app.post('/api/getPendingGames', util.checkAuth, userController.getPendingGames);

  // UNRESTRICTED

  // word -> valid? score if valid
  app.post('/api/checkWord', boardTool.checkWord);

  // username, password -> session token
  app.post('/api/signup', userController.signup);

  // username, password -> session token
  app.post('/api/signin', userController.signin);
};
