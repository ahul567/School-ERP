const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const feeTypesRoutes = require("./routes/admin/Account/FeeTypesRouter");
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/fee-types",feeTypesRoutes);
app.listen(5000, () => {

    console.log("Server is running on port 5000");
    
}
);
