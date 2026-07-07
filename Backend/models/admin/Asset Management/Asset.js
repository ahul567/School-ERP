const mongoose = require("mongoose");

const assetSchema = new mongoose.Schema(
  {
    serial: {
      type: String,
      required: true,
      unique: true,
      trim: true,
    },

    title: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AssetCategory",
      required: true,
    },

    location: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Location",
      required: true,
    },

    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
    },

    purchasePrice: Number,

    purchaseDate: Date,

    warrantyExpiry: Date,

    description: String,

    image: String,

    status: {
      type: String,
      enum: [
        "Available",
        "Assigned",
        "Maintenance",
        "Damaged",
        "Lost",
        "Disposed",
      ],
      default: "Available",
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Asset", assetSchema);