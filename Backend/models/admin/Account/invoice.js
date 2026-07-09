const mongoose = require("mongoose");

const invoiceSchema = new mongoose.Schema(
{
    student:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Student",
        required:true
    },

    class:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Class",
        required:true
    },

    feeType:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"FeeType",
        required:true
    },

    total:{
        type:Number,
        required:true
    },

    discount:{
        type:Number,
        default:0
    },

    paid:{
        type:Number,
        default:0
    },

    waiver:{
        type:Number,
        default:0
    },

    balance:{
        type:Number,
        default:0
    },

    status:{
        type:String,
        enum:["Not Paid","Partially Paid","Fully Paid"],
        default:"Not Paid"
    },

    date:{
        type:Date,
        default:Date.now
    }
},
{
    timestamps:true
});

module.exports=mongoose.model("Invoice",invoiceSchema);