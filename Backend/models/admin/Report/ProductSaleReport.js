const mongoose = require("mongoose");

const productSaleReportSchema = new mongoose.Schema(
{
    role: {
        type: String,
        enum: [
            "Admin",
            "Accountant",
            "Cashier",
            "Employee"
        ]
    },

    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
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

module.exports = mongoose.model("ProductSaleReport", productSaleReportSchema);