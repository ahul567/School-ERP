const mongoose = require("mongoose");

const leaveAssignSchema = new mongoose.Schema(
  {
    role: {
      type: String,
      required: true,
      enum: [
        "Admin",
        "Teacher",
        "Student",
        "Parent",
        "Accountant",
        "Librarian",
      ],
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "LeaveCategory",
      required: true,
    },

    numberOfDays: {
      type: Number,
      required: true,
      min: 1,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("LeaveAssign", leaveAssignSchema);