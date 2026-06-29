const teacherAttendanceSchema =
new mongoose.Schema({

    teacherId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher",
        required:true
    },

    attendanceDate:{
        type:Date,
        required:true
    },

    checkIn:{
        type:Date
    },

    checkOut:{
        type:Date
    },

    status:{
        type:String,
        enum:[
            "Present",
            "Absent",
            "Leave"
        ],
        default:"Present"
    },

    markedBy:{
        type:String,
        enum:[
            "Manual",
            "Fingerprint"
        ],
        default:"Manual"
    }

},{
    timestamps:true
});