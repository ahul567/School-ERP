const mongoose = require("mongoose");

const progressCardReportSchema = new mongoose.Schema(
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

module.exports = mongoose.model("ProgressCardReport", progressCardReportSchema);