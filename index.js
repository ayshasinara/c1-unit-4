const express=require("express");
const req = require("express/lib/request");
const res = require("express/lib/response");
const app=express()
app.use(logger)

app.get("/books",(req, res)=>{
 res.send({ route: "/books"})
})

app.get("/libraries",checkPermission,(req, res)=>{
    res.send( { route: "/libraries", permission: true})
   })
   app.get("/authors",checkPermission,(req, res)=>{
    res.send( { route: "/authors", permission: true})
   })
   function logger(req, res, next){
       console.log("req path",req.path)
       next()
   }
 

function checkPermission(req, res, next){
    if(req.path=="/libraries"||req.path=="/authors"){
    
    }
    
    next()
 
   }

app.listen(5000,()=>{
    console.log("listening to port 5000")
})