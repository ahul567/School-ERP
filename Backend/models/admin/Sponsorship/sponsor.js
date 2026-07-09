const mongoose = require("mongoose");

const sponsorSchema = new mongoose.Schema(
  {
    primaryName: {
      type: String,
      required: true,
      trim: true,
    },

    secondaryName: {
      type: String,
      trim: true,
      default: "",
    },

    country: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      lowercase: true,
      trim: true,
      default: "",
    },

    phone: {
      type: String,
      default: "",
    },

    address: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Active", "Inactive"],
      default: "Active",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Sponsor", sponsorSchema);