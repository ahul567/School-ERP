const mongoose = require("mongoose");

const studentAnswerSchema =
new mongoose.Schema({

  attemptId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "ExamAttempt"
  },

  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuestionBank"
  },

  selectedAnswer: String,

  isCorrect: Boolean,

  marksObtained: Number

}, { timestamps: true });

module.exports =
mongoose.model(
  "StudentAnswer",
  studentAnswerSchema
);

