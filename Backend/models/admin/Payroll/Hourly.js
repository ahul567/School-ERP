// models/admin/Payroll/HourlyTemplate.js

const mongoose = require("mongoose");

const hourlyTemplateSchema = new mongoose.Schema(
  {
    hourlyGrade: {
      type: String,
      required: true,
      unique: true,
      trim: true
    },

    hourlyRate: {
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
  "HourlyTemplate",
  hourlyTemplateSchema
);