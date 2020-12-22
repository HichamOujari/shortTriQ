
const express = require("express");
const app = express({
    cors: {
      //origin: "https://myrandchat.herokuapp.com",
      origin: "http://localhost:3000",
      methods: ["GET", "POST"]
    }
  }) 


app.get("/",(req,res)=>{
    res.send("hello")
})

app.listen(4000,()=>{
    console.log("listenning in port : 4000")
})