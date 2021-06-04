var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a user');
});

router.get('/john', function(req, res, next) {
  res.send('respond with john');
});

module.exports = router;
