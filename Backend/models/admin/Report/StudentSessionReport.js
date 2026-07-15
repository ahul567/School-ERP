const mongoose = require("mongoose");

const studentSessionReportSchema = new mongoose.Schema(
{
    student: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Student",
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("StudentSessionReport", studentSessionReportSchema);