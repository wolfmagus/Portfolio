//1. The go between for the front end client and the back end server
const express = require('express')
const app = express()
require('dotenv').config()
const morgan = require('morgan')
const mongoose = require('mongoose')
const expressJwt = require('express-jwt')
//Middleware for express and morgan
app.use(express.json())
app.use(morgan('dev'))
//connect to mongodb
mongoose.connect(
  'mongodb://localhost:27017/user-authentication',
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useCreateIndex: true,
    useFindAndModify: false
  },
  () => console.log('Connected to the DB')
)
// '/auth' is the end point used for login and signup
// /signup or /login can be attached to /auth to send data
app.use('/auth', require('./routes/authRouter.js'))
app.use('/api', expressJwt({secret: process.env.SECRET, algorithms: ['HS256']}))
app.use('/api/todo', require('./routes/todoRouter.js'))
//Handle errors server side
app.use((err, req, res, next) => {
  console.log(err)
  if(err.name === "UnauthorizedError"){
    res.status(err.status)
  }
  return res.send({errMsg: err.message})
})

app.listen(9000, () => {
  console.log(`Server is running on local port 9000`)
})