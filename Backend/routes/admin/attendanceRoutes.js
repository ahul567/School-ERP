const express = require('express');
const router = express.Router();
const{createAttendance,
      getAttendance
} = require('../../controllers/admin/attendanceController');

router.get('/',getAttendance);
router.post('/',createAttendance);

module.exports = router;