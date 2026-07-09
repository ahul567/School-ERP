const mongoose = require("mongoose");

const ebookSchema = new mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
    },

    author: {
      type: String,
      required: true,
      trim: true,
    },

    subjectCode: {
      type: String,
      trim: true,
    },

    description: {
      type: String,
      default: "",
    },

    file: {
      type: String,
      required: true,
    },

    coverImage: {
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

module.exports = mongoose.model("EBook", ebookSchema);