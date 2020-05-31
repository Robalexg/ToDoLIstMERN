const User  = require('../models/user.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const passport = require('passport');


module.exports = {
  login: (req,res,next) => {
    passport.authenticate('login',{session:false}, (err,user,info) => {
      if(err || !user){
        return res.status(400).send(err)
      }
        return res.status(200).json(user)
    })(req,res,next)
  },
  register: (req,res,next) => {  

    passport.authenticate('register',{session:false},(err,user,info) => {
        const message = info.message
        if( err || !user){
          return res.status(400).send(err)
        }

        return res.status(201).send(user)
    })(req,res,next)
  },
}