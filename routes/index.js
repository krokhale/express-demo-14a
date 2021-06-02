var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  // res.render('index', { title: 'Express' });

  res.json({success: true, page: 'Home Page'})
});

// router.get('/john', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   res.json({success: true, page: 'Johns Page'})
// });

router.get('/settings/:name/:id', function(req, res, next) {
  // res.render('index', { title: 'Express' });
  // write code here to respond to the request
  // look up the information in the req object
  // make a database query call
  // send back the info from the db to the browser and terminate the request

  // console.log(req);

  console.log('req.params are', req.params)
  console.log('req.query is', req.query)
  // console.log('req.body is', req.body)
  res.json({success: true, page: 'John settings Page'})
});

// router.get('/settings/jane', function(req, res, next) {
//   // res.render('index', { title: 'Express' });
//   setTimeout(() => {
//     res.json({success: true, page: 'Jane settings Page'})
//   }, 5000)
//
// });

module.exports = router;
