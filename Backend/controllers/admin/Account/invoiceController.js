const invoice = require('../../../models/admin/Account/invoice');

exports.createInvoice = async(req,res)=>{
try{
    const createInvoiceData = await invoice.create(req.body);

    res.status(201).json({
        success:true,
        message:"invoice data created successfully",
        data:createInvoiceData
    });
}catch(error){
    res.status(500).json({
        success:false,
        message:error.message
    });
}
};

exports.getAllInvoices = async(req,res)=>{
    try{
        const getInvoiceData = await invoice.find();

    res.status(201).json({
       success:true,
        message:"invoice data found successfully",
        data:getInvoiceData

    });
}catch(error){
    res.status(500).json({
        success:false,
        message:error.message
    })
}   
};

exports.getInvoiceById = async(req,res)=>{
    try{

        const getInvoiceDataById = await invoice.findById(req.params.id);

        if(!getInvoiceDataById){
            return res.status(404).json({

                success: false,
                message:"Invoice data does not  found"

            });

        }

        res.status(200).json({
            success:true,
            message:"Invoice data found successfully",
            data:getInvoiceDataById
        });

    }catch(error){
        res.status.json({
            success:true,
            message:error.message
        });
    }
};


exports.updateInvoiceById = async(req,res)=>{

    try{

        const updateInvoiceData = await invoice.findByIdAndUpdate(
            req.params.id,
            req.body,
            {
                new:true,
                runValidators:true
            }
        )
        if(!updateInvoiceData){
            return res.status(404).json({
                success:true,
                message:"invoice data does not found"
            }); 
        }
         res.status(200).json({
                success:true,
                message:"invoice data successfully updated",
                data: updateInvoiceData
            });
    }catch(error){
        res.status(500).json({
            success: false,
            message:error.message
        });
    }
};

exports.deleteInvoiceById = async(req,res) => {
    try{
        const deleteExpenseData = await invoice.findByIdAndDelete(req.params.id);

        if(!deleteExpenseData){
            return res.status(404).json({
                success:false,
                message:"Invoice data does not found",
            });
        }
        res.status(200).json({
            success:true,
            message:"Invoice data deleted successfully",

        });
    }catch(error){
        res.json({
            success:true,
            message:error.message
        });
    }
};
