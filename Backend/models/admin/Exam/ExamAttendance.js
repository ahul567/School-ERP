const mongoose = require("mongoose");

const examAttendanceSchema =
new mongoose.Schema(
{
    examId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Exam"
    },

    studentId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student"
    },

    subjectId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Subject"
    },

    status:{
        type:String,
        enum:["Present","Absent"],
        default:"Present"
    }
},
{
    timestamps:true
});

module.exports =
mongoose.model(
"ExamAttendance",
examAttendanceSchema
);