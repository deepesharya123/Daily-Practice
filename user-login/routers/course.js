const express = require('express')
const Course = require('../models/course') 
const router = new express.Router()

// router.get('/course',(req,res)=>{
//     res.send("HELLO THERE")
// })

router.post('/course',async (req,res)=>{
    
    const course =new  Course(req.body)
    try{
        await course.save()
        const token = await course.generateAuthToken()
        res.send({course,token})
    }
    catch(e){
        res.status(400).send(e)
        // res.send(e)
    }
})

router.post('/course/login',async(req,res)=>{
    try{
        const course  = await Course.findByCredentials(req.body.email,req.body.password)
        const token = await course.generateAuthToken()
        res.send({course,token})
    }
    catch(e){
        res.status(400).send(e)
    }
})

router.get('/course',async(req,res)=>{
    try{
        const course = await Course.find({})
        res.send({course})
    }
    catch(e){
        req.send("NO COURSE EXIST")
    }
})

router.get('/course/:id',async(req,res)=>{
    try{
        const _id = req.params.id
        const course = await Course.findById(_id)

        if(!course) return res.status(400).send("COURSE JNOT FOUND")

        res.send(course)
    }catch(e){
        res.send("UNABLE TO GET COURSE OF GET COURSE?ID",e)
    }

})

router.patch('/course/:id',async(req,res)=>{

    const course = await Course.findById(req.params.id)
    const tobeupdated = Object.keys(req.body)
    const canUpdate = ['name','enail','password']
    const isPossible = tobeupdated.every((update)=> {
        canUpdate.includes(update)
    })

    if(!isPossible) return res.send("CANNOT UPDATE")
    
    try{
        const course = await Course.findById(req.params.id)

        tobeupdated.forEach((update)=>{
            course[update] = req.body[update]
        })

        await course.save()
        
        if(!course) return res.send("NO USE EXIST")

        res.send(course)


    }catch(e){
            res.send(e)
    }
})

router.delete('/course/:id',async(req,res)=>{
    const _id = req.params.id
    
    try{
        const course = await Course.findByIdAndDelete(_id)
        if(!course) return res.status(400).send("Invalid id i.e the data witht the given id is not present")
            
        res.status(200).send(user)
            
    }
    catch(e)
    {
        res.status(400).send(e)
    }
    
    
    })
    

module.exports = router



// {
// 	"password":"Myapass1",
// 	"email":"mon2@gmail.com"
// }


// {
// 	"name":"shiv",
// 	"email":"shiv@gmial.com",
// 	"password":"shivpass"
// }