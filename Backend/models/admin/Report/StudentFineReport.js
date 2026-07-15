const mongoose = require("mongoose");

const studentFineReportSchema = new mongoose.Schema(
{
    fromDate: {
        type: Date,
        required: true
    },

    toDate: {
        type: Date,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("StudentFineReport", studentFineReportSchema);