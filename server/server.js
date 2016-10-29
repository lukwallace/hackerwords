/**
 * @file This is the server
 */


const express = require('express');

const app = express();

require('./middleware')(app, express);
require('./router')(app, express);

/** This is here so you can export the server for supertest to test */
if (module.parent) {
  module.exports = app;
} else {
  console.log('Listening on port 3000!');
  app.listen(3000);
}
