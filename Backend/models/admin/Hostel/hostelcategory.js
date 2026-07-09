const mongoose = require("mongoose");

const hostelCategorySchema = new mongoose.Schema(
  {
    hostel: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Hostel",
      required: true,
    },

    classType: {
      type: String,
      required: true,
      trim: true,
    },

    hostelFee: {
      type: Number,
      required: true,
      min: 0,
    },

    note: {
      type: String,
      default: "",
      trim: true,
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

module.exports = mongoose.model("HostelCategory", hostelCategorySchema);