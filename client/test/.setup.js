//example app of enzyme mocha taken from https://github.com/lelandrichardson/enzyme-example-mocha

require('babel-register')();

//global.$ = require('jquery')(window);
var jsdom = require('jsdom').jsdom;
global.$ = jsdom;

var exposedProperties = ['window', 'navigator', 'document'];

global.document = jsdom('');
global.window = document.defaultView;

Object.keys(document.defaultView).forEach((property) => {
  if (typeof global[property] === 'undefined') {
    exposedProperties.push(property);
    global[property] = document.defaultView[property];
  }
});

global.navigator = {
  userAgent: 'node.js'
};

documentRef = document;