const express = require("express");
const  Blog = require("../schema/blog.schema");

const blogRoute = express.Router();

blogRoute.get("/", async (req, res)=>{
    let blogs = await Blog.find();
    res.send(blogs);
});

blogRoute.get("/:id", async (req, res)=>{
    let blog = await Blog.findById(req.params.id);
    res.send(blog);
});

blogRoute.post("/", async (req, res)=>{
    try{
        let blog = await Blog.create(req.body);
        res.send(blog);
    }catch(e){
        res.status(401).send(e.message);
    }
});

blogRoute.delete("/:id", async (req, res)=>{
    try{
        await Blog.findByIdAndDelete(req.params.id);
        res.send("Deleted Succesfully")
    }catch(e){
        res.status(401).send(e.message);
    }
});

module.exports = blogRoute;