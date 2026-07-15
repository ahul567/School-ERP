const mongoose = require("mongoose");

const certificateReportSchema = new mongoose.Schema(
{
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("CertificateReport", certificateReportSchema);