const express = require("express");
const mongoose = require("mongoose");


const app = express();
app.use(express.json());
 
const port = 5656;

mongoose.connect("mongodb+srv://vegesnasriramya:vegesnasriramya@cluster0.2dqkk4t.mongodb.net/practice2?retryWrites=true&w=majority")
.then(()=>console.log("db connected..."))
.catch((err)=>console.log(err.message))


app.listen(port,()=>{
    console.log(`server running at ${port}`)
})