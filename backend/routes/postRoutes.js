const express = require('express');
const {post}= require('../models/postModel');
const postRouter= express.Router();

postRouter.get("/",async(req,res)=>{
    try {
        const {userId}= req.body;
        const {device=["Laptop", "Tablet", "Mobile"]}= req.query;
        const Post = await post.find({$and:[{userId},{device:{$in:device}}]});
        res.json({Post, msg:"Your post"});    
    } 
    catch (error) {
        res.send(error.message);
    }
});

postRouter.get('/:id',async(req,res)=>{
    try {
        const id = req.params.id;
        const Post = await post.findById(id);
        res.send({Post})    
    } 
    catch (error) {
        res.send({msg:error.message})
    }
})

postRouter.post('/',async(req,res)=>{
    try {
        const data = req.body;
        const newPost =  new post (data);
        await newPost.save();
        res.send({msg:"Post created"})
    } 
    catch (error) {
        res.send(error.message)    
    }
});

postRouter.patch('/update/:id', async(req,res)=>{
    try {
        const data = req.body;
        const id = req.params.id;
        const update = await post.findByIdAndUpdate(id,data);
        res.send({msg:"Post Updated"})
    } 
    catch (error) {
        res.send({msg:error.message})
    }
})

postRouter.delete("/delete/:id", async(req,res)=>{
    try {
        const id = req.params.id;
        const deletePost = await post.findByIdAndDelete(id);
        if(deletePost){
            res.send({msg:"Post deleted"})
        }
        else{
            res.send({msg:"Not found Post"})
        }    
    } 
    catch (error) {
        res.send({msg:error.message})
    }
});

module.exports={postRouter};