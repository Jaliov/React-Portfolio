require('dotenv').config();
// var createError = require('http-errors');
const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const PORT = process.env.PORT || 4000;

app.use(bodyParser.json());
var path = require('path');
var logger = require('morgan');

const testAPIRouter = require('./routes/testAPI');

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

// app.use(express.static(path.join(__dirname, 'public')));app.use('/public', express.static(__dirname + '/public'));
app.use('/public', express.static(__dirname + '/public'));
app.use(express.static(__dirname + 'public/app.css'));
app.use(express.static(__dirname + 'public/javascripts/script.js'));

app.use('/testAPI', testAPIRouter);

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
//process.env.MONGODB_URI;

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

app.listen(PORT, function () {
  console.log('Backend server is running on Port: ' + PORT);
});

module.exports = app;
