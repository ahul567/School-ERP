const mongoose = require("mongoose");

const examSchema = new mongoose.Schema(
{
    examName:{
        type:String,
        required:true,
        unique:true
    },

    academicYear:{
        type:String,
        required:true
    },

    class:{
        type:String,
        required:true
    },

    description:String
},
{
    timestamps:true
});

module.exports = mongoose.model("Exam",examSchema);