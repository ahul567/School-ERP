const mongoose = require("mongoose");

const idCardReportSchema = new mongoose.Schema(
{
    idCard: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "IDCard",
        required: true
    },

    type: {
        type: String,
        required: true,
        enum: [
            "Student",
            "Teacher"
        ]
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
    "IDCardReport",
    idCardReportSchema
);