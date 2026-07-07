const mongoose = require("mongoose");

const warehouseSchema = new mongoose.Schema(
{
    name: {
        type: String,
        required: true,
        trim: true
    },

    code: {
        type: String,
        required: true,
        unique: true,
        uppercase: true,
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

module.exports = mongoose.model("Warehouse", warehouseSchema);