const mongoose = require("mongoose");

const notificationRecipientSchema =
new mongoose.Schema({

    notificationId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Notification",
        required: true
    },

    recipientId: {
        type: mongoose.Schema.Types.ObjectId,
        required: true
    },

    recipientType: {
        type: String,
        enum: [
            "Student",
            "Parent",
            "Teacher",
            "User"
        ],
        required: true
    },

    email: String,

    phone: String,

    deliveryStatus: {
        type: String,
        enum: [
            "Pending",
            "Delivered",
            "Failed"
        ],
        default: "Pending"
    }

}, {
    timestamps: true
});

module.exports =
mongoose.model(
    "NotificationRecipient",
    notificationRecipientSchema
);