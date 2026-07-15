const mongoose = require("mongoose");

const onlineAdmissionReportSchema = new mongoose.Schema(
{
    academicYear: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "AcademicYear",
        required: true
    },

    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    },

    status: {
        type: String,
        enum: [
            "Pending",
            "Approved",
            "Rejected"
        ]
    },

    phone: {
        type: String
    },

    admissionId: {
        type: String
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("OnlineAdmissionReport", onlineAdmissionReportSchema);