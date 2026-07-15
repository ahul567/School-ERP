const mongoose = require("mongoose");

const onlineExamQuestionAnswerReportSchema = new mongoose.Schema(
{
    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OnlineExam",
        required: true
    },

    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    },

    attempt: {
        type: Number,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("OnlineExamQuestionAnswerReport", onlineExamQuestionAnswerReportSchema);