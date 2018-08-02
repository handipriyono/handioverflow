let User = require('../models/users')
var jwt = require('jsonwebtoken');
let mails = require('../mail')

var bcrypt = require('bcryptjs');
const axios = require('axios');
require('dotenv').config()
module.exports = {


  Signup: function (req, res) {
    console.log('signup')
    let {
      username,
      email,
      password
    } = req.body

    let hash = bcrypt.hashSync(req.body.password, 8);


    User.create({
        username,
        email,
        password: hash
      })
      .then(function (result) {
        mails(req.body.email, req.body.username)
        console.log('passss')
        console.log(result)

        var token = jwt.sign({
          data: result.email,
          id: result._id
        }, 'handioverflow');
        res.json({
          result,
          token: token
        })

      })
      .catch(function (err) {
        console.log(err)
        res.json(err)
      })
  },



  login: function (req, res) {
    User.findOne({
        email: req.body.email
      })
      .then(function (resultUser) {
        if (resultUser) {

          let cek = bcrypt.compareSync(req.body.password, resultUser.password); // true
          if (cek) {


            var token = jwt.sign({
              data: resultUser.email,
              id: resultUser._id
            }, 'handioverflow');
            res.json({
              resultUser,
              token: token
            })

          } else {
            console.log('err')
            res.json('password/ username salah')
          }

        } else {

          res.json('pass/username salah')
        }
      })
      .catch(function (err) {
        console.log(err)
      })
  }


}
