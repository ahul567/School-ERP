const mongoose = require("mongoose");

const activitiesSchema = new mongoose.Schema(
  {
    activityName: {
      type: String,
      required: true,
      trim: true,
    },

    category: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "ActivitiesCategory",
    },

    icon: {
      type: String,
      default: "",
    },

    color: {
      type: String,
      default: "",
    },

    description: {
      type: String,
      default: "",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Activities", activitiesSchema);