const mongoose = require("mongoose");

const classReportSchema = new mongoose.Schema(
{
    class: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Class",
        required: true
    },

    section: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Section",
        required: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("ClassReport", classReportSchema);