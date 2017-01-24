/* --- --- ---- --- --- */
/* --- Requirements --- */
/* --- --- ---- --- --- */

var express = require('express');
var nunjucks = require('nunjucks');
var util = require('util');
var fs = require('fs');
var assert = require('assert')
var Sequelize = require('sequelize');

// var knex = require('knex')({
//   client: 'sqlite3',
//   connection: {
//     filename: "./database.sqlite"
//   }
// });
//
// var bookshelf = require('bookshelf')(knex);

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



// var sequelize = new Sequelize('sqlite://database.sqlite');
var sequelize = new Sequelize('sqlite:///database.db', {
  dialect: 'sqlite',
})
// var sequelize = new Sequelize('postgresql://travellr_dummyuser:dummypassword123@travellrs.com:5432/travellr_dummy', {
//   dialect: 'postgres',
//   port: 5432
// })

var User = sequelize.define('user', {
  uname: { type: Sequelize.STRING, allowNull: false},
  pswrd: { type: Sequelize.STRING, allowNull: false},
  uniqueValue: {type: Sequelize.STRING, unique: true}
});


sequelize.sync();

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
