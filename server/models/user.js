const mongoose = require('mongoose')
const Schema = mongoose.Schema

let user = new Schema({
  email: {
    type: String,
    required:true
  },
  pass: {
    type: String,
    required:true
  }
})

module.exports = mongoose.model('user',user)