const passport = require('passport')
const LocalStrategy = require('passport-local').Strategy
const User = require('../models/user')
const bcrypt = require('bcrypt')


const register = (email,pass,done) => {
  User
  .find({email})
  .then(user => { 
    if(user.length === 0){
        bcrypt
        .hash(pass,10)
        .then((hash) => {
          let newUser = new User({email,pass:hash})    
          newUser
          .save()
          .then(() => {
            return done(null,{email:newUser.email,id:newUser.id},{message:'User Created'})
          })
          .catch(err => {
            return done(err,false,{message:'Oops! Looks like an error'})
          })
        })
    }else{
      return done(null,false,{message: 'Email Already Taken'})
    }
  })
  .catch((err) => {
    return done(err,false,{message:'Oops! Looks like an error'})
  })
}

const login = (email,pass,done) => {
  User
  .find({email})
  .then(user => {
    user = user[0]
    if(user.length === 0){
      return done(null,false,{message:'Incorrect username or password'})
    }
    bcrypt
    .compare(
      pass, 
      user.pass,
      (err,result) => {
        if(err || !result){
          return done(err,false,{message:'Incorrect username or password'})
        }

        return done(null,{email:user.email,id:user._id},{message: 'success'}) 
      })
    
  })
  .catch(err => {
    return done(err,false,{message:'Oops! Looks like an error'})
  })
} 

passport.use('register',new LocalStrategy({
  usernameField: 'email',
  passwordField: 'pass',
  session: false
},register))

passport.use('login', new LocalStrategy({
  usernameField: 'email',
  passwordField: 'pass',
  session: false
},login))



