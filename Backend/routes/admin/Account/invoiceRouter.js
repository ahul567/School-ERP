const express = require('express');
const routes = express.Router();
const {
    createInvoice,
    getAllInvoices,
    getInvoiceById,
    updateInvoiceById,
    deleteInvoiceById
} = require("../../../controllers/admin/Account/invoiceController");


routes.post('/',createInvoice);
routes.get('/',getAllInvoices);
routes.get('/:id',getInvoiceById);
routes.put('/:id',updateInvoiceById);
routes.delete('/:id',deleteInvoiceById);

module.exports = routes;