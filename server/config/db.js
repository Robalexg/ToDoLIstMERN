const mongoose = require('mongoose')

mongoose.connect('',{
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const db = mongoose.connection;


module.exports = db