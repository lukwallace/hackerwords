/**
 * @file This has all of the server routes
 */

/** @module Router */

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

  /** RESTRICTED */

  /** Get all users */
  app.get('/api/getAllUsers', util.checkAuth, userController.getAllUsers);

  /** Make board string */
  app.get('/api/makeBoard', util.checkAuth, boardTool.makeBoard);

  /** Get a user's high score */
  app.get('/api/getHighScore', userController.getUserHighScore);

  /** Get board for users */
  app.post('/api/getBoard', util.checkAuth, boardTool.getBoard);

  /** Finalize game and send game results */
  app.post('/api/finalizeGame', util.checkAuth, boardTool.finalizeGame);

  /** Challenge another user to the same board */
  app.post('/api/makeChallengeGame', util.checkAuth, boardTool.makeChallengeGame);

  /** Get all pending challenges */
  app.post('/api/getPendingGames', util.checkAuth, userController.getPendingGames);

  /** Get finalized Game History of a User */
  app.post('/api/getGameHistory', util.checkAuth, boardTool.getGameHistory);


  /** UNRESTRICTED */

  /** Check to see if word is valid and score it if it is */
  app.post('/api/checkWord', boardTool.checkWord);

  /** Store newly created username and password and assign session token */
  app.post('/api/signup', userController.signup);

  /** Check to see if username and password match and if so assign session token*/
  app.post('/api/signin', userController.signin);

  /** If trying to access an invalid page, redirect to index.html */
  app.get('*', (request, response) => {
    response.redirect('/');
  });
};
