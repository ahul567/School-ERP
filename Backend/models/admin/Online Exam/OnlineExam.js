const mongoose = require("mongoose");

const onlineExamSchema =
new mongoose.Schema({

  title: {
    type: String,
    required: true
  },

  description: String,

  classId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Class"
  },

  subjectId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Subject"
  },

  examDate: {
    type: Date,
    required: true
  },

  duration: {
    type: Number,
    required: true
  },

  totalMarks: Number,

  passingMarks: Number,

  status: {
    type: String,
    enum: [
      "Upcoming",
      "Running",
      "Completed"
    ],
    default: "Upcoming"
  },

  published: {
    type: Boolean,
    default: false
  }

}, { timestamps: true });

module.exports =
mongoose.model(
  "OnlineExam",
  onlineExamSchema
);