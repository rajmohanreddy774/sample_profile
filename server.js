const express = require('express')

const app=express()
const path=require("path")
const mongoClient=require("mongodb").MongoClient

const mongoUrl="mongodb://localhost:27017/"
 global.db=""
mongoClient.connect(mongoUrl,{useUnifiedTopology:true},(error, res)=>{
    if(error)
    {
        console.log("error");
        return
    }
    db =res.db("userdatabase")
    console.log("database Listening")
})

const createUsers =require(path.join(__dirname,"Routes","users","Create_user.js"))
app.post('/users', createUsers
)
app.listen(8080, error=>{
    if(error)
    {
        console.log("error");
        return
    }
    console.log("server running on port 8080")
})