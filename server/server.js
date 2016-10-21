

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/HackerWords');

var express = require('express');
var app = express();
require('./middleware')(app, express);
require('./router')(app, express);



console.log('Listening on port 3000!');
app.listen(3000);