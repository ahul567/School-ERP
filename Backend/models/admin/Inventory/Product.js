const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
{
    productName: {
        type: String,
        required: true,
        trim: true
    },

    category: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
        required: true
    },

    buyingPrice: {
        type: Number,
        required: true,
        min: 0
    },

    sellingPrice: {
        type: Number,
        required: true,
        min: 0
    },

    description: {
        type: String,
        default: ""
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Product", productSchema);