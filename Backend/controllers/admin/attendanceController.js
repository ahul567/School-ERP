const Attendance = require('../../models/admin/Attendance.js');

const getAttendance = async(req,res)=>{
    try{
    const showAttendance = await Attendance.find();
    res.status(200).json(showAttendance);
    }
    catch(err){
        res.status(500).json({
            message:err.message
        });
    }
    
};

const createAttendance = async(req,res)=>{
    try{
    const  attendanceData = await Attendance.create(req.body);
    res.status(201).json(attendanceData);
    }catch(err){
        res.status(500).json({
            message:err.message
        });
    }
   
};

module.exports = {
    getAttendance,
    createAttendance
};