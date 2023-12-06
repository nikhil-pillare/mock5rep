const express= require("express");
const UserModel = require("../models/User.Model")
const userRouter= express.Router();

userRouter.get("/", async(req,res)=>{
    try {
        const users= await UserModel.find();
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error)
    }
})

userRouter.post("/", async(req,res)=>{
    try {
        const newUser= await UserModel(req.body);
        await newUser.save()
        res.status(200).json(users)
    } catch (error) {
        res.status(400).json(error)
    }
})

userRouter.patch("/:id", async(req, res)=>{
   const userId= req.params.id;
   const newUser= req.body;
    try {
       let updatedUser= await UserModel.findByIdAndUpdate(userId, newUser)
        res.status(200).json(updatedUser)
        if(!updatedUser){
            res.status(400).json({msg:"user not found"})
        }
    } catch (error) {
        res.status(400).json(error)
    }
})

userRouter.delete("/:id", async(req, res)=>{
    
    try {
        const userId= req.params.id;
        await UserModel.findByIdAndDelete(userId)
        res.status(200).json({msg:"user Deleted"})
    } catch (error) {
        res.status(400).json(error)
    }
})

module.exports = userRouter