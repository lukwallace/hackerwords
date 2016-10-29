const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// mongoose.connect('mongodb://localhost/HackerWords');

/** Game Schema */
const gameSchema = new Schema({
  // ID of the player
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
  // Whether or not the game has finished
  pending: {
    type: Boolean,
    default: true,
  },
  // ID of the opponent's mirrored game
  opponent: {
    type: String,
    default: null,
  },
  opponentName: {
    type: String,
    default: null,
  },
});


const Game = mongoose.model('Game', gameSchema);
module.exports = Game;
