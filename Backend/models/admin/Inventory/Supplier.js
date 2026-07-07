const mongoose = require("mongoose");

const supplierSchema = new mongoose.Schema(
{
    companyName: {
        type: String,
        required: true,
        trim: true
    },

    supplierName: {
        type: String,
        required: true,
        trim: true
    },

    email: {
        type: String,
        lowercase: true,
        trim: true
    },

    phone: {
        type: String,
        trim: true
    },

    address: {
        type: String,
        trim: true
    }
},
{
    timestamps: true
});

module.exports = mongoose.model("Supplier", supplierSchema);