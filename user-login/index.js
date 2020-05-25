const express = require('express')
const courseRouter = require('./routers/course')
const app = express()
const port = process.env.PORT ||3000

require('./db/mongoose')

app.use(express.json())
app.use(courseRouter)



app.listen(port,()=> console.log("Server is on port "+ port))