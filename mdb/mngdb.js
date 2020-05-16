const mongodb = require('mongodb')

const MongoClient  =mongodb.MongoClient

const connection  = 'mongodb://127.0.0.1:27017'
const dbname = 'cmongodb'

mongodb.connect(connection,(error,client)=>{
    if(error) return console.log("this is the error",error)

    // console.log("GOOD GOING")

    const db = client.db(dbname)

    // db.collection("db1").insertOne({
    //     name:"HELLO THERE",
    //     reciepent:"COLONEIL",
    //     post:"NAWABGANJ"
    // },(error,res)=>{
    //     if(error) return console.log(error)

    //     console.log(res.ops)
    // })

    
    // db.collection("db1").insertMany([{
    //     name:"HELLO THERE",
    //     reciepent:"COLONEIL",
    //     post:"NAWABGANJ"
    // },{
    //     name:"asdf",
    //     post:"ASDQWER",
    //     place:"ASDQWEZXCV"
    // }],(error,res)=>{
    //     if(error) return console.log(error)

    //     console.log(res.ops)
    // })  


    // db.collection("db1").find({name:"HELLO THERE"}).toArray((error,res)=>{
    //     if(error) return console.log("ERRor",error)

    //     console.log(res)
    // })

    // db.collection("db1").updateMany({name:"HELLO THERE"},{
    //     $set:{
    //         name:"CHNAGED NAME"
    //     }
    // }).then((res)=>{
    //     console.log("CHANGED",res)
    // }).catch(()=>{
    //     console.log(error)
    // // })   

    // db.collection("db1").deleteMany({name:"CHNAGED NAME"})
    // .then(()=>{console.log("DELETEd")})
    // .catch(()=>
    // {
    //     console.log("SOMETHING WRONG WITH DELETION")
    // })

})