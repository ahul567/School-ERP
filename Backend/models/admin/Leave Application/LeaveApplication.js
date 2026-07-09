const mongoose = require("mongoose");

const leaveApplicationSchema = new mongoose.Schema(
  {
    applicant: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    role: {
      type: String,
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
    },

    attachment: {
      type: String,
      default: "",
    },

    status: {
      type: String,
      enum: ["Pending", "Approved", "Rejected", "Cancelled"],
      default: "Pending",
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("LeaveApplication", leaveApplicationSchema);