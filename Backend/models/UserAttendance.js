const mongoose = require("mongoose");

const userAttendanceSchema = new mongoose.Schema({
    userId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    date:{
        type:Date,
        required:true
    },

    checkIn:Date,

    checkOut:Date,

    status:{
        type:String,
        enum:["Present","Absent","Leave"],
        default:"Present"
    }
},{
    timestamps:true
});

module.exports = mongoose.model(
"UserAttendance",
userAttendanceSchema
);