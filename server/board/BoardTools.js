'use strict';
const Game = require('./GameModel.js');
const util = require('./../util.js');
const jwt = require('jwt-simple');
const wordSet = require('./wordSet.js');


module.exports = {

  makeChallengeGame(req, res, next) {
    const letters = 'aabcdeeefghiijklmnoopqrstuuvwxyz';
    let boardStr = '';
    for (let i = 0; i < 16; i += 1) {
      const randIndex = Math.floor(Math.random() * letters.length);
      boardStr += letters[randIndex];
    }



    util.getUserFromReq(req, next).then((user) => {
      Game.create({ boardString: boardStr, user_id: user._id }).then((game) => {
        util.getUsedIDFromUsername(req.body.username, (user_id) => {
          Game.create({ boardString: boardStr, user_id: user_id }).then((userGame) => {
            const token = jwt.encode(userGame._id, 'secret');
            res.json({ token, boardString: boardStr });
          });
        });
      });
    });
  },

  finalizeGame(req, res, next) {

    const score = Number(req.body.score);
    const wordsUsed = req.body.wordsPlayed;
    const boardStr = req.body.boardStr;
    const query = { boardString: boardStr };
    const toUpdate = { $set: { points: score, wordsPlayed: wordsUsed, pending: false } };
    Game.update(query, toUpdate, (err) => {
      if (err) {
        next(new Error(err));
      }
      Game.findOne(query, (error, result) => {
        res.json({ result });
      });
    });
  },

  makeBoard(request, res, next) {
    const letters = 'aabcdeeefghiijklmnoopqrstuuvwxyz';
    let result = '';
    for (let i = 0; i < 16; i += 1) {
      const randIndex = Math.floor(Math.random() * letters.length);
      result += letters[randIndex];
    }

    util.getUserFromReq(request, next).then((user) => {
      Game.create({ boardString: result, user_id: user._id }).then((game) => {
        const token = jwt.encode(game._id, 'secret');
        res.json({ token, boardString: result });
      });
    });
  },

  scoreWord(word) {
    const letterScores = {
      a: 1,
      b: 3,
      c: 3,
      d: 2,
      e: 1,
      f: 4,
      g: 2,
      h: 4,
      i: 1,
      j: 8,
      k: 5,
      l: 1,
      m: 3,
      n: 1,
      o: 1,
      p: 3,
      q: 10,
      r: 1,
      s: 1,
      t: 1,
      u: 1,
      v: 4,
      w: 4,
      x: 8,
      y: 4,
      z: 10,
    };

    const lengthScores = {
      1: 0,
      2: 0,
      3: 1,
      4: 1,
      5: 2,
      6: 3,
      7: 5,
      8: 11,
      9: 11,
      10: 11,
      11: 11,
      12: 11,
      13: 11,
      14: 11,
      15: 11,
      16: 11,
    };

    var score = lengthScores[word.length];
    for (var i = 0; i < word.length; i++) {
      score += letterScores[word[i]];
    }
    return score;
  },

  checkWord(req, res, next) {
    const word = req.body.word;
    if (wordSet.has(word)) {
      const wordScore = module.exports.scoreWord(word);
      res.json({ isWord: true, score: wordScore });
    } else {
      res.json({ isWord: false });
    }
  },
};
