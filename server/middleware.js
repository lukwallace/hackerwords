const bodyParser = require('body-parser');
const path = require('path');

module.exports = (app, express) => {

  /** For parsing application/json and application/x-www-form-urlencoded */
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({ extended: true }));

  app.use(express.static(path.join(__dirname, '/../')));
};
