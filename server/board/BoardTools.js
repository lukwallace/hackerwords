'use strict';
const Game = require('./GameModel.js');
const util = require('./../util.js');
const jwt = require('jwt-simple');
const wordSet = require('./wordSet.js');


module.exports = {
  makeBoard(request, res, next) {
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    let result = '';
    //var result = '';
    for (let i = 0; i < 16; i += 1) {
      const randIndex = Math.floor(Math.random() * 16);
      result += letters[randIndex];
    }

    util.getUserFromReq(request, next).then((user) => {
      Game.create({ boardString: result, user_id: user._id }).then((game) => {
        console.log('game', game);
        const token = jwt.encode(game._id, 'secret');
        res.json({ token, boardString: result });
      });
    });
  },

  checkWord(req, res, next) {
    const word = req.body.word;
    if (wordSet.has(word)) {
      res.json({ isWord: true });
    } else {
      res.json({ isWord: false });
    }
  },
};
