var express = require('express');
var router = express.Router();
// var error = 'Something bad happened, try again!';
/* GET home page. */
router.get('/', function (req, res, next) {
  // res.status(err.status || 500);
  res.json({
    if(error) {
      res.send('Something bad happened, try again!');
    },
  });
});
module.exports = router;
