const router = require('express').Router()
const user = require('../controllers/user.js')

router.route('/login').post(user.login)
router.route('/register').post(user.register)




module.exports = router

