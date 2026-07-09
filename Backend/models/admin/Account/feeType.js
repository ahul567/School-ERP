const mongoose = require("mongoose");

const feeTypeSchema = new mongoose.Schema(
{
    feeType:{
        type:String,
        required:true,
        unique:true,
        trim:true
    },
    note:{
        type:String,
        default:""
    }
},
{
    timestamps:true
});

module.exports = mongoose.model("FeeType",feeTypeSchema);