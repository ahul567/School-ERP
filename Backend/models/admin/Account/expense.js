const mongoose=require("mongoose");

const expenseSchema=new mongoose.Schema(
{
    name:{
        type:String,
        required:true
    },

    date:{
        type:Date,
        default:Date.now
    },

    user:{
        type:mongoose.Schema.Types.ObjectId,
        ref:"User",
        required:true
    },

    amount:{
        type:Number,
        required:true
    },

    note:{
        type:String,
        default:""
    },

    file:{
        type:String,
        default:""
    }
},
{
    timestamps:true
});

module.exports=mongoose.model("Expense",expenseSchema);