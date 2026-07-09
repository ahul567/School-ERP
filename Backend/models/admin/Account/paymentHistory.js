const mongoose=require("mongoose");

const paymentHistorySchema=new mongoose.Schema(
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

    invoice:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"Invoice"
    },

    method:{
        type:String,
        enum:["Cash","Card","UPI","Cheque","Bank Transfer"],
        default:"Cash"
    },

    amount:{
        type:Number,
        required:true
    },

    paymentBy:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    paymentDate:{
        type:Date,
        default:Date.now
    }
},
{
    timestamps:true
});

module.exports=mongoose.model("PaymentHistory",paymentHistorySchema);