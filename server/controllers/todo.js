const Todo = require('../models/todo')

module.exports = {
	getAll: (req,res) => {
		Todo.find((err,todos) => {
			if(err){
				return err
			}else{
				res.send(todos)
			}
		})
	},
	add: (req ,res) => {
		console.log('body',req)
		let newTodo = new Todo(req.body)
		newTodo
		.save()
		.then(todo => {
			res.send('added successfully')
		})
		.catch(err => {
			res.send('failed to add new Todo')
		})
	},
	getOne: (req,res) => {

		let id = req.params.id
		console.log("id",id)
		Todo.findById(id, (err,todo) => {
				res.send(todo)
		})
	},
	update: (req,res) => {
		let id = req.params.id

		Todo.findById(id,(err,todo) => {
			if(!todo){
				res.status(404).send('no data is found')
			}else {
				todo.todo_description = req.body.todo_description
				todo.todo_responsible = req.body.todo_responsible
				todo.todo_priority = req.body.todo_priority

				todo.save()
				.then((todo) => {
					res.send('success')
				})
				.catch((err) => {
					res.status(400).send('Update falied')
				})

			}
		})
	}
}