const mongoose = require("mongoose");

const studentGroupSchema = new mongoose.Schema({

    group:{
        type:String,
        required:true,
        unique:true,
        trim:true
    }

},{
    timestamps:true
});

module.exports = mongoose.model("StudentGroup", studentGroupSchema);