const express = require('express');
const router = express.Router();
const User = require('./portfolio.model');

router.post('/save', (req, res) => {
  const data = req.body;

  const newUser = new User(data);

  newUser.save((error) => {
    if (error) {
      res.status(500).json({ msg: 'Sorry, internal server errors' });
      return;
    }
    //User
    return res.json({
      msg: 'Your data has been saved!!!!!!',
    });
  });
  // Routes
  router.get('/', (req, res) => {
    User.find({})
      .then((data) => {
        console.log('Data: ', data);
        res.json(data);
      })
      .catch((error) => {
        console.log('error: ', daerrorta);
      });
  });
});

module.exports = router;
