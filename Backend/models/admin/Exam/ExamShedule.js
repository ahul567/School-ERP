const mongoose = require("mongoose");

const examScheduleSchema = new mongoose.Schema(
{
    examId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Exam",
        required:true
    },

    subjectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject",
        required:true
    },

    examDate:{
        type:Date,
        required:true
    },

    startTime:String,

    endTime:String,

    roomNo:String
},
{
    timestamps:true
});

module.exports =
mongoose.model(
"ExamSchedule",
examScheduleSchema
);