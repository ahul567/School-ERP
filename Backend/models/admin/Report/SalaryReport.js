const mongoose = require("mongoose");

const salaryReportSchema = new mongoose.Schema(
{
    salaryFor: {
        type: String,
        enum: [
            "Teacher",
            "Employee",
            "Accountant",
            "Receptionist"
        ]
    },

    month: {
        type: Number,
        min: 1,
        max: 12
    },

    fromDate: Date,

    toDate: Date
},
{
    timestamps: true
});

module.exports = mongoose.model("SalaryReport", salaryReportSchema);