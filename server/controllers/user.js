const User  = require('../models/user.js')
const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken');
const passport = require('passport');
const auth = require('../config/auth')


module.exports = {
  login: (req,res) => {
    passport.authenticate('login',{session:false}, (err,user,info) => {
      if(err || !user){
        return res.status(400).send(err)
      }
        
      const accToken = auth.genToken(user)
      const reToken = auth.genReToken(user)
      res.cookie('token',accToken,{httpOnly:true})
      res.cookie('reToken',reToken,{httpOnly:true})
     return res.status(200).json({...user,accToken,reToken})
    })(req,res)
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