const mongoose = require("mongoose");

const mediaFileSchema = new mongoose.Schema({

    fileName:{
        type:String,
        required:true
    },

    originalName:{
        type:String,
        required:true
    },

    fileType:{
        type:String,
        enum:[
            "image",
            "pdf",
            "video",
            "audio",
            "document",
            "other"
        ],
        required:true
    },

    fileSize:{
        type:Number
    },

    filePath:{
        type:String,
        required:true
    },

    folderId:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Folder",
        default:null
    },

    uploadedBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    }

},{
    timestamps:true
});

module.exports =
mongoose.model("MediaFile", mediaFileSchema);