const mongoose = require("mongoose");

const onlineAdmissionSchema = new mongoose.Schema(
{
    firstName:{
        type:String,
        required:true,
        trim:true
    },

    lastName:{
        type:String,
        default:""
    },

    gender:{
        type:String,
        enum:["Male","Female","Other"],
        required:true
    },

    phone:{
        type:String,
        required:true
    },

    email:{
        type:String,
        trim:true,
        lowercase:true
    },

    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },

    photo:{
        type:String,
        default:""
    },

    document:{
        type:String,
        default:""
    },

    address:{
        type:String,
        default:""
    },

    dob:{
        type:Date
    },

    fatherName:{
        type:String,
        default:""
    },

    motherName:{
        type:String,
        default:""
    },

    status:{
        type:String,
        enum:["Pending","Approved","Rejected"],
        default:"Pending"
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("OnlineAdmission", onlineAdmissionSchema);