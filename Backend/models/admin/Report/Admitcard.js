const mongoose = require("mongoose");

const admitCardReportSchema = new mongoose.Schema(
{
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true
    },

    exam: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Exam",
        required: true
    },

    type: {
        type: String,
        required: true
    },

    background: {
        type: String,
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(
    "AdmitCardReport",
    admitCardReportSchema
);