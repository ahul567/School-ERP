const mongoose = require("mongoose");

const leaveApplicationReportSchema = new mongoose.Schema(
{
    role: {
        type: String,
        enum: ["Admin", "Teacher", "Student", "Parent", "Accountant", "Librarian", "Receptionist", "Employee"],
        required: true
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "LeaveCategory",
        required: true
    },

    status: {
        type: String,
        enum: [
            "Pending",
            "Approved",
            "Rejected",
            "Cancelled"
        ],
        required: true
    },

    fromDate: {
        type: Date,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("LeaveApplicationReport", leaveApplicationReportSchema);