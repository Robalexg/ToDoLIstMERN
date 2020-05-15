const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://Rob:rob@tododb-fv3k0.mongodb.net/test?retryWrites=true&w=majority',{
	useNewUrlParser: true,
	useUnifiedTopology: true
})

const db = mongoose.connection;


module.exports = db