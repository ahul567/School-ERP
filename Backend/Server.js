const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');

dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/students", require("./routes/admin/studentRoutes"));
app.use("/api/teachers", require("./routes/admin/teacherRoutes"));
app.use("/api/parents", require("./routes/admin/parentRoutes"));
app.use("/api/attendance", require("./routes/admin/attendanceRoutes"))
app.listen(5000, () => {

    console.log("Server is running on port 5000");
    
}
);
