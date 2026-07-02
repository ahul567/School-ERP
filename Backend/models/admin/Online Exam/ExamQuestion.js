const mongoose = require("mongoose");

const examQuestionSchema =
new mongoose.Schema({

  examId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "OnlineExam",
    required: true
  },

  questionId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "QuestionBank",
    required: true
  },

  order: Number

});

module.exports =
mongoose.model(
  "ExamQuestion",
  examQuestionSchema
);