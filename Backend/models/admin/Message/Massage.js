const mongoose = require("mongoose");

const messageSchema = new mongoose.Schema(
{
    sender:{
        type:mongoose.Schema.Types.ObjectId,
        refPath:"senderType",
        required:true
    },

    senderType:{
        type:String,
        enum:[
            "User",
            "Teacher",
            "Student",
            "Parent"
        ],
        required:true
    },

    receiver:{
        type:mongoose.Schema.Types.ObjectId,
        refPath:"receiverType",
        required:true
    },

    receiverType:{
        type:String,
        enum:[
            "User",
            "Teacher",
            "Student",
            "Parent"
        ],
        required:true
    },

    subject:{
        type:String,
        required:true
    },

    body:{
        type:String,
        required:true
    },

    attachment:{
        type:String
    },

    status:{
        type:String,
        enum:[
            "Unread",
            "Read"
        ],
        default:"Unread"
    },

    folder:{
        type:String,
        enum:[
            "Draft",
            "Sent",
            "Inbox",
            "Trash"
        ],
        default:"Sent"
    },

    isReply:{
        type:Boolean,
        default:false
    },

    parentMessage:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Message"
    },

    deletedBySender:{
        type:Boolean,
        default:false
    },

    deletedByReceiver:{
        type:Boolean,
        default:false
    }
},
{
    timestamps:true
});

module.exports =
mongoose.model(
"Message",
messageSchema
);