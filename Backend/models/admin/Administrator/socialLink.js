const mongoose = require("mongoose");

const socialLinkSchema = new mongoose.Schema({

    role:{
        type:String,
        required:true
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    photo:{
        type:String,
        default:""
    },

    facebook:{
        type:String,
        default:""
    },

    twitter:{
        type:String,
        default:""
    },

    linkedin:{
        type:String,
        default:""
    },

    googlePlus:{
        type:String,
        default:""
    }

},{
    timestamps:true
});

module.exports = mongoose.model("SocialLink", socialLinkSchema);