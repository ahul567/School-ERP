const mongoose = require("mongoose");

const hostelMemberSchema = new mongoose.Schema(
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

    roll: {
      type: String,
      required: true,
      trim: true,
    },

    email: {
      type: String,
      required: true,
      lowercase: true,
      trim: true,
    },

    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },

    hostel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hostel",
      required: true,
    },

    hostelCategory: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HostelCategory",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("HostelMember", hostelMemberSchema);