const mongoose = require("mongoose");

const studentSchema = new mongoose.Schema(
    {
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
            required: true,
            unique: true
        },

        admissionNumber: {
            type: String,
            required: true,
            unique: true,
            trim: true
        },

        firstName: {
            type: String,
            required: true,
            trim: true
        },

        lastName: {
            type: String,
            trim: true,
            default: ""
        },

        dateOfBirth: {
            type: Date
        },

        gender: {
            type: String,
            enum: ["Male", "Female", "Other"]
        },

        phone: {
            type: String
        },

        address: {
            type: String
        },

        class: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Class"
        },

        section: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Section"
        },

        parent: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "Parent"
        },

        admissionDate: {
            type: Date,
            default: Date.now
        },

        status: {
            type: String,
            enum: ["Active", "Inactive"],
            default: "Active"
        }
    },
    {
        timestamps: true
    }
);

module.exports = mongoose.model("Student", studentSchema);