// models/admin/Payroll/ManageSalary.js

const mongoose = require("mongoose");

const manageSalarySchema = new mongoose.Schema(
  {
    employee: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true
    },

    role: {
      type: String,
      enum: [
        "Admin",
        "Teacher",
        "Accountant",
        "Librarian",
        "Receptionist",
        "Parent",
        "Student"
      ],
      required: true
    },

    salaryType: {
      type: String,
      enum: ["Monthly", "Hourly"],
      required: true
    },

    salaryTemplate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "SalaryTemplate",
      default: null
    },

    hourlyTemplate: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "HourlyTemplate",
      default: null
    },

    basicSalary: {
      type: Number,
      default: 0
    },

    hourlyRate: {
      type: Number,
      default: 0
    },

    overtimeRate: {
      type: Number,
      default: 0
    },

    joiningDate: {
      type: Date
    },

    status: {
      type: Boolean,
      default: true
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "ManageSalary",
  manageSalarySchema
);