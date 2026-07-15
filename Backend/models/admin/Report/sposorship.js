const mongoose = require("mongoose");

const sponsorshipReportSchema = new mongoose.Schema(
{
    type: {
        type: String,
        required: true,
        enum: [
            "Candidate",
            "Sponsor",
            "Sponsorship"
        ]
    }
},
{
    timestamps: true
});

module.exports = mongoose.model(
    "SponsorshipReport",
    sponsorshipReportSchema
);