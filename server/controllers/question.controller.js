let Question = require('../models/question')
var jwt = require('jsonwebtoken');
const axios = require('axios')
require('dotenv').config()



module.exports = {
  // viewTodo: function (req, res) {
  //   var decodeds = jwt.verify(req.headers.token, 'handioverflow');
  //   console.log('ini idi decodes', decodeds.id)
  //   Todo.find({
  //       author: decodeds.id
  //     }).sort({
  //       createdAt: 'desc'
  //     })
  //     .populate('author')
  //     .exec(function (err, data) {
  //       if (err) {
  //         console.log(err)
  //         res.json(err)
  //       } else {
  //         console.log('ini data', data)
  //         res.json(data)
  //       }
  //     })
  // },

  create: function (req, res) {
    var decodeds = jwt.verify(req.headers.token, 'handioverflow');
    console.log(decodeds, 'ini decodes')
    Question.create({
        question: req.body.question,
        userId: decodeds.id,
        title: req.body.title
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


  deleteQuestion: function (req, res) {
    Question.findByIdAndRemove({
        _id: req.params.id
      })
      .then(function (result) {
        res.json({
          message: "question telah dihapus",
          result
        })
      })
      .catch(function (err) {
        console.log(err)
        res.json(err)
      })
  },

  allQuestion: function (req, res) {
    // var decodeds = jwt.verify(req.headers.tokenapp, process.env.JWTsecret);
    // console.log(decodeds)

    Question.find({})
      .populate('userId')
      .exec(function (err, data) {
        if (err) {
          console.log(err)
          res.json(err)
        } else {
          console.log('ini data', data)
          res.json(data)
        }

      })
    // .then(function (dataQuestion) {
    //   console.log(dataQuestion)
    //   res.json(dataQuestion)
    // })
    // .catch(function (err) {
    //   console.log(err)
    //   res.json(err)
    // })
  },




  oneQuestion: function (req, res) {
    Question.findById(req.params.id)
      .populate('answerId')
      .populate('userId')
      .exec(function (err, data) {
        if (err) {
          console.log(err)
          res.json(err)
        } else {
          console.log('ini data', data)
          res.json(data)
        }

      })
    // .then(function (dataQuest) {
    //   console.log(dataQuest)
    //   res.json(dataQuest)
    // })
    // .catch(function (err) {
    //   console.log(err)
    //   res.json(err)
    // })

  },



  updateQuestion: function (req, res) {
    Question.findByIdAndUpdate(req.params.id, {
        content: req.body.question
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
