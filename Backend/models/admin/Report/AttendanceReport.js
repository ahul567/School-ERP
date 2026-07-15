const mongoose = require("mongoose");

const attendanceReportSchema = new mongoose.Schema(
{
    attendanceType: {
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
    "AttendanceReport",
    attendanceReportSchema
);