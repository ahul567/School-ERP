const mongoose = require("mongoose");

const routineReportSchema = new mongoose.Schema(
{
    routineFor: {
        type: String,
        required: true,
        enum: [
            "Student",
            "Teacher",
            "Class"
        ]
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(
    "RoutineReport",
    routineReportSchema
);