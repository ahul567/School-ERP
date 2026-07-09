const mongoose = require("mongoose");

const transportSchema = new mongoose.Schema(
  {
    routeName: {
      type: String,
      required: true,
      trim: true,
    },

    vehicleNumber: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    driverName: {
      type: String,
      required: true,
      trim: true,
    },

    driverPhone: {
      type: String,
      required: true,
      trim: true,
    },

    conductorName: {
      type: String,
      trim: true,
    },

    pickupPoint: {
      type: String,
      required: true,
      trim: true,
    },

    destination: {
      type: String,
      required: true,
      trim: true,
    },

    fare: {
      type: Number,
      required: true,
      min: 0,
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

module.exports = mongoose.model("Transport", transportSchema);