const mongoose = require("mongoose");

const attendanceOverviewReportSchema = new mongoose.Schema(
{
    reportFor: {
        type: String,
        required: true,
        enum: [
            "Student",
            "Teacher",
            "Staff"
        ]
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(
    "AttendanceOverviewReport",
    attendanceOverviewReportSchema
);