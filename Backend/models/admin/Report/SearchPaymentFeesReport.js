const mongoose = require("mongoose");

const searchPaymentFeesReportSchema = new mongoose.Schema(
{
    invoiceNumber: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("SearchPaymentFeesReport", searchPaymentFeesReportSchema);