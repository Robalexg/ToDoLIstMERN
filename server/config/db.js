const mongoose = require('mongoose')

mongoose.connect(process.env.DB_LINK,{
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const db = mongoose.connection;


module.exports = db