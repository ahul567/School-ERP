const mongoose = require("mongoose");

const childCareSchema = new mongoose.Schema(
  {
    class: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Class",
      required: true,
    },

    student: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Student",
      required: true,
    },

    phone: {
      type: String,
      required: true,
      trim: true,
    },

    dropDate: {
      type: Date,
      required: true,
    },

    receiveDate: {
      type: Date,
    },

    receiverName: {
      type: String,
      trim: true,
      required: true,
    },

    comment: {
      type: String,
      trim: true,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("ChildCare", childCareSchema);