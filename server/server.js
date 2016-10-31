/**
 * @file This is the server
 */

/** @module Server */


const express = require('express');

const app = express();

require('./middleware')(app, express);
require('./router')(app, express);

if (module.parent) {
  module.exports = app;
} else {
  console.log('Listening on port 3000!');
  app.listen(3000);
}
