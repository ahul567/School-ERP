const mongoose = require("mongoose");

const promotionSchema = new mongoose.Schema(
{
    academicYear:{
        type:String,
        required:true
    },

    class:{
        type:String,
        required:true
    },

    promotedStudents:[
        {
            type:mongoose.Schema.Types.ObjectId,
            ref:"Student"
        }
    ]
},
{
    timestamps:true
});

module.exports =
mongoose.model(
"Promotion",
promotionSchema
);