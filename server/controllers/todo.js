const Todo = require('../models/todo')

module.exports = {

	getAll: (req,res) => {
    Todo
    .find({userID:req.params.id})
    .then((todos) => {
      res.status(200).send(todos)
    })
    .catch(err => {
      console.log('err',err)
    }) 

	},
	add: (req ,res) => {
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
				if(req.body.title === 'description'){

					todo.description = req.body.contents
				}
				else if (req.body.title === 'responsible') {
					todo.responsible = req.body.contents
				}
				else if (req.body.title === 'priority') {
					let obj = {
						title: req.body.title,
						contents: req.body.contents
					}
					res.send(obj)
					todo.priority = req.body.contents
				}


				todo
				.save()
				.then(() => {
					res.send('added successfully')
				})
				.catch(err => {
					res.send('failed to add new Todo')
				})

			}
		})
	},
	delete: (req,res) => {
		let id = req.params.id
		Todo.findById(id,(err,todo) => {
			if(!todo){
				res.status(404).send('no data is found')
			}else {

				todo.delete()
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