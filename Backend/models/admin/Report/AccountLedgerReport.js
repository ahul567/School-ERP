const mongoose = require("mongoose");

const accountLedgerReportSchema = new mongoose.Schema(
{
    academicYear: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AcademicYear"
    },

    fromDate: Date,

    toDate: Date
},
{
    timestamps: true
});

module.exports = mongoose.model("AccountLedgerReport", accountLedgerReportSchema);