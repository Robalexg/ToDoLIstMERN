const router = require('express').Router()
const todo = require('../controllers/todo')

router.route('/').get(todo.getAll)
router.route('/add').post(todo.add)
router.route('/:id').get(todo.getOne)
router.route('/update/:id').get(todo.update)
router.route('/delete/:id').delete(todo.delete)







module.exports = router 