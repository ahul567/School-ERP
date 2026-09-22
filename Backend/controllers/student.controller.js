const studentService = require("../service/student.service");

exports.createStudent = async (req, res) => {
    try {

        const student =
            await studentService.createStudent(req.body);

        res.status(201).json({
            success: true,
            message: "Student created successfully",
            data: student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


exports.getAllStudents = async (req, res) => {
    try {

        const students =
            await studentService.getAllStudents();

        res.status(200).json({
            success: true,
            data: students
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


exports.getStudentById = async (req, res) => {
    try {

        const student =
            await studentService.getStudentById(
                req.params.id
            );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            data: student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


exports.updateStudent = async (req, res) => {
    try {

        const student =
            await studentService.updateStudent(
                req.params.id,
                req.body
            );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student updated successfully",
            data: student
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};


exports.deleteStudent = async (req, res) => {
    try {

        const student =
            await studentService.deleteStudent(
                req.params.id
            );

        if (!student) {
            return res.status(404).json({
                success: false,
                message: "Student not found"
            });
        }

        res.status(200).json({
            success: true,
            message: "Student deleted successfully"
        });

    } catch (error) {

        res.status(500).json({
            success: false,
            message: error.message
        });

    }
};