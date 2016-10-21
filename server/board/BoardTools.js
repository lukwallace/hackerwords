
var Game = require('./GameModel.js');
var util = require('./../util.js');
var jwt = require('jwt-simple');
var wordSet = require('./wordSet.js');

module.exports = {
  makeBoard: function(request, res, next) {
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for(var i = 0; i < 16; i++) {
      var randIndex = Math.floor(Math.random() * 16);
      result += letters[randIndex];
    }

    util.getUserFromReq(request, next).then( function (user) {
      Game.create({boardString:result, user_id:user._id}).then(function(game) {
        console.log('game', game);
        var token = jwt.encode(game._id, 'secret');
        res.json({token: token, boardString:result});
      });
    });
  },

  checkWord: function(req, res, next) {
    var word = req.body.word;
    if (wordSet.has(word)) {
      res.json({isWord:true});
    } else {
      res.json({isWord:false});
    }
  }
};