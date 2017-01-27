/* --- --- ---- --- --- */
/* --- Requirements --- */
/* --- --- ---- --- --- */

var util = require('util');
var fs = require('fs');
var assert = require('assert')

var mongoose = require('mongoose');

// Custom Modules
var RoutinesModule = require('./routines');
var TombModule = require('./tomb');



/* --- --- --- --- --- --- */
/* --- Mongoose Models --- */
/* --- --- --- --- --- --- */



var Users = mongoose.Schema({
    fname: String,
    lname: String,
    email: String,
    pswrd: String, // Hash Of Actual Password
    avatar: String,
    wallpaper: String,
    uniqueValue: String,
    date_created: Date,
    last_active: Date
}, { collection: 'users' });

var UserSecurity = mongoose.Schema({
    user_id: String,
    question_one: String,
    answer_one: String,
    question_two: String,
    answer_two: String,
    question_three: String,
    answer_three: String
}, { collection: 'user_security' });

var UserAccountInfo = mongoose.Schema({
    phone: String,
    type: String,
}, { collection: 'user_account_info' });




// Export It
module.exports = {

}
