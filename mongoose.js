const mongoose = require('mongoose')

// mongoose.connect('mongodb://127.0.0.1:27017/Books',{useNewUrlParser:true})
mongoose.connect('mongodb://127.0.0.1:27017/Books',{
useNewUrlParser:true,
useCreateIndex: true, 
useUnifiedTopology: true 
})

// module.exports