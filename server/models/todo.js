const mongoose = require('mongoose')

const Schema = mongoose.Schema

let todo = new Schema({
	description: {
		type: String
	},
	responsible: {
		type: String 
	},
	priority: {
		type: String
	},
  userID: {
    required:true,
    type: String
  }
})

module.exports = mongoose.model('Todo',todo)