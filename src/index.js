//import
const express = require("express");
const mongoose = require("mongoose");
const blogRoute = require("./route/blog.route");
const userRoute = require("./route/user.route");
const PORT = process.env.PORT || 8000;

//create
const app = express();
app.use(express.json());
app.use("/users", userRoute);
app.use("/blogs", blogRoute);

//start
app.listen(PORT, ()=>{
    mongoose.connect("mongodb://127.0.0.1:27017/nem-101");
    console.log("server started");
})