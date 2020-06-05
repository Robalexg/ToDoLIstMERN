const express = require('express')
const dotenv = require('dotenv').config()
const cors = require('cors')
const app = express().use('*', cors());
const passport = require('passport')
const PORT = 4000
const db = require('./config/db.js')
const todoRoutes = require('./routes/todoRoutes.js')
const userRoutes = require('./routes/userRoutes.js')
const cookieParser = require('cookie-parser')
require('./config/passport.js')


app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

app.use(passport.initialize())
app.use(cookieParser())
app.use(express.json())


app.use('/todos',todoRoutes)
app.use('/user',userRoutes)


db.once('open',() => {
	console.log('MongoDB database connection established successful')
})

app.listen(PORT,() => {
	console.log(`Server connected on port ${PORT}`)
})
