const mongoose = require("mongoose");

const leaveApplySchema = new mongoose.Schema(
  {
    applicationTo: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LeaveCategory",
      required: true,
    },

    date: {
      type: Date,
      required: true,
    },

    schedule: {
      type: String,
      enum: ["Full Day", "First Half", "Second Half"],
      default: "Full Day",
    },

    days: {
      type: Number,
      required: true,
      min: 1,
    },

    attachment: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected"],
      default: "Pending",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("LeaveApply", leaveApplySchema);