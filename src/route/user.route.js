const express = require("express");
const  User = require("../schema/user.schema");

const userRoute = express.Router();

userRoute.get("/", async (req, res)=>{
    let users = await User.find();
    res.send(users);
});

userRoute.get("/:id", async (req, res)=>{
    let user = await User.findById(req.params.id);
    res.send(user);
});

userRoute.post("/", async (req, res)=>{
    try{
        let user = await User.create(req.body);
        res.send(user);
    }catch(e){
        res.status(401).send(e.message);
    }
});

userRoute.delete("/:id", async (req, res)=>{
    try{
        await User.findByIdAndDelete(req.params.id);
        res.send("Deleted Succesfully")
    }catch(e){
        res.status(401).send(e.message);
    }
});

module.exports = userRoute;