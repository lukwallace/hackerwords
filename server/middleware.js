var bodyParser = require('body-parser');



module.exports = function(app, express) {
  app.use(bodyParser.json()); // for parsing application/json
  app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded

  app.use(express.static(__dirname + '../compiled/client'));

}