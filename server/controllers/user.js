const User  = require('../models/user.js')

module.exports = {
  login: (req,res) => {
    console.log("req",req.body)
    res.send("made it")
  }
}