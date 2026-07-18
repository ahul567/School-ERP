const FeeType = require('../../../models/admin/Account/feeType');

exports.createFeeType = async(req,res)=>{
    try{
        const feeType = await FeeType.create(req.body);
        res.status(201).json({
            success:true,
            message:"feeType created successfully",
            data:feeType
        });
    }catch(error){
         res.status(500).json({
            success:false,
            message:error.message
         });
    }
};


exports.getAllFeeTypes = async(req,res)=>{
    try{
        const feeType = await FeeType.find();
        res.status(200).json({
            success:true,
            data:feeType
        })
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });

    }
};

exports.getFeeTypeById = async (req, res) => {
    try {
        const feeType = await FeeType.findById(req.params.id);

        if (!feeType) {
            return res.status(404).json({
                success: false,
                message: "Fee Type Not Found"
            });
        }

        res.status(200).json({
            success: true,
            data: feeType
        });

    } catch (error) {
        res.status(500).json({
            success: false,
            message: error.message
        });
    }
};
    exports.updateFeeType = async(req,res)=>{
        try{
            const feeType = await FeeType.findByIdAndUpdate(
                req.params.id,
                req.body,
                {
                    new:true,
                    runValidators: true
                }
            );
            if(!feeType){
                return res.status(404).json({
                    success:false,
                    message:"Fee Type Not Found"
                });
            }
            res.status(200).json({
                success:true,
                message:"Fee Type Updated SuccessFully",
                data:feeType
            });
        }catch(error){
            res.status(500).json({
                success:false,
                message:error.message
            });
        }
    };
    exports.deleteFeeType = async(req,res)=>{
       
        try{
        const feeType = await FeeType.findByIdAndDelete(req.params.id);
        if(!feeType){
            return res.status(404).json({
                succes:false,
                message:"Fee Type Not Found"
            });
        }
        res.status(200).json({
            success:true,
            message:"Fee Type Deleted Successfully"
        })
        }catch(error){
            res.status(500).json({
                success:false,
                message:error.message
            });
        }
    };
