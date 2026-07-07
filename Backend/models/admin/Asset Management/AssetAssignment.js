const mongoose = require("mongoose");

const assetAssignmentSchema = new mongoose.Schema(
  {
    asset: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
      required: true,
    },

    assignQuantity: {
      type: Number,
      default: 1,
      min: 1,
    },

    role: {
      type: String,
      enum: [
        "Admin",
        "Teacher",
        "Student",
        "Parent",
        "Accountant",
        "Librarian",
      ],
      required: true,
    },

    assignedTo: {
      type: mongoose.Schema.Types.ObjectId,
      refPath: "roleModel",
      required: true,
    },

    roleModel: {
      type: String,
      required: true,
      enum: [
        "User",
        "Teacher",
        "Student",
        "Parent",
      ],
    },

    dueDate: Date,

    checkOutDate: {
      type: Date,
      default: Date.now,
    },

    checkInDate: Date,

    status: {
      type: String,
      enum: [
        "Assigned",
        "Returned",
        "Late",
        "Lost",
      ],
      default: "Assigned",
    },

    remarks: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("AssetAssignment", assetAssignmentSchema);