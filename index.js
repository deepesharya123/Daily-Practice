const mongoose = require('mongoose')
const express = require('express')
const app = express()
require('./db/mongoose')
const Book = require('./models/book') 
const BookRoute = require('./router/book')
const port = process.env.PORT ||3000
app.use(express.json())

app.use(BookRoute)

app.listen(port,()=> console.log("SERVER IS WORKING ON PORT "+port) )
