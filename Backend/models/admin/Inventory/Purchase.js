const mongoose = require("mongoose");

const purchaseSchema = new mongoose.Schema(
{
    referenceNo: {
        type: String,
        required: true,
        unique: true
    },

    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier",
        required: true
    },

    date: {
        type: Date,
        required: true,
        default: Date.now
    },

    file: {
        type: String,
        default: ""
    },

    grandTotal: {
        type: Number,
        required: true
    },

    paid: {
        type: Number,
        default: 0
    },

    balance: {
        type: Number,
        default: 0
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Purchase", purchaseSchema);