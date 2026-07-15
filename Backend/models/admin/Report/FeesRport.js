const mongoose = require("mongoose");

const feesReportSchema = new mongoose.Schema(
{
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    },

    feeType: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "FeeType"
    },

    fromDate: Date,

    toDate: Date
},
{
    timestamps: true
});

module.exports = mongoose.model("FeesReport", feesReportSchema);