const express = require('express');
// const mongoose = require('mongoose');

const app = express();
// mongoose.connect('mongodb://localhost/HackerWords');

require('./middleware')(app, express);
require('./router')(app, express);


if (module.parent) {
  module.exports = app;
} else {
  console.log('Listening on port 3000!');
  app.listen(3000);
}
