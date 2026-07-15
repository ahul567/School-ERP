const mongoose = require("mongoose");

const tabulationSheetReportSchema = new mongoose.Schema(
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

module.exports = mongoose.model("TabulationSheetReport", tabulationSheetReportSchema);