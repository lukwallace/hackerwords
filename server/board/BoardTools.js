module.exports = {
  makeBoard: function(request, res, next) {
    var letters = 'abcdefghijklmnopqrstuvwxyz';
    var result = '';
    for(var i = 0; i < 16; i++) {
      var randIndex = Math.floor(Math.random() * 16);
      result += letters[randIndex];
    }
    res.send(result);
  }
};