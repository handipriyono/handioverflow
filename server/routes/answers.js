var express = require('express');
var router = express.Router();

let {
  create,
  allAnswer,
  updateAnswer
} = require('../controllers/answer.controller')


router.post('/answer/add', create)
router.get('/answer', allAnswer)
router.put('/answer/update/:id', updateAnswer)

module.exports = router;
