const mongoose = require("mongoose");

const locationSchema = new mongoose.Schema(
  {
    location: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    description: {
      type: String,
      trim: true,
    },

    status: {
      type: Boolean,
      default: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Location", locationSchema);