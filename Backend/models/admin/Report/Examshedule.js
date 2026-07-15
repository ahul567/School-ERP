const mongoose = require("mongoose");

const examScheduleReportSchema = new mongoose.Schema(
{
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true
    },

    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam",
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(
    "ExamScheduleReport",
    examScheduleReportSchema
);