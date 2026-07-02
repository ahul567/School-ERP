const mongoose = require("mongoose");

const examAttemptSchema =
new mongoose.Schema({

  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OnlineExam"
  },

  studentId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Student"
  },

  startedAt: Date,

  submittedAt: Date,

  score: {
    type: Number,
    default: 0
  },

  status: {
    type: String,
    enum: [
      "Started",
      "Submitted",
      "Evaluated"
    ],
    default: "Started"
  }

}, { timestamps: true });

module.exports =
mongoose.model(
  "ExamAttempt",
  examAttemptSchema
);