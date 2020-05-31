const express = require('express')
const dotenv = require('dotenv').config()
const app = express()
const cors = require('cors')
const passport = require('passport')
const PORT = 4000
const db = require('./config/db.js')
const todoRoutes = require('./routes/todoRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
require('./config/passport.js')

app.use(cors({
  'allowedHeaders': ['Content-Type'],
  'origin': '*',
  'preflightContinue': true
}));
app.use(express.json())
app.use('/todos',todoRoutes)
app.use('/user',userRoutes)
app.use(passport.initialize())


db.once('open',() => {
	console.log('MongoDB database connection established successful')
})

app.listen(PORT,() => {
	console.log(`Server connected on port ${PORT}`)
})
