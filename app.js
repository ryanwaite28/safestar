/* --- --- ---- --- --- */
/* --- Requirements --- */
/* --- --- ---- --- --- */

var express = require('express');
var nunjucks = require('nunjucks');
var util = require('util');
var fs = require('fs');
var assert = require('assert')
var Sequelize = require('sequelize');
var bcrypt = require('bcrypt');
var session = require('express-session')
var mongoose = require('mongoose');
var bodyParser = require('body-parser');

// Custom Modules
var ModelsModule = require('./models');
var RoutinesModule = require('./routines');
var TombModule = require('./tomb');


/* --- --- -- --- --- */
/* --- Setup Code --- */
/* --- --- -- --- --- */

const saltRounds = 10;
var pages = TombModule.pages;

var app = express();

if (app.get('env') === 'production') {
  app.set('trust proxy', 1) // trust first proxy
  sess.cookie.secure = true // serve secure cookies
}
app.use(session({
  secret: 'a9u33ch7d9had9a7',
  resave: true,
  saveUninitialized: true
}));

app.use( bodyParser.json() );
app.use( bodyParser.urlencoded({ extended: false }) );

app.use('/css', express.static( pages['cssPath'] ));
app.use('/js', express.static( pages['jsPath'] ));
app.use('/img', express.static( pages['imgPath'] ));

nunjucks.configure(pages['templatesPath'], {
  autoescape: true,
  express: app
});



/* --- --- --- --- --- */
/* --- Application --- */
/* --- --- --- --- --- */



/* --- --- GET Requests --- --- */

app.get('/', function(request, response){
  request.session['email'] = 'email'
  console.log(request.session);
  return response.render( 'welcome.html' );
});

app.get('/login', function(request, response){

  console.log(request.session);
  return response.render( 'login.html' );
});

app.get('/signup', function(request, response){
  // console.log(request);
  return response.render( 'signup.html' );
});


/* --- --- POST Requests --- --- */

app.post('/login', function(request, response){

   console.log('form-data --- ', request.body)
   return response.send('POST request to the login')

});

app.post('/signup', function(request, response){

  console.log('form-data --- ', request.body)
  return response.send('POST request to the signup')

});




/* --- --- -- --- --- */
/* --- Initialize --- */
/* --- --- -- --- --- */
app.listen(8000, function(){
  console.log('Listening on port 8000...');
});
