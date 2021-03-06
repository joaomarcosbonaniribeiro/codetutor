var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var app = express();
var models = require('./models');

var validateRequest = require('./middlewares/validateRequest');
var routes = require('./routes/index');
var usuario = require('./routes/usuario');
var disciplina = require('./routes/disciplina');
var assunto = require('./routes/assunto');
var video = require('./routes/video');

// uncomment after placing your favicon in /public
app.use(favicon(path.join(__dirname, 'public/image', 'tutor-icon.png')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/usuario', usuario);
app.use('/sec', validateRequest);
app.use('/sec/disciplina', disciplina);
app.use('/sec/assunto', assunto);
app.use('/sec/video', video);

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
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
});

module.exports = app;