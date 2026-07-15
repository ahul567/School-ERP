const mongoose = require("mongoose");

const onlineExamReportSchema = new mongoose.Schema(
{
    onlineExam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "OnlineExam",
        required: true
    },

    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true
    },

    status: {
        type: String,
        enum: [
            "Pending",
            "Completed",
            "Running",
            "Cancelled"
        ],
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("OnlineExamReport", onlineExamReportSchema);