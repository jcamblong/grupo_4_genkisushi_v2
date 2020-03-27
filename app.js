const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
//const logger = require('morgan');
const session = require('express-session');
const auth = require('./middlewares/auth');

//para poder usar los metodos PUT Y DELETE | CGR
const methodOverride = require('method-override');

const indexRouter = require('./routes/index');
const usersRouter = require('./routes/users');
const productsRouter = require('./routes/products');
const testRouter = require('./routes/test');
const apiUsersRouter = require('./routes/api/users');
const apiProductsRouter = require('./routes/api/products');
const apiOrdersRouter = require('./routes/api/orders');

const db = require("./database/models");


const app = express();

// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

//app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session(
      {
        resave: true,
        saveUninitialized: true,
        secret:"Hola Kenyi"
      }
));
app.use(auth);

//Para poder pisar el method="POST" en el formulario por PUT y  DELETE | CGR
app.use(methodOverride("_method"));

app.use('/', indexRouter);
app.use('/users', usersRouter);
app.use('/products', productsRouter);
app.use('/color', testRouter);
app.use('/api/users', apiUsersRouter);
app.use('/api/products', apiProductsRouter);
app.use('/api/orders', apiOrdersRouter);


//Entra pero con req.body.email undefined, viene vacío
app.post('/api/check', function (req, res) {
  console.log("Estoy en app " + req.body.email)
  let code = db.users.findOne({ where: { email: req.body.email } }) ? 200 : 404;
  res.status(code), end("");
});

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
