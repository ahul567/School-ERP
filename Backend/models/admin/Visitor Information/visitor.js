const mongoose = require("mongoose");

const visitorSchema = new mongoose.Schema(
{
    visitorId:{
        type:String,
        unique:true,
        required:true
    },

    name:{
        type:String,
        required:true,
        trim:true
    },

    phone:{
        type:String,
        required:true
    },

    email:{
        type:String,
        default:""
    },

    address:{
        type:String,
        default:""
    },

    purpose:{
        type:String,
        default:""
    },

    toMeet:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Teacher"
    },

    checkIn:{
        type:Date,
        default:Date.now
    },

    checkOut:{
        type:Date
    },

    idProof:{
        type:String,
        default:""
    },

    note:{
        type:String,
        default:""
    },

    status:{
        type:String,
        enum:["Checked In","Checked Out"],
        default:"Checked In"
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("Visitor", visitorSchema);