var express = require('express');
var router = express.Router();
var userController = require("../controller/user")
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

/* GET home page. */
router.post('/signup',  userController.signup);

module.exports = router;
