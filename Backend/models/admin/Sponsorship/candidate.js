const mongoose = require("mongoose");

const candidateSchema = new mongoose.Schema(
  {
    photo: {
      type: String,
      default: "",
    },

    name: {
      type: String,
      required: true,
      trim: true,
    },

    registerNo: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },

    sponsor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Sponsor",
      default: null,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Candidate", candidateSchema);