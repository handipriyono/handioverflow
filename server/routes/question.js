var express = require('express');
var router = express.Router();

let {
  create,
  deleteQuestion,
  allQuestion,
  updateQuestion,
  oneQuestion
} = require('../controllers/question.controller')


router.post('/question/add', create)
router.delete('/question/delete/:id', deleteQuestion)
router.get('/question', allQuestion)
router.get('/question/:id', oneQuestion)
router.put('/question/update/:id', updateQuestion)

module.exports = router;
