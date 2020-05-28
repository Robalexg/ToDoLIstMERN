const router = require('express').Router()
const user = require('../controllers/user.js')

router.route('/login').post(user.login)



module.exports = router

