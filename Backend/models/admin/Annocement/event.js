const mongoose = require("mongoose");

const eventSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
        trim:true
    },

    fromDate:{
        type:Date,
        required:true
    },

    toDate:{
        type:Date,
        required:true
    },

    details:{
        type:String,
        default:""
    },

    createdBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    isActive:{
        type:Boolean,
        default:true
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("Event", eventSchema);