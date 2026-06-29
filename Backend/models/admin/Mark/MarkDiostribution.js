const mongoose = require("mongoose");

const markDistributionSchema = new mongoose.Schema(
{
    distributionType:{
        type:String,
        enum:[
            "Exam",
            "Attendance",
            "Class Test",
            "Assignment",
            "Practical",
            "Quiz Test",
            "Lab Report"
        ]
    },

    markValue:{
        type:Number,
        required:true
    }
},
{
    timestamps:true
});

module.exports =
mongoose.model(
"MarkDistribution",
markDistributionSchema
);