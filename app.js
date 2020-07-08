var createError = require('http-errors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = express.Router();
const PORT = process.env.PORT || 4000;
//app.use(cors());
app.use(bodyParser.json());
var path = require('path');
//var cookieParser = require('cookie-parser');
var logger = require('morgan');
let User = require('./routes/portfolio.model');

var indexRouter = require('./routes/index');
var usersRouter = require('./routes/users');
var testAPIRouter = require('./routes/testAPI');

// view engine setup
app.set('views', path.join(__dirname, 'views'));
// app.set('view engine', 'jade');

app.use(logger('dev'));
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: false }));
// app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use('/testAPI', testAPIRouter);
app.use('/', indexRouter);
app.use('/users', usersRouter);

// catch 404 and forward to error handler
app.use(function (req, res, next) {
  next(createError(404));
});

mongoose.Promise = global.Promise;
mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/Portfolio',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  },
  (err, client) => {
    if (err) return console.error(err);
    console.log('Connected to Database');
  }
);

mongoose.connection.on('connected', () => {
  console.log('MongDB is connected!!!');
});

// error handler
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Step 3

app.use('/testAPI', contactRoutes);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('React-Portfolio/build'));
}

app.listen(PORT, function () {
  console.log('Backend server is running on Port: ' + PORT);
});

module.exports = app;
