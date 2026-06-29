const teacherSchema = new mongoose.Schema({
    
    teacherId:{
        type:String,
        required:true,
        unique:true
    },

    name:{
        type:String,
        required:true
    },

    email:{
        type:String,
        required:true,
        unique:true
    },

    phone:String,

    photo:{
        type:String
    },

    subject:{
        type:String
    },

    fingerprintId:{
        type:Number,
        unique:true
    }

},{
    timestamps:true
});

module.exports = mongoose.model(
  "Teacher",
  teacherSchema
);