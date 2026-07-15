const mongoose = require("mongoose");

const libraryBookIssueReportSchema = new mongoose.Schema(
{
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class"
    },

    type: {
        type: String
    },

    libraryId: {
        type: String
    },

    fromDate: {
        type: Date
    },

    toDate: {
        type: Date
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(
    "LibraryBookIssueReport",
    libraryBookIssueReportSchema
);