const mongoose  =require('mongoose')
const jwt = require('jsonwebtoken')
const uniqueValidator = require('mongoose-unique-validator')
const bcrypt = require('bcrypt')

const CourseSchema  = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    password:{
        type:String,
        required:true
    },
    email:{
        type:String,
        unique:true,
        required:true
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }]
})

CourseSchema.methods.generateAuthToken = async function (){
    const course  = this

    const token =  jwt.sign({_id:course._id.toString()},'nodejspractice')
    // console.log("token")
    course.tokens = course.tokens.concat({token})
    await course.save()
    return token
}

CourseSchema.statics.findByCredentials =async function (email,password){

    const course = await Course.findOne({email})
    if(!course)  throw new Error('NO COURSE EXIST')

    const coursepassindb = course.password
    const isMatch = bcrypt.compare(coursepassindb,password)
    
    if(!isMatch)  return  new Error("UNABLE TO FIND THE USER <SORRY")

    return course


}

CourseSchema.pre('save',async function(next){
    const course = this
    const hashpass =await bcrypt.hash(course.password,8)
    course.password = hashpass

    next()

})

CourseSchema.plugin(uniqueValidator);

const Course = mongoose.model('Course',CourseSchema)
module.exports = Course