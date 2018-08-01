let Answer = require('../models/answers')
var jwt = require('jsonwebtoken');
const axios = require('axios')
require('dotenv').config()



module.exports = {


  create: function (req, res) {
    var decodeds = jwt.verify(req.headers.token, 'handioverflow');
    console.log(decodeds, 'ini decodes')
    Answer.create({
        answer: req.body.answer,
        userId: decodeds.id,
        questionId: req.body.questionId
      })
      .then(function (result) {
        res
          .status(201)
          .json(result)
      })
      .catch(function (err) {
        console.log(err)
        res.json(err)
      })
  },



  allAnswer: function (req, res) {
    // var decodeds = jwt.verify(req.headers.tokenapp, process.env.JWTsecret);
    // console.log(decodeds)
    Answer.find({})
      .then(function (dataAnswer) {
        console.log(dataAnswer)
        res.json(dataAnswer)
      })
      .catch(function (err) {
        console.log(err)
        res.json(err)
      })
  },


  updateAnswer: function (req, res) {
    Answer.findByIdAndUpdate(req.params.id, {
        content: req.body.answer
      })
      .then(function (dataUpdate) {
        console.log(dataUpdate)
        res.json(dataUpdate)
      })
      .catch(function (err) {
        console.log(err)
        res.json(err)
      })

  }

}
