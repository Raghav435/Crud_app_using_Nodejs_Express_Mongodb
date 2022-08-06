const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    name: {type: String , required : true},
    email: {type: String , required : true},
    gender: {
        type: String,
        required : true,
        enum : ["Male", "Female"],
    },
    age: { type: Number, min: 20, max: 100},
    blogs: [
        {
            type: mongoose.Schema.Types.ObjectId, 
            ref: "blog"
        },
    ],
},
    {
        versionKey: false,
    }
    );
const User = mongoose.model("users", userSchema);

module.exports = User;