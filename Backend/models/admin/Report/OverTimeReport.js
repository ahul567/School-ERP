const mongoose = require("mongoose");

const overtimeReportSchema = new mongoose.Schema(
{
    reportFor: {
        type: String,
        enum: [
            "Teacher",
            "Employee",
            "Accountant",
            "Receptionist"
        ]
    },

    fromDate: Date,

    toDate: Date
},
{
    timestamps: true
});

module.exports = mongoose.model("OvertimeReport", overtimeReportSchema);