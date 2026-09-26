const Student = require("../models/student.models");

exports.createStudent = async(data) => {
     return await Student.create(data);
    populate("user")
    .populate("class")
    .populate("section")
    .populate("parent")
    .sort({createdAt:-1});
};
exports.getAllStudents = async()=>{
    return await Student.find()
        .populate("user")
        .populate("class")
        .populate("section")
        .populate("parent")
        .sort({createdAt: -1})

};

exports.getStudentById = async (id) => {
    return await Student.findById(id)
        .populate("user")
        .populate("class")
        .populate("section")
        .populate("parent");
}

exports.updateStudent = async (id,data) => {
    return await Student.findByIdAndUpdate(
        id,
        data,
        {
            new: true,
            runValidators: true
        }
    );
};

exports.deleteStudent = async(id) => {
    return await Student.findByIdAndDelete(id);
};

