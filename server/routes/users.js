var express = require('express');
var router = express.Router();

let {
  Signup,
  login
} = require('../controllers/users.controller')

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.send('respond with a resource users');
});

router.post('/register', Signup)
router.post('/login', login)

module.exports = router;
