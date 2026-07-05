// models/admin/Payroll/MakePayment.js

const mongoose = require("mongoose");

const makePaymentSchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },

    role: {
      type: String,
      required: true,
      enum: [
        "Admin",
        "Teacher",
        "Accountant",
        "Librarian",
        "Receptionist",
        "Moderator",
        "Parent",
        "Student"
      ]
    },

    manageSalary: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ManageSalary",
      required: true,
    },

    salaryType: {
      type: String,
      enum: ["Monthly", "Hourly"],
      required: true,
    },

    basicSalary: {
      type: Number,
      default: 0,
    },

    hourlyRate: {
      type: Number,
      default: 0,
    },

    overtimeHours: {
      type: Number,
      default: 0,
    },

    overtimeAmount: {
      type: Number,
      default: 0,
    },

    bonus: {
      type: Number,
      default: 0,
    },

    deduction: {
      type: Number,
      default: 0,
    },

    totalAmount: {
      type: Number,
      required: true,
    },

    paymentMethod: {
      type: String,
      enum: [
        "Cash",
        "Bank Transfer",
        "Cheque",
        "UPI"
      ],
      default: "Bank Transfer",
    },

    paymentStatus: {
      type: String,
      enum: [
        "Pending",
        "Paid",
        "Failed"
      ],
      default: "Pending",
    },

    salaryMonth: {
      type: Number,
      min: 1,
      max: 12,
    },

    salaryYear: {
      type: Number,
    },

    paymentDate: {
      type: Date,
      default: Date.now,
    },

    remarks: {
      type: String,
      trim: true,
    }
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model(
  "MakePayment",
  makePaymentSchema
);