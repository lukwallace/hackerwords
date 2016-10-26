const userController = require('./users/userController');
const boardTool = require('./board/BoardTools.js');
const path = require('path');
const util = require('./util.js');

module.exports = (app) => {
  app.get('/', (request, response) => {
    response.sendFile(path.resolve('client/index.html'));
  });

 
  app.get('/home', (request, response) => {
    response.sendFile(path.resolve('client/index.html'));
    /*
    util.checkAuth(request, response, (verified) => {
      console.log('VERIFIED = ', verified);
      if(verified === true) {
        response.sendFile(path.resolve('client/index.html'));
      } else {
        userController.signin();
      }
    });
    */
  });

  app.get('/signin', (request, response) => {
    response.sendFile(path.resolve('client/index.html'));
  });

  app.get('/api/getAllUsers', util.checkAuth, userController.getAllUsers);

  app.post('/api/getPendingGames', util.checkAuth, userController.getPendingGames);

  app.post('/api/finalizeGame', util.checkAuth, boardTool.finalizeGame);

  app.post('/api/makeChallengeGame', util.checkAuth, boardTool.makeChallengeGame);

  app.get('/api/makeBoard', util.checkAuth, boardTool.makeBoard);
  app.post('/api/checkWord', boardTool.checkWord);
  app.post('/api/signup', userController.signup);
  app.post('/api/signin', userController.signin);
};
