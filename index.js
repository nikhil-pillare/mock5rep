const express= require("express");
const app= express();

const mongoose= require("mongoose");

const cors= require("cors");
app.use(cors());
app.use(express.json());
const userRouter = require("./routes/User.Route")

const connection = require("./config/db")
require("dotenv").config();



app.use("/", (req,res)=>{
  res.send("Welcome to Homepage")
})
app.use("contact",userRouter)



app.listen(process.env.PORT, async()=>{
    try {
      await connection
        console.log("connected")
    } catch (error) {
      console.log("error in db")
    }
    
})