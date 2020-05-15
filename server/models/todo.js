const mongoose = require('mongoose')

const Schema = mongoose.Schema

let todo = new Schema({
	todo_description: {
		type: String
	},
	todo_responsible: {
		type: String 
	},
	todo_priority: {
		type: String
	}
})

module.exports = mongoose.model('Todo',todo)