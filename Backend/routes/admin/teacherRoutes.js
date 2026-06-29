const express = require('express');
const router = express.Router();

const {
    getTeacher,
    createTeacher
} = require('../../controllers/admin/teacherController');
router.get('/', getTeacher);
router.post('/', createTeacher);
module.exports = router;