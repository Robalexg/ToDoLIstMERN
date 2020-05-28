const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')
const PORT = 4000
const db = require('./config/db.js')
const routes = require('./routes/routes.js')
app.use(cors())
app.use(express.json())
app.use('/todos',routes)

db.once('open',() => {
	console.log('MongoDB database connection established successful')
})

app.listen(PORT,() => {
	console.log(`Server connected on port ${PORT}`)
})
