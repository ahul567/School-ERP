const paymenthistory = require('../../../models/Account/paymentHistory');

exports.createPaymentHistory = async(req,res) => {
    try{
        const createpaymenthistory = await paymenthistory.create(req.body);
        res.status(201).json({
            success:true,
            message:"payment History successfully created",
            data: createpaymenthistory
        });
    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

exports.getAllPaymentHistory = async(req,res)=>{
    try{
       const getallpaymenthistory = await paymenthistory.find();

       res.status(201).json({
        success: true,
        message:"Payment Histroy Found Successfully",
        data: getallpaymenthistory
       });

    }catch(error){
        res.status(500).json({
            success:false,
            message:error.message
        });
    }
};

exports.getPaymentHistoryById = async(req,res) => {
    try{
        const getpaymenthistorybyid = await paymenthistory.findById(req.params.id);

        if(!getpaymenthistorybyid){
            return res.status(404).json({
                success:false,
                message:"Payment history not found"
            });
        }

        res.status(200).json({
            success:true,
            message:"Payment history found successfully",
            data: getpaymenthistorybyid 
        })
    }catch(error){
        res.status(500).json({
            success : false,
            message: error.message
        })
    }
};


