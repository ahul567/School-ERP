const mongoose = require("mongoose");

const productPurchaseReportSchema = new mongoose.Schema(
{
    supplier: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Supplier"
    },

    warehouse: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Warehouse"
    },

    referenceNo: String,

    status: {
        type: String,
        enum: [
            "Pending",
            "Completed",
            "Cancelled"
        ]
    },

    fromDate: Date,

    toDate: Date
},
{
    timestamps: true
});

module.exports = mongoose.model("ProductPurchaseReport", productPurchaseReportSchema);