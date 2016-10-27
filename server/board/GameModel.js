var Q = require('q');
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

//mongoose.connect('mongodb://localhost/HackerWords');


var gameSchema = new Schema({
  user_id: {
    type: 'ObjectId',
    required: true,
  },
  boardString: {
    type: String,
    required: true,
  },
  points: {
    type: Number,
    default: 0,
  },
  wordsPlayed: {
    type: [String],
    default: [],
  },
  pending: {
    type: Boolean,
    default: true,
  },
  opponent: {
    type: String,
    default: null,
  },
  opponentName: {
    type: String,
    default: null,
  },
});




var Game = mongoose.model('Game', gameSchema);
module.exports = Game;