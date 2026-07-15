const mongoose = require("mongoose");

const libraryCardReportSchema = new mongoose.Schema(
{
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
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
    "LibraryCardReport",
    libraryCardReportSchema
);