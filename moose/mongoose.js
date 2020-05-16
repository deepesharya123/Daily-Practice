const mongoose = require('mongoose')

mongoose.connect("mongodb://127.0.0.1:27017/mongooooooo",(error,res)=> {
    if(error) return console.log("error is ",error)

    console.log("all is good")
})

const User  =  mongoose.model("Users",{
    name:{
        type:String,
        required:true,
    },
    age:{
        type:Number,
        required:true,
        min :1,
        max:100,
        default:1
    }
})

const me = new User({
    name:"DEPESASDF",
    age:123
})

me.save().then((res)=>{
    console.log(" SAVED SUCCESFULLY")
}).catch((e)=>{
console.log(e)
})
