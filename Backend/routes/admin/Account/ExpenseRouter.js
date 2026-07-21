
const express = require("express");
const routes = express.Router();
const{createExpense,
    getAllExpense,
    getExpenseById,
    updateExpenseById,
    deleteExpenseById} = require("../../../controllers/admin/Account/expenseController");

routes.get('/',getAllExpense);
routes.post('/',createExpense);
routes.get('/:id',getExpenseById);
routes.put('/:id',updateExpenseById);
routes.delete("/:id",deleteExpenseById);


module.exports = routes;
