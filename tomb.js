/* --- --- ---- --- --- */
/* --- Requirements --- */
/* --- --- ---- --- --- */

var util = require('util');
var fs = require('fs');
var assert = require('assert')

var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');

// Custom Modules
var RoutinesModule = require('./routines');


/* --- --- --- --- --- */
/* --- Static Data --- */
/* --- --- --- --- --- */


var pages = {
  templatesPath: __dirname + '/vault/html/',
  jsPath: __dirname + '/vault/js/',
  cssPath: __dirname + '/vault/css/',
  imgPath: __dirname + '/vault/img',

  welcome: __dirname + '/vault/html/welcome.html',
  login: __dirname + '/vault/html/login.html',
  signup: __dirname + '/vault/html/signup.html',
}






// Export It
module.exports = {
  pages: pages
}
