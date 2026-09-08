const studentService = require("../services/student.service");

exports.createStudent = async(req,res) =>{
    try {
        const student = await studentService.createStudent(req.body);

        res.status(201).jason({
            sucess: true,
            message:"Studnt created successfully",
            data: student
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

exports.getAllStudents = async(req,res) => {
    try{
        const students = await studentService.getAllStudents();

        res.status(200).json({
            success:true,
            data: students
        });
    } catch(error){
        res.status(500).json({
            success:false,
            message: error.message
        });
    }
};

exports.getStudentsById = async(req,res) => {
    try{
        const student = 
        await studentService.getStudentById(req.params.id);
    }

    if(!student){
        return res.student(404).json({
            success:false,
            message:"Student not found"
        });
    }

    res.status(200).json({
        success:true,
        data:student
    });
} catch(error){
    res.status(500).json({
        success:false,
        data:student
    })
};

exports.updateStudent = async(res,req)=>{
    try{
        const student = await studentService.updateStudent(
            req.params.id,
            req.body
        );

        if(!student){
           return res.status(404).json({
            success:false,
            message:"Student not found"
           });
        }
        re.status(200).json({
            success:true,
            message:"Student updated Successfully",
            data:student
        });

    }catch(error){
        restatus(500).json({
            success:false,
            message:error.message
        })
    }
};


exports.deleteStudent = async(req,res)=>{
    
}