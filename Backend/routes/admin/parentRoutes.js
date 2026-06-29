const express = require("express");
const router = express.Router();

const {
    getParents,
    createParent
} = require('../../controllers/admin/parentController');
router.get('/', getParents);
router.post('/', createParent);
module.exports = router;