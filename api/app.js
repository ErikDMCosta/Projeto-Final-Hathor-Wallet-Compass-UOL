const express = require('express')
const userController = require('./controllers/user-controller')
const app = express()

app.use(express.json())

app.post('/register', userController.registerUser)
app.post('/login', userController.loginUser)

module.exports = app
