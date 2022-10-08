const mongoose = require('mongoose')
const express  = require('express')
const Book = require('../models/book')
const router = express()


router.post('/books',async (req,res)=>{
    const book = new Book(req.body)
        
    try{
        console.log(book)
        await book.save()
        res.send(book)
    }
    catch(e){
        res.send(e)
    }

})

router.get('/books',async (req,res)=>{
    try{
            const book = await Book.find({})

            if(!book) return res.send("There are no books stored in the db")

            res.send(book)
    }catch(e){
            res.status(500).send(e)
    }
})

router.get('/books/:id',async (req,res)=>{
    try{
        // const _id = req.params.id
        const _id = req.params.id
    
        const book = await Book.findById(_id)
        
        if(!book) return  res.status(400).send("There is no book with the given id")

        res.send(book)
    }catch(e){
        res.status(400).send(e)
    }
})

router.patch('/books/:id',async (req,res)=>{
    const updates  = Object.keys(req.body)
        const canupdate = ['name','id','price','password']
        const isValidOperation = updates.every((update)=> canupdate.includes(update))
        if(!isValidOperation) return res.status(400).send("Cannot update ")

    try{
    const book = await Book.findById(req.params.id)
    updates.forEach((update) => book[update] =req.body[update]);

    await book.save()
    if(!book) return res.status(400).send("CANNOT UPDATE")  
    res.send(book)      
    }catch(e){
        res.status(400).send(e)
    }
})

router.post('/books/login',async (req,res)=>{

    try{
        const book = await Book.findByCredentials(req.body.id,req.body.password)
        // if(!book) return res.status(400).send("NO BOOK FOUND")

        res.send(book)


    }catch(e){
        res.status(400).send(e)
    }
})

module.exports  =router


