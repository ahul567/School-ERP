const mongoose = require("mongoose");

const onlineExamQuestionReportSchema = new mongoose.Schema(
{
    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OnlineExam",
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("OnlineExamQuestionReport", onlineExamQuestionReportSchema);