const mongoose = require("mongoose");

const noticeSchema = new mongoose.Schema(
{
    title:{
        type:String,
        required:true,
        trim:true
    },

    notice:{
        type:String,
        required:true
    },

    publishDate:{
        type:Date,
        default:Date.now
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

module.exports = mongoose.model("Notice", noticeSchema);