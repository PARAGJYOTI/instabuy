//Exporting the Node-Modules

var express = require('express');
var path = require('path');
var session =require('express-session');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var passport =require('passport');
/* Exporting and using Mongoose Models and Connecting to mongodb Server
*/
//require('./User_Profile_Model');

var multer= require('multer');
var fs = require('fs');
var mongoose = require('mongoose');
require('./models/User_Profile_Model');
require('./models/Post_Model');
var UserProfile = mongoose.model('UserProfile');
mongoose.connect('mongodb://127.0.0.1:27017/test');
var Post = mongoose.model('Post');
var crypto = require('crypto');
var  bCrypt = require('bcrypt-nodejs');

/*Specifying The Route Paths*/

var api = require('./routes/api_post');
var users = require('./routes/user_profile_api');
var authentication = require('./routes/authentication_local')(passport);
var passport_init = require('./passport/passport_init');
    passport_init(passport);
var app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

/*app.use ... The middlewares */

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use(session({ secret: 'keyboard cat' }));

//using passport middleware here
app.use(passport.initialize());
app.use(passport.session());

//SetTing the routes 
app.use('/', api,users);
//app.use('/users' , users)
app.use('/auth' , authentication);
//app.use('/users', users);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});


module.exports = app;
