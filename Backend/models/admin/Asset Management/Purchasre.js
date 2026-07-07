const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema(
  {
    asset: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Asset",
      required: true,
    },

    vendor: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Vendor",
      required: true,
    },

    quantity: {
      type: Number,
      required: true,
      min: 1,
    },

    unit: {
      type: String,
      default: "Piece",
    },

    purchasePrice: {
      type: Number,
      required: true,
    },

    purchaseDate: {
      type: Date,
      required: true,
    },

    serviceDate: Date,

    expireDate: Date,

    purchaseBy: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    invoiceNumber: String,

    paymentStatus: {
      type: String,
      enum: [
        "Pending",
        "Paid",
        "Cancelled",
      ],
      default: "Pending",
    },

    remarks: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Purchase", purchaseSchema);