const mongoose = require("mongoose");

const questionBankSchema =
new mongoose.Schema({

  question: {
    type: String,
    required: true
  },

  questionGroup: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuestionGroup",
    required: true
  },

  difficultyLevel: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuestionLevel",
    required: true
  },

  questionType: {
    type: String,
    enum: [
      "MCQ",
      "TrueFalse",
      "ShortAnswer"
    ],
    required: true
  },

  options: [
    {
      optionText: String,
      isCorrect: Boolean
    }
  ],

  marks: {
    type: Number,
    default: 1
  },

  negativeMarks: {
    type: Number,
    default: 0
  }

}, { timestamps: true });

module.exports = mongoose.model(
  "QuestionBank",
  questionBankSchema
);