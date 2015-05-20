var async = require('async');
var express = require('express');
var util = require('./utils');
var bodyParser = require('body-parser');
var app = module.exports.app = exports.app = express();
var errorhandler = require('errorhandler');

// Include the JSX transpiler.
require('node-jsx').install();

// Set up Express.
// --------------------------------
// The next four task only need to execute one time when server is first running.
// and when you want to call some function every time when user request please use
// parallel to implement(like getCookie, getSession, etc).
setBasicConfig();
setLivereload();
setRouter();
setErrorHandlerForDev();

app.listen(8094, function() {
  console.log(util.generateTimeStamp() + ' listening on PORT: 8094');
});

// internal function
// --------------------------------

// using async to parallelize the execution of express middlewares.
// this will cut our average response time down a lot.
function parallel(middlewares) {
  return function(req, res, next) {
    async.each(middlewares, function(mw, cb) {
      mw(req, res, cb);
    }, next);
  }
}

// subtask for express config.
// -------------------------------

// set the basic info for express like bodyParser, static content path etc.
function setBasicConfig() {
  app.set('views', util.DIRNAME + '/server/templates');
  app.set('view engine', 'ejs');
  app.use(bodyParser.json({}));
  app.use(bodyParser.urlencoded({extended: true}));
  app.use(express.static(util.DIRNAME + '/dist'));
}

// livereload config.
function setLivereload() {
  app.use(require('connect-livereload')());
}

// set router for express include backend router and some ajax router.
function setRouter() {
  require('./router/core-routers')(app);
}

// set error handler for development environment.
function setErrorHandlerForDev() {
  if (process.env.NODE_ENV === 'development') {
    app.use(errorhandler())
  }
}



