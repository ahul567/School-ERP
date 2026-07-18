const express = require("express")
const router = express.Router();

const {
    createFeeType,
    getAllFeeTypes,
    getFeeTypeById,
    updateFeeType,
    deleteFeeType
}  = require("../../../controllers/admin/Account/FeeTypesController");

router.post("/",createFeeType);
router.get("/",getAllFeeTypes);
router.get("/:id",getFeeTypeById);
router.put("/:id",updateFeeType);
router.delete("/:id",deleteFeeType);

module.exports = router;