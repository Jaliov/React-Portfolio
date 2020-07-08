const express = require('express');
const app = express();
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const contactRoutes = express.Router();
const PORT = process.env.PORT || 4000;
const morgan = require('morgan');
app.use(cors());
app.use(bodyParser.json());
const path = require('path');
app.use(morgan('tiny'));

// const routes = require('./routes');

// app.get('/api', (req, res) => {
//   const data = {
//     username: 'blobby',
//     age: 93,
//   };
//   res.json(data);
// });

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
// app.use('/', routes);
app.use('/routes/testAPI', contactRoutes);
app.use(express.json());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
//
app.use(express.static(path.join(__dirname, 'public')));

mongoose.Promise = global.Promise;

mongoose.connection.on('connected', () => {
  console.log('MongDB is connected!!!');
});

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));

  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}

app.listen(PORT, function () {
  console.log('Backend server is running on Port: ' + PORT);
});

module.exports = app;
