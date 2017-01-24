/* --- --- ---- --- --- */
/* --- Requirements --- */
/* --- --- ---- --- --- */

var express = require('express');
var nunjucks = require('nunjucks');
var util = require('util');
var fs = require('fs');
var assert = require('assert')

// var db_conn_str = 'mongodb://localhost:27017/db';
// var MongoClient = require('mongodb').MongoClient;
// var mongojs = require('mongojs');
// var mongoose = require('mongoose');
// var database = mongoose.connect(db_conn_str);



/* --- --- -- --- --- */
/* --- Setup Code --- */
/* --- --- -- --- --- */

var pages = {
  templatesPath: __dirname + '/vault/html/',
  jsPath: __dirname + '/vault/js/',
  cssPath: __dirname + '/vault/css/',
  imgPath: __dirname + '/vault/img',

  welcome: __dirname + '/vault/html/welcome.html',
  login: __dirname + '/vault/html/login.html',
  signup: __dirname + '/vault/html/signup.html',
}

var app = express();
app.use('/css', express.static( pages['cssPath'] ));
app.use('/js', express.static( pages['jsPath'] ));
app.use('/img', express.static( pages['imgPath'] ));

nunjucks.configure(pages['templatesPath'], {
    autoescape: true,
    express: app
});


// function testConnection() {
//   MongoClient.connect(db_conn_str, function(err, db) {
//     if( err ) {
//       console.log('Connection Error...');
//       return;
//     }
//     console.log("Connected successfully to server");
//     db.close();
//   });
// }


/* --- DataBase Schemas --- */
// var userSchema = new mongoose.Schema({
//   firstName: String,
//   lastName: String
// });
// var userModel = mongoose.model('user', userSchema);






/* --- --- --- --- --- */
/* --- Application --- */
/* --- --- --- --- --- */



/* --- --- GET Requests --- --- */

app.get('/', function(request, response){

  response.render( 'welcome.html' );
});

app.get('/login', function(request, response){
  response.render( 'login.html' );
});

app.get('/signup', function(request, response){
  response.render( 'signup.html' );
});


/* --- --- POST Requests --- --- */

app.post('/login', function(request, response){

});

app.post('/signup', function(request, response){

});




/* --- --- -- --- --- */
/* --- Initialize --- */
/* --- --- -- --- --- */
app.listen(8000, function(){
  console.log('Listening on port 8000...');
});
