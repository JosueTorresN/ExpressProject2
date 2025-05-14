const express = require("express")
const app = express()
const port = 3000
app.get("/",(req,res)=>{
    res.send("hellow world 33")
    })
app.listen(port,(error)=>{
    if(!error){
        console.log("Proyect is running")
    }
})
