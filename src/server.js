var express = require('express');
var app = express();
var port = 3000;

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.set('useNewUrlParser', true);
var bodyParser = require('body-parser');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://localhost:27017/node-demo', {
  useUnifiedTopology: true,
});

var nameSchema = new mongoose.Schema({
  entryName: String,
  eMail: String,
});

var User = mongoose.model('User', nameSchema);

app.listen(port, () => {
  console.log('Server listening on port ' + port);
});

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/components/Contact');
});

app.post('/addname', (req, res) => {
  var myData = new User(req.body);
  myData
    .save()
    .then((item) => {
      res.send('item saved to database');
    })
    .catch((err) => {
      res.status(400).send('unable to save to database');
    });
});

app.listen(port, () => {
  console.log('Server listening on port ' + port);
});
