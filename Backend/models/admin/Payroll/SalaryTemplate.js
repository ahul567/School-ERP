// models/SalaryTemplate.js

const mongoose = require("mongoose");

const salaryTemplateSchema = new mongoose.Schema(
  {
    salaryGrade: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    basicSalary: {
      type: Number,
      required: true,
      min: 0
    },

    overtimeRate: {
      type: Number,
      required: true,
      min: 0
    }
  },
  {
    timestamps: true
  }
);

module.exports = mongoose.model(
  "SalaryTemplate",
  salaryTemplateSchema
);