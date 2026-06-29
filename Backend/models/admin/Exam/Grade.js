const mongoose = require("mongoose");

const gradeSchema = new mongoose.Schema(
{
    gradeName:{
        type:String,
        required:true,
        unique:true
    },

    gradePoint:{
        type:Number,
        required:true
    },

    markFrom:{
        type:Number,
        required:true
    },

    markUpto:{
        type:Number,
        required:true
    },

    note:String
},
{
    timestamps:true
});

module.exports =
mongoose.model(
"Grade",
gradeSchema
);