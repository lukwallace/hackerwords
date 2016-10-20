
var express = require('express');
var app = express();
require('middleware')(app, express);
require('router')(app, express);




app.listen(3000);