const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const feeTypesRoutes = require("./routes/admin/Account/FeeTypesRouter");
const expenseRouter = require("./routes/admin/Account/ExpenseRouter");
const incomeRouter = require("./routes/admin/Account/incomeRouter");
const invoiceRouter = require("./routes/admin/Account/invoiceRouter");
const authRoutes = require('./routes/authRoutes');
dotenv.config();
connectDB();

const app = express();
app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);
app.use("/api/fee-types",feeTypesRoutes);
app.use("/api/expense",expenseRouter);
app.use("/api/income",incomeRouter);
app.use("/api/invoice",invoiceRouter);
app.listen(5000, () => {

    console.log("Server is running on port 5000");
    
}
);
