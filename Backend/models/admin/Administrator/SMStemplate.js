const mongoose = require("mongoose");

const mailSmsTemplateSchema = new mongoose.Schema({

    name:{
        type:String,
        required:true
    },

    type:{
        type:String,
        enum:["Mail","SMS"],
        required:true
    },

    user:{
        type:String,
        required:true
    },

    template:{
        type:String,
        required:true
    }

},{
    timestamps:true
});

module.exports = mongoose.model("MailSmsTemplate", mailSmsTemplateSchema);