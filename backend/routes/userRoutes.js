const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
require('dotenv').config();
const{user}= require('../models/userModel')
const express = require('express');
const userRouter = express.Router();

userRouter.post("/register", async(req,res)=>{
    try {
        const payload = req.body;
        const User = await user.findOne({email:payload.email});
        if(User){
            return res.send({msg:"User already exist, please login"});
        }
        else{
            const hashPass= await bcrypt.hashSync(payload.password,5);
            payload.password=hashPass;
            const newUser= new user(payload);
            await newUser.save();
            return res.json({msg:"User register", user:newUser});
        }
    } 
    catch (error) {
        res.send({msg:error.message});
    }
});

userRouter.post("/login", async(req,res)=>{
    try {
       const payload = req.body;
       const User =  await user.findOne({email:payload.email});
       if(!User){
        return res.send("Please signup")
       }
       const correctPass = await bcrypt.compareSync( payload.password,User.password);
       if(correctPass){
        const token = await jwt.sign({ email:User.email,userId:User._id}, process.env.secretKey, { expiresIn: '1h' });
        res.json({msg:"Login Sucessful",token})
       }
       else{
        res.send({msg:"Invalid credentials"})
       }
    } 
    catch (error) {
        console.log("Error at user route");
        res.send(error.message);
    }
})

module.exports={userRouter};