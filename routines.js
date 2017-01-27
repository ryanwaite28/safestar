/* --- --- ---- --- --- */
/* --- Requirements --- */
/* --- --- ---- --- --- */

var util = require('util');
var fs = require('fs');
var assert = require('assert');
var bcrypt = require('bcrypt');
const saltRounds = 10;

var mongoose = require('mongoose');
// mongoose.connect('mongodb://localhost/test');
// var db = mongoose.connection;
// db.on('error', console.error.bind(console, 'connection error:'));
// db.once('open', function() {
//   console.log('--- Connected!');
// });

// Custom Modules
var ModelsModule = require('./models');
var TombModule = require('./tomb');








// Export It
module.exports = {

}
