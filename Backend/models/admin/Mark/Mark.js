const mongoose = require("mongoose");

const markSchema = new mongoose.Schema(
{
    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },

    subjectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject",
        required:true
    },

    examId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Exam",
        required:true
    },

    marks:{
        type:Number,
        required:true
    },

    academicYear:{
        type:String
    },

    class:{
        type:String
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("Mark",markSchema);