const express = require('express');
const routes = express.Router();
const {createIncome,
    getAllIncome,
    getIncomeById,
    updateIncomeById,
    deleteIncomeById}  = require('../../../controllers/admin/Account/incomeController');


 routes.get('/',getAllIncome);
 routes.get('/:id',getIncomeById);
 routes.post('/',createIncome);
 routes.put('/:id',updateIncomeById);
 routes.delete('/:id',deleteIncomeById);

 module.exports = routes;