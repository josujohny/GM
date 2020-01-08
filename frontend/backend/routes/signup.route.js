const express = require('express');
const app = express();
const signupRoute = express.Router();

let Signup = require('../models/signup');

signupRoute.route('/create').post((req, res, next) => {
    Signup.create(req.body, (error, data) => {
      if (error) {
        return next(error)
      } else {
        res.json(data)
      }
    })
  });
  

  module.exports = signupRoute;