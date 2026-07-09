const mongoose = require("mongoose");

const transportMemberSchema = new mongoose.Schema(
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

    transport: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Transport",
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("TransportMember", transportMemberSchema);