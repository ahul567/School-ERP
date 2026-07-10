const mongoose = require("mongoose");

const academicYearSchema = new mongoose.Schema({
    year:{
        type:String,
        required:true,
        unique:true
    },

    yearTitle:{
        type:String,
        required:true
    },

    startDate:{
        type:Date,
        required:true
    },

    endDate:{
        type:Date,
        required:true
    },

    isCurrent:{
        type:Boolean,
        default:false
    }

},{
    timestamps:true
});

module.exports = mongoose.model("AcademicYear", academicYearSchema);