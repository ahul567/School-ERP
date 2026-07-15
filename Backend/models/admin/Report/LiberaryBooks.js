const mongoose = require("mongoose");

const libraryBooksReportSchema = new mongoose.Schema(
{
    bookName: {
        type: String
    },

    subjectCode: {
        type: String
    },

    rackNo: {
        type: String
    },

    status: {
        type: String,
        enum: [
            "Available",
            "Issued"
        ]
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(
    "LibraryBooksReport",
    libraryBooksReportSchema
);