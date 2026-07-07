const mongoose = require("mongoose");

const saleSchema = new mongoose.Schema(
{
    referenceNo: {
        type: String,
        required: true,
        unique: true
    },

    role: {
        type: String,
        required: true
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User",
        required: true
    },

    date: {
        type: Date,
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

module.exports = mongoose.model("Sale", saleSchema);